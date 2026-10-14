# ADR-0003: Database

## Status

Accepted.

## Context

A production deployment needs strong tenant isolation, structured data, and vector search. Convex is attractive but not ideal for a serious commercial SaaS design with explicit data residency and row-level security requirements.

## Decision

Use Postgres with `pgvector` and row-level security. The application should treat tenant isolation as first-class infrastructure.

## Options considered

| Option | Complexity | Cost | Scalability | Team familiarity |
| --- | --- | --- | --- | --- |
| Convex | Low | Medium | Medium | Low |
| Postgres + pgvector + RLS | Medium | Medium | High | Medium |
| Schema-per-tenant | High | Medium | Medium | Low |
| DB-per-tenant | High | High | Medium | Low |

## Reference docs

- PostgreSQL docs: https://www.postgresql.org/docs/
- pgvector docs: https://github.com/pgvector/pgvector
- Supabase Postgres guide: https://supabase.com/docs/guides/database

## Consequences

- Stronger portability and fewer vendor lock-ins.
- Acceptable performance for vector search and multi-tenant data isolation.
- More operational work than a simpler hosted DB.

## Action items

- Define tenant and channel tables.
- Add RLS policies and strict query filters.
- Add vector indexes and chunk metadata.
