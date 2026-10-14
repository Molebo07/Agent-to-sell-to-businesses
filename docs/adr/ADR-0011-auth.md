# ADR-0011: Auth

## Status

Accepted.

## Context

The platform needs role-based access for tenant admins, staff users, and operator accounts, plus SSO potential later.

## Decision

Use a provider-neutral auth layer such as Auth.js or a managed auth provider, with role-based access control and tenant membership checks tied to every request.

## Options considered

| Option | Complexity | Cost | Scalability | Team familiarity |
| --- | --- | --- | --- | --- |
| Auth.js | Medium | Low | High | Medium |
| Clerk | Low | Medium | High | Medium |
| Supabase Auth | Medium | Medium | High | Medium |

## Reference docs

- Auth.js docs: https://authjs.dev/docs
- OpenID Connect overview: https://openid.net/developers/specs/

## Consequences

- Simple role separation with better security posture.
- Stronger foundation for future SSO and governance.
- Requires careful tenant membership checks at every API boundary.

## Action items

- Define roles: operator, tenant admin, staff, customer.
- Enforce RBAC in each API route.
- Add SSO as a later extension not a blocker for v1.
