export type IconName =
  | 'download'
  | 'arrow'
  | 'spark'
  | 'external'
  | 'github'
  | 'linkedin'
  | 'scholar'
  | 'mail'
  | 'chat'
  | 'close'
  | 'sun'
  | 'moon'
  | 'academic'
  | 'engineering'
  | 'research';

export const icons: Record<IconName, string> = {
  download:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v10m0 0 4-4m-4 4-4-4M5 17.5h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  arrow:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h13m0 0-5-5m5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  spark:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3.5 13.9 8.1 18.5 10l-4.6 1.9L12 16.5l-1.9-4.6L5.5 10l4.6-1.9L12 3.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M19 14.5l.9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9.9-2.4Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>',
  external:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 5h5v5M10 14l9-9M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  github:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.46.08.63-.2.63-.45v-1.58c-2.56.55-3.1-1.08-3.1-1.08-.42-1.08-1.03-1.37-1.03-1.37-.84-.58.06-.57.06-.57.93.07 1.42.95 1.42.95.82 1.41 2.15 1 2.67.77.08-.59.33-1 .6-1.23-2.05-.24-4.2-1.03-4.2-4.56 0-1 .35-1.81.93-2.45-.09-.23-.4-1.15.09-2.4 0 0 .76-.24 2.48.93a8.54 8.54 0 0 1 4.52 0c1.72-1.17 2.48-.93 2.48-.93.49 1.25.18 2.17.09 2.4.58.64.93 1.44.93 2.45 0 3.54-2.15 4.32-4.2 4.56.34.3.65.88.65 1.78v2.63c0 .25.17.53.64.44A9.2 9.2 0 0 0 12 2.8Z" stroke="currentColor" stroke-width="0.8" stroke-linejoin="round"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.8 9.3V18m0-8.7v-.02M6.8 6.2v.02M10 18v-4.7c0-1.8 1-2.9 2.6-2.9 1.6 0 2.4 1 2.4 2.8V18m0-5.1c0-1.7.8-2.9 2.5-2.9 1.6 0 2.5 1.1 2.5 3V18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><rect x="4.5" y="4.5" width="15" height="15" rx="3.5" stroke="currentColor" stroke-width="1.2"/></svg>',
  scholar:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4 3 9l9 5 9-5-9-5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M6 11v4.5c0 1.8 2.7 3.5 6 3.5s6-1.7 6-3.5V11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  mail:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5v9A1.5 1.5 0 0 1 18.5 18h-13A1.5 1.5 0 0 1 4 16.5v-9Z" stroke="currentColor" stroke-width="1.8"/><path d="m5.5 7.5 6.5 5 6.5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  chat:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4.5 6.5A2.5 2.5 0 0 1 7 4h10a2.5 2.5 0 0 1 2.5 2.5v6A2.5 2.5 0 0 1 17 15H10l-4.5 4v-4.4A2.5 2.5 0 0 1 4.5 12.5v-6Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 8.5h8M8 11h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  close:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  lock:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7.5 11V8.5a4.5 4.5 0 0 1 9 0V11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M6.8 11h10.4A1.8 1.8 0 0 1 19 12.8v5.4A1.8 1.8 0 0 1 17.2 20H6.8A1.8 1.8 0 0 1 5 18.2v-5.4A1.8 1.8 0 0 1 6.8 11Z" stroke="currentColor" stroke-width="1.8"/><path d="M12 14v2.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  sun:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4.5V3m0 18v-1.5M4.5 12H3m18 0h-1.5M6.1 6.1 5 5m14 14-1.1-1.1M17.9 6.1 19 5M5 19l1.1-1.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="12" r="4.8" stroke="currentColor" stroke-width="1.8"/></svg>',
  moon:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 14.2A8.6 8.6 0 1 1 9.8 4a7.2 7.2 0 1 0 10.2 10.2Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  academic:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4 3.5 8.2 12 12.5l8.5-4.3L12 4Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M6 10v3.3c0 1.7 2.7 3.2 6 3.2s6-1.5 6-3.2V10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 12.5v6.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  engineering:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4.5 6.5h7m8 0h-2.2M4.5 17.5h3.2m10.3 0h-6.5M12 4.5v4m0 7v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M9.2 8.5a3 3 0 1 0 5.6 0 3 3 0 0 0-5.6 0Z" stroke="currentColor" stroke-width="1.6"/><path d="M8.5 17.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z" stroke="currentColor" stroke-width="1.6"/></svg>',
  research:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3.5v2.5M12 18v2.5M4.7 12H2.2M21.8 12h-2.5M6.1 6.1 4.3 4.3M19.7 19.7l-1.8-1.8M17.9 6.1l1.8-1.8M6.1 17.9l-1.8 1.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Z" stroke="currentColor" stroke-width="1.8"/><path d="M15.2 12a3.2 3.2 0 1 1-6.4 0 3.2 3.2 0 0 1 6.4 0Z" stroke="currentColor" stroke-width="1.4"/></svg>',
};
