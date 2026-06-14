create extension if not exists pgcrypto;

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) > 0),
  email text not null check (position('@' in email) > 1),
  message text not null check (char_length(trim(message)) > 0),
  status text not null default 'new' check (status in ('new', 'read', 'replied')),
  source text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists contact_messages_created_at_idx on public.contact_messages (created_at desc);
create index if not exists contact_messages_status_idx on public.contact_messages (status);

create or replace function public.set_contact_messages_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists contact_messages_updated_at on public.contact_messages;

create trigger contact_messages_updated_at
before update on public.contact_messages
for each row
execute function public.set_contact_messages_updated_at();

alter table public.contact_messages enable row level security;

drop policy if exists "Allow public message inserts" on public.contact_messages;
drop policy if exists "Allow inbox admin to read messages" on public.contact_messages;
drop policy if exists "Allow inbox admin to update messages" on public.contact_messages;

create policy "Allow public message inserts"
on public.contact_messages
for insert
to anon, authenticated
with check (true);

create policy "Allow inbox admin to read messages"
on public.contact_messages
for select
to authenticated
using ((auth.jwt() ->> 'email') = 'yazdanzv.1378@gmail.com');

create policy "Allow inbox admin to update messages"
on public.contact_messages
for update
to authenticated
using ((auth.jwt() ->> 'email') = 'yazdanzv.1378@gmail.com')
with check ((auth.jwt() ->> 'email') = 'yazdanzv.1378@gmail.com');
