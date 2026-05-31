-- ============================================
-- STARPRINZ — Supabase Database Schema
-- Run this in your Supabase SQL Editor
-- ============================================

-- STUDIO: Generated Images
create table if not exists generated_images (
  id bigserial primary key,
  prompt text not null,
  enhanced_prompt text,
  style text,
  format text,
  output_type text,
  image_url text not null,
  file_name text,
  created_at timestamptz default now()
);

-- SPORTIFIED: Tournaments
create table if not exists tournaments (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  format text default 'round-robin', -- round-robin | knockout | group
  status text default 'active', -- active | completed | upcoming
  start_date date,
  end_date date,
  created_at timestamptz default now()
);

-- SPORTIFIED: Teams
create table if not exists teams (
  id uuid primary key default gen_random_uuid(),
  tournament_id uuid references tournaments(id) on delete cascade,
  name text not null,
  code text not null, -- e.g. "FH" for FC Horizon
  color text default '#2dd4bf',
  created_at timestamptz default now()
);

-- SPORTIFIED: Fixtures
create table if not exists fixtures (
  id uuid primary key default gen_random_uuid(),
  tournament_id uuid references tournaments(id) on delete cascade,
  home_team_id uuid references teams(id),
  away_team_id uuid references teams(id),
  home_score int default 0,
  away_score int default 0,
  status text default 'upcoming', -- upcoming | live | completed
  scheduled_at timestamptz,
  created_at timestamptz default now()
);

-- CBT: Exams
create table if not exists exams (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  subject text,
  duration_minutes int default 60,
  total_questions int default 30,
  status text default 'draft', -- draft | active | completed
  created_at timestamptz default now()
);

-- CBT: Questions
create table if not exists questions (
  id uuid primary key default gen_random_uuid(),
  exam_id uuid references exams(id) on delete cascade,
  question_text text not null,
  option_a text not null,
  option_b text not null,
  option_c text not null,
  option_d text not null,
  correct_option text not null, -- 'a' | 'b' | 'c' | 'd'
  order_index int default 0,
  created_at timestamptz default now()
);

-- CBT: Exam Sessions (student attempts)
create table if not exists exam_sessions (
  id uuid primary key default gen_random_uuid(),
  exam_id uuid references exams(id),
  student_name text not null,
  score int default 0,
  total_questions int default 0,
  status text default 'pending', -- pending | in_progress | completed
  started_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz default now()
);

-- ============================================
-- Storage Buckets (run via Supabase dashboard)
-- ============================================
-- Create bucket: "generated-images" (public)
-- Create bucket: "team-assets" (public)

-- Enable RLS (Row Level Security) - permissive for now
alter table generated_images enable row level security;
create policy "Public read generated_images" on generated_images for select using (true);
create policy "Public insert generated_images" on generated_images for insert with check (true);

alter table tournaments enable row level security;
create policy "Public read tournaments" on tournaments for select using (true);

alter table teams enable row level security;
create policy "Public read teams" on teams for select using (true);

alter table fixtures enable row level security;
create policy "Public read fixtures" on fixtures for select using (true);

alter table exams enable row level security;
create policy "Public read exams" on exams for select using (true);

alter table questions enable row level security;
create policy "Public read questions" on questions for select using (true);

alter table exam_sessions enable row level security;
create policy "Public read sessions" on exam_sessions for select using (true);
create policy "Public insert sessions" on exam_sessions for insert with check (true);
create policy "Public update sessions" on exam_sessions for update using (true);

-- ============================================
-- Seed Data
-- ============================================
insert into tournaments (name, description, format, status, start_date) values
  ('Starprinz Premier League', 'The main league tournament', 'round-robin', 'active', now());

-- Get the tournament id and seed teams
do $$
declare
  t_id uuid;
begin
  select id into t_id from tournaments limit 1;

  insert into teams (tournament_id, name, code, color) values
    (t_id, 'FC Horizon', 'FH', '#2dd4bf'),
    (t_id, 'Atlas United', 'AU', '#e8b94f'),
    (t_id, 'Storm XI', 'SX', '#a78bfa'),
    (t_id, 'Vortex SC', 'VS', '#4ade80'),
    (t_id, 'Iron City', 'IC', '#f0f0f5'),
    (t_id, 'Nova Stars', 'NS', '#f97168');
end $$;
