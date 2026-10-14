# ADR-0004: Queue and orchestration

## Status

Accepted.

## Context

We need deterministic message ordering, retries, backpressure, and dead-letter handling without harming one tenant's traffic from another.

## Decision

Use a Postgres-backed queue such as `pg-boss` for the initial build, with a message contract that includes `tenantId`, `conversationId`, and `turnId`.

## Options considered

| Option | Complexity | Cost | Scalability | Team familiarity |
| --- | --- | --- | --- | --- |
| Postgres queue | Medium | Low | Medium | Medium |
| Redis/BullMQ | Medium | Low | High | Medium |
| Cloud queue | Low | Medium | High | Medium |
| Inngest/Trigger.dev | Medium | Medium | High | Low |

## Consequences

- Easier deployment and simpler data consistency.
- Stronger ties to the database layer.
- Need resilience patterns for queue lag and retry storms.

## Action items

- Add tenant-aware worker routing.
- Configure dead-letter queue and retries.
- Add observability for message backlog and errors.
