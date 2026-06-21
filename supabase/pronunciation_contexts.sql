create extension if not exists "pgcrypto";

create table if not exists public.pronunciation_contexts (
  id uuid primary key default gen_random_uuid(),
  user_id text default 'default_user',
  content text not null,
  level text not null check (level in ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')),
  score numeric(4,1),
  score_date timestamptz not null default now(),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists pronunciation_contexts_score_date_idx
  on public.pronunciation_contexts (score_date desc);

alter table public.pronunciation_contexts enable row level security;

drop policy if exists "Allow public read pronunciation contexts" on public.pronunciation_contexts;
create policy "Allow public read pronunciation contexts"
on public.pronunciation_contexts
for select
using (true);

drop policy if exists "Allow public insert pronunciation contexts" on public.pronunciation_contexts;
create policy "Allow public insert pronunciation contexts"
on public.pronunciation_contexts
for insert
with check (true);

drop policy if exists "Allow public update pronunciation contexts" on public.pronunciation_contexts;
create policy "Allow public update pronunciation contexts"
on public.pronunciation_contexts
for update
using (true)
with check (true);

drop policy if exists "Allow public delete pronunciation contexts" on public.pronunciation_contexts;
create policy "Allow public delete pronunciation contexts"
on public.pronunciation_contexts
for delete
using (true);