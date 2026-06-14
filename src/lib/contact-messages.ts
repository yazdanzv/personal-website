export type ContactMessageStatus = 'new' | 'read' | 'replied';

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

export interface ContactMessageRow extends ContactSubmission {
  id: string;
  status: ContactMessageStatus;
  created_at: string;
  updated_at: string | null;
  source: string | null;
}

export interface AdminSession {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  tokenType: string;
  userEmail: string;
}

export interface ContactApiConfig {
  url: string;
  anonKey: string;
  tableName: string;
  isConfigured: boolean;
}

const tableName = 'contact_messages';
const adminSessionKey = 'yazdan-admin-session';

export const contactApiConfig: ContactApiConfig = {
  url: import.meta.env.PUBLIC_SUPABASE_URL?.trim() ?? '',
  anonKey: import.meta.env.PUBLIC_SUPABASE_ANON_KEY?.trim() ?? '',
  tableName,
  isConfigured: Boolean(import.meta.env.PUBLIC_SUPABASE_URL?.trim() && import.meta.env.PUBLIC_SUPABASE_ANON_KEY?.trim()),
};

const normalizeBaseUrl = (value: string) => value.replace(/\/+$/, '');

const buildAuthHeaders = (token?: string): HeadersInit => ({
  apikey: contactApiConfig.anonKey,
  Authorization: `Bearer ${token ?? contactApiConfig.anonKey}`,
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

const buildRestUrl = (path: string) => `${normalizeBaseUrl(contactApiConfig.url)}/rest/v1/${path}`;

const buildAuthUrl = (path: string) => `${normalizeBaseUrl(contactApiConfig.url)}/auth/v1/${path}`;

const decodeJwtExpiry = (token: string) => {
  try {
    const [, payload] = token.split('.');
    if (!payload) return null;

    const json = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
    const parsed = JSON.parse(json) as { exp?: number };
    return typeof parsed.exp === 'number' ? parsed.exp : null;
  } catch {
    return null;
  }
};

const readErrorMessage = async (response: Response, fallback: string) => {
  const text = await response.text();

  if (!text) return fallback;

  try {
    const parsed = JSON.parse(text) as {
      error?: string;
      error_description?: string;
      message?: string;
      details?: string;
      msg?: string;
    };

    return parsed.error_description || parsed.message || parsed.details || parsed.msg || parsed.error || fallback;
  } catch {
    return text || fallback;
  }
};

export const hasContactApiConfig = () => contactApiConfig.isConfigured;

export const isAdminSession = (value: unknown): value is AdminSession => {
  if (typeof value !== 'object' || value === null) return false;

  const session = value as Partial<AdminSession>;
  return (
    typeof session.accessToken === 'string' &&
    typeof session.refreshToken === 'string' &&
    typeof session.expiresAt === 'number' &&
    typeof session.tokenType === 'string' &&
    typeof session.userEmail === 'string'
  );
};

export const getStoredAdminSession = () => {
  if (typeof window === 'undefined') return null;

  try {
    const raw = window.localStorage.getItem(adminSessionKey);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as unknown;
    return isAdminSession(parsed) ? parsed : null;
  } catch {
    return null;
  }
};

export const saveAdminSession = (session: AdminSession) => {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem(adminSessionKey, JSON.stringify(session));
  } catch {
    // Ignore storage failures.
  }
};

export const clearAdminSession = () => {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.removeItem(adminSessionKey);
  } catch {
    // Ignore storage failures.
  }
};

export const submitContactMessage = async (submission: ContactSubmission) => {
  if (!contactApiConfig.isConfigured) {
    throw new Error('Supabase is not configured.');
  }

  const response = await fetch(buildRestUrl(contactApiConfig.tableName), {
    method: 'POST',
    headers: buildAuthHeaders(),
    body: JSON.stringify({
      name: submission.name,
      email: submission.email,
      message: submission.message,
      status: 'new',
      source: 'portfolio-chat',
    }),
  });

  if (!response.ok) {
    throw new Error(await readErrorMessage(response, 'Unable to store the message.'));
  }
};

