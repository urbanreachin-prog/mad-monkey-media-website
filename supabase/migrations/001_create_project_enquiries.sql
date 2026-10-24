-- ============================================================================
-- Mad Monkey Media — Supabase SQL Schema for `project_enquiries`
-- Run this script in your Supabase Project -> SQL Editor -> New Query
-- ============================================================================

create extension if not exists "pgcrypto";

create table if not exists public.project_enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text not null,
  email text not null,
  phone text not null,
  service_required text not null,
  budget text,
  project_details text not null,
  status text not null default 'New' check (status in ('New', 'In Review', 'Contacted', 'Archived')),
  email_notification_sent boolean not null default false,
  submitted_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

-- Indexes for fast filtering by status and submission date in Supabase Table Editor
create index if not exists idx_project_enquiries_submitted_at
  on public.project_enquiries (submitted_at desc);

create index if not exists idx_project_enquiries_status
  on public.project_enquiries (status);

-- Enable Row Level Security (RLS)
-- Server-side inserts using SUPABASE_SERVICE_ROLE_KEY bypass RLS automatically
-- while keeping all client leads private and inaccessible to anonymous public reads.
alter table public.project_enquiries enable row level security;

-- Optional policy: allow service_role full access explicitly
drop policy if exists "Service role full access on project_enquiries" on public.project_enquiries;
create policy "Service role full access on project_enquiries"
  on public.project_enquiries
  for all
  to service_role
  using (true)
  with check (true);
