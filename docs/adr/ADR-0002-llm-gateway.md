# ADR-0002: LLM gateway

## Status

Accepted.

## Context

The platform needs one provider abstraction that can route tasks across a broad family of models while respecting free-tier limits, cost, and quality requirements.

## Decision

Use OpenRouter as the first gateway, with failover to direct providers where needed. The gateway is a configurable layer, not hard-coded to one model family.

## Options considered

| Option | Complexity | Cost | Scalability | Team familiarity |
| --- | --- | --- | --- | --- |
| OpenRouter only | Medium | Low | High | Medium |
| OpenRouter + direct providers | High | Low | Very high | Medium |
| Self-hosted vLLM | High | Medium | High | Low |

## Reference docs

- OpenRouter API docs: https://openrouter.ai/docs/api-reference/overview
- OpenRouter model list: https://openrouter.ai/models

## Consequences

- Free-tier limitations are respected by design.
- The system can route low-risk tasks to cheap models and harder tasks to stronger models.
- Provider failover is possible without changing business logic.

## Action items

- Build `ModelCatalog` and refresh schedules.
- Add per-purpose router policies.
- Add a cost estimator and fallback logic.
