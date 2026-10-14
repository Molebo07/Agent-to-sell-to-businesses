# ADR-0007: Multi-tenancy model

## Status

Accepted.

## Context

The platform must isolate tenant data, caches, vectors, logs, and permissions in a safe and auditable way.

## Decision

Use a shared Postgres schema with strict row-level security and tenant-scoped indexes, plus explicit feature gating by tenant and plan.

## Options considered

| Option | Complexity | Cost | Scalability | Team familiarity |
| --- | --- | --- | --- | --- |
| Shared schema + RLS | Medium | Low | High | Medium |
| Schema-per-tenant | High | Medium | Medium | Low |
| DB-per-tenant | High | High | Medium | Low |

## Consequences

- Lower infrastructure cost than tenant isolation by full database.
- Stronger security is required in query layer and policy enforcement.
- Less operational blast radius than a full-per-tenant database model.

## Action items

- Introduce `tenantId` in all critical tables.
- Add policy tests for cross-tenant access controls.
- Audit vector indexes and file storage paths.
