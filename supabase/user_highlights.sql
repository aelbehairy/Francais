create extension if not exists "pgcrypto";

create table if not exists public.user_highlights (
  id uuid primary key default gen_random_uuid(),
  user_id text,
  page text,
  section text,
  item_text text not null,
  item_type text not null,
  arabic_translation text,
  french_text text,
  created_at timestamptz default now(),
  constraint unique_highlight unique (user_id, page, section, item_text)
);

create unique index if not exists user_highlights_unique_item
  on public.user_highlights (page, section, item_text);

alter table public.user_highlights enable row level security;

drop policy if exists "Allow public read user highlights" on public.user_highlights;
create policy "Allow public read user highlights"
  on public.user_highlights
  for select
  using (true);

drop policy if exists "Allow public insert user highlights" on public.user_highlights;
create policy "Allow public insert user highlights"
  on public.user_highlights
  for insert
  with check (true);

drop policy if exists "Allow public update user highlights" on public.user_highlights;
create policy "Allow public update user highlights"
  on public.user_highlights
  for update
  using (true)
  with check (true);

drop policy if exists "Allow public delete user highlights" on public.user_highlights;
create policy "Allow public delete user highlights"
  on public.user_highlights
  for delete
  using (true);
