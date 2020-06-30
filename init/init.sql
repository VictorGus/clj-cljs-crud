create table if not exists patient (id text primary key not null, resource jsonb);

create unique index if not exists oms_unique_idx on patient ((resource->>'identifier'));

SELECT 'CREATE DATABASE fortest TEMPLATE testbase' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'fortest')\gexec