export const signInAdmin = async (email: string, password: string) => {
  if (!contactApiConfig.isConfigured) {
    throw new Error('Supabase is not configured.');
  }

  const response = await fetch(buildAuthUrl('token?grant_type=password'), {
    method: 'POST',
    headers: {
      apikey: contactApiConfig.anonKey,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const payload = (await response.json()) as
    | {
        access_token: string;
        refresh_token: string;
        expires_in: number;
        token_type: string;
        user?: { email?: string };
      }
    | { error?: string; error_description?: string; msg?: string; message?: string };

  if (!response.ok || !('access_token' in payload)) {
    const message =
      ('error_description' in payload && payload.error_description) ||
      ('message' in payload && payload.message) ||
      ('msg' in payload && payload.msg) ||
      ('error' in payload && payload.error) ||
      'Invalid admin credentials.';
    throw new Error(message);
  }

  const expiresAt = decodeJwtExpiry(payload.access_token) ?? Math.floor(Date.now() / 1000) + payload.expires_in;

  return {
    accessToken: payload.access_token,
    refreshToken: payload.refresh_token,
    expiresAt,
    tokenType: payload.token_type,
    userEmail: payload.user?.email ?? email,
  } satisfies AdminSession;
};

export const refreshAdminSession = async (session: AdminSession) => {
  if (!contactApiConfig.isConfigured) {
    throw new Error('Supabase is not configured.');
  }

  const response = await fetch(buildAuthUrl('token?grant_type=refresh_token'), {
    method: 'POST',
    headers: {
      apikey: contactApiConfig.anonKey,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ refresh_token: session.refreshToken }),
  });

  const payload = (await response.json()) as
    | {
        access_token: string;
        refresh_token: string;
        expires_in: number;
        token_type: string;
        user?: { email?: string };
      }
    | { error?: string; error_description?: string; msg?: string; message?: string };

  if (!response.ok || !('access_token' in payload)) {
    const message =
      ('error_description' in payload && payload.error_description) ||
      ('message' in payload && payload.message) ||
      ('msg' in payload && payload.msg) ||
      ('error' in payload && payload.error) ||
      'Unable to refresh admin session.';
    throw new Error(message);
  }

  const expiresAt = decodeJwtExpiry(payload.access_token) ?? Math.floor(Date.now() / 1000) + payload.expires_in;

  return {
    accessToken: payload.access_token,
    refreshToken: payload.refresh_token,
    expiresAt,
    tokenType: payload.token_type,
    userEmail: payload.user?.email ?? session.userEmail,
  } satisfies AdminSession;
};

export const fetchContactMessages = async (accessToken: string) => {
  if (!contactApiConfig.isConfigured) {
    throw new Error('Supabase is not configured.');
  }

  const response = await fetch(
    `${buildRestUrl(contactApiConfig.tableName)}?select=id,name,email,message,status,created_at,updated_at,source&order=created_at.desc`,
    {
      headers: buildAuthHeaders(accessToken),
    },
  );

  if (!response.ok) {
    throw new Error(await readErrorMessage(response, 'Unable to fetch messages.'));
  }

  return (await response.json()) as ContactMessageRow[];
};

export const updateContactMessageStatus = async (
  id: string,
  status: ContactMessageStatus,
  accessToken: string,
) => {
  if (!contactApiConfig.isConfigured) {
    throw new Error('Supabase is not configured.');
  }

  const response = await fetch(`${buildRestUrl(contactApiConfig.tableName)}?id=eq.${encodeURIComponent(id)}`, {
    method: 'PATCH',
    headers: {
      ...buildAuthHeaders(accessToken),
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({ status }),
  });

  if (!response.ok) {
    throw new Error(await readErrorMessage(response, 'Unable to update message.'));
  }
};
