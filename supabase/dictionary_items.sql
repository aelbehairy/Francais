create extension if not exists "pgcrypto";

create table if not exists public.dictionary_items (
  id uuid primary key default gen_random_uuid(),

  user_id text default 'default_user',

  source_page text,
  source_section text,

  item_text text not null,
  item_type text not null check (
    item_type in ('word', 'phrase', 'sentence', 'statement', 'card')
  ),

  arabic_translation text,
  english_translation text,

  notes text,

  created_at timestamptz default now(),
  updated_at timestamptz default now(),

  constraint unique_dictionary_item unique (
    user_id,
    source_page,
    source_section,
    item_text
  )
);

alter table public.dictionary_items enable row level security;

drop policy if exists "Allow public read dictionary" on public.dictionary_items;
create policy "Allow public read dictionary"
on public.dictionary_items
for select
using (true);

drop policy if exists "Allow public insert dictionary" on public.dictionary_items;
create policy "Allow public insert dictionary"
on public.dictionary_items
for insert
with check (true);

drop policy if exists "Allow public update dictionary" on public.dictionary_items;
create policy "Allow public update dictionary"
on public.dictionary_items
for update
using (true)
with check (true);

drop policy if exists "Allow public delete dictionary" on public.dictionary_items;
create policy "Allow public delete dictionary"
on public.dictionary_items
for delete
using (true);
