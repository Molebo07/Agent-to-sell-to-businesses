# ADR-0001: Agent runtime

## Status

Proposed.

## Context

The product needs a runtime that is provider-agnostic, cost-aware, and easy to control for multi-tenant usage. Boop's original pattern relies on a personal subscription and a Claude-specific runtime, which is not suitable for commercial SaaS.

## Decision

Use a thin custom loop on the Vercel AI SDK and/or an OpenAI-compatible client pointed at OpenRouter, with provider-neutral abstractions, model capability checks, and retry policy controls.

## Options considered

| Option | Complexity | Cost | Scalability | Team familiarity |
| --- | --- | --- | --- | --- |
| Claude Agent SDK | Medium | High | Medium | Low |
| Vercel AI SDK + OpenRouter | Medium | Low | High | Medium |
| LangGraph | High | Medium | High | Medium |
| Self-hosted OpenAI-compatible stack | High | Medium | High | Low |

## Reference docs

- OpenRouter models and API overview: https://openrouter.ai/docs/api-reference/overview
- Vercel AI SDK docs: https://sdk.vercel.ai/docs

## Consequences

- The runtime is portable across vendors.
- Model selection remains config-driven.
- It is easy to run free and paid models through the same abstraction.

## Action items

- Define `LLMProvider` interface.
- Add provider capability probes and fallbacks.
- Add tenant-level policy and budget routing.
