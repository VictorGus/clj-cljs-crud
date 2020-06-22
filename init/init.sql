create table if not exists patient (id text primary key not null, resource jsonb);

SELECT 'CREATE DATABASE fortest TEMPLATE testbase' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'fortest')\gexec
