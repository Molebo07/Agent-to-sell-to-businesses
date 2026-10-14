# ADR-0012: Guardrails and evals

## Status

Accepted.

## Context

AI quality and safety must be monitored continuously; the app will operate on customer conversations and must avoid harmful mistakes and privacy leaks.

## Decision

Introduce eval sets, red-team prompts, conversation safety checks, and per-language quality tracking from day one. Add auto-handoff triggers and model fallback monitoring.

## Options considered

| Option | Complexity | Cost | Scalability | Team familiarity |
| --- | --- | --- | --- | --- |
| Manual QA only | Low | Low | Low | Medium |
| Eval suite + red team tests | Medium | Medium | High | Medium |
| Full offline model review | High | High | Medium | Low |

## Consequences

- Better trust and safety before customer launch.
- Stronger model quality tracking and regression prevention.
- More engineering time to maintain eval coverage.

## Action items

- Add a conversation eval harness.
- Create guardrail tests for prompt injection and PII handling.
- Export model-quality reports by language and tenant.
