# Boop fork audit

This document records the Boop Agent code patterns that are worth borrowing and the parts that must be reworked for a multi-tenant, commercial SaaS product.

## Audit summary

| Module / area | Recommendation | Reason |
| --- | --- | --- |
| Dispatcher agent | KEEP / REWRITE | The dispatcher-worker pattern is useful, but the loop must be redesigned around tenant state, conversation budgets, and tool permissioning. |
| Execution workers | KEEP / REWRITE | Narrow workers are a good fit. They must be scoped to a tenant and a set of approved tools. |
| Memory system | REWRITE | Long/permanent memory patterns are useful, but need tenant boundaries, retention policies, and POPIA-aware deletion flows. |
| Webhooks and ingress | REWRITE | Need signature verification, idempotency, rate limiting, and tenant origin validation. |
| Sendblue / iMessage | DROP | Not permitted for this commercial product; replace by channel adapters for WhatsApp and website chat. |
| Local Apple automation | DROP | Local-machine integrations violate the commercial product boundary and do not scale. |
| Model runtime | REWRITE | Remove dependency on personal Claude subscriptions; switch to provider-neutral model routing behind `LLMProvider`. |
| Usage/cost tracking | KEEP | The usageRecords concept is useful and should be extended to per-tenant billing and cost analysis. |
| Debug dashboard | KEEP | A real-time agent timeline is valuable for operators and QA. |
| Cron / reminders | KEEP | Follow-ups and reminders remain valuable, but must be tenant-aware and quota-limited. |
| Draft-and-confirm side-effects | KEEP | This is a strong pattern for bookings, payments, and actions with real side effects. |
| Security and auth | REWRITE | Requires tenant isolation, RBAC, signed sessions, and strict data boundaries. |

## Seeded tech-debt register

| ID | Area | Risk | Priority | Notes |
| --- | --- | --- | --- | --- |
| TD-01 | Tenant isolation | High | 30 | Every cache key, vector index, and conversation record must include `tenantId`. |
| TD-02 | Model gateway | High | 28 | Replace personal subscription assumptions with OpenRouter abstraction and routing checks. |
| TD-03 | WhatsApp onboarding | High | 26 | Embedded Signup and business verification are required for production. |
| TD-04 | RAG security | High | 25 | Retrieval must filter by tenant and reject untrusted external content. |
| TD-05 | Cost accounting | Medium | 22 | Usage and conversion tracking are needed before plan rollout. |

## Recommendation

The Boop source is a strong conceptual starting point, but it must be treated as a design reference, not a direct product dependency. The architecture should keep the dispatcher-worker model, draft-confirm tool actions, usage accounting, and dashboard approach while replacing every single-user assumption with a clean multi-tenant model.
