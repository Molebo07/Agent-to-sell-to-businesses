# ADR-0009: Hosting

## Status

Proposed.

## Context

The platform needs manageable cost, acceptable South African latency, and enough operational flexibility for a multi-tenant SaaS service.

## Decision

Start with a regionally sensible container deployment (e.g. VPS or managed cloud in a South Africa-friendly region) and keep the app stateless for easy migration later.

## Options considered

| Option | Complexity | Cost | Scalability | Team familiarity |
| --- | --- | --- | --- | --- |
| Vercel/Fly/Railway | Low | Medium | Medium | Medium |
| AWS in a South Africa-capable region | Medium | Medium | High | Medium |
| South African VPS | Medium | Low | Medium | Medium |

## Consequences

- Quick startup and lower operational burden.
- Potentially more migration work later as the business grows.
- Better ability to tune cost and region later.

## Action items

- Standardise environment variables and health checks.
- Add deployment pipeline and runbooks.
- Measure latency from Johannesburg/Cape Town to primary providers.
