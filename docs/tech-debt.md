# Tech debt register

This register is seeded from the Boop audit and the platform strategy. Priority formula: `(Impact + Risk) * (6 - Effort)`.

| ID | Title | Priority | Why it matters |
| --- | --- | --- | --- |
| TD-01 | Tenant isolation hardening | 30 | Prevents cross-tenant data leakage and ensures clean operations. |
| TD-02 | Model gateway abstraction | 28 | Removes subscription lock-in and makes routing configurable. |
| TD-03 | WhatsApp onboarding and compliance | 26 | Required before production customer numbers are allowed. |
| TD-04 | Knowledge access controls | 25 | Keeps retrieval and citations tenant-specific and auditable. |
| TD-05 | Cost accounting and plan gates | 22 | Enables healthy unit economics and abuse control. |

## Remediation plan

- Phase 1: fix tenant isolation, API signature validation, and model gateway routing.
- Phase 2: implement authoritative billing logic and cost thresholds.
- Phase 3: expand human handoff, evals, and operational dashboards.
- Phase 4: revisit tool registry and advanced workflow automation.
