# ADR-0006: Web widget transport

## Status

Accepted.

## Context

Customers expect a website widget that is fast, branded, and low-latency. The product should support streaming responses and safe origin controls.

## Decision

Use a lightweight script tag with a short-lived signed session token and SSE-based streaming for responses. Allow-list origins and session validation are required.

## Options considered

| Option | Complexity | Cost | Scalability | Team familiarity |
| --- | --- | --- | --- | --- |
| SSE | Low | Low | Medium | Medium |
| WebSocket | Medium | Low | High | Medium |
| iframe | Medium | Low | Medium | Medium |
| Shadow DOM | High | Low | Medium | Low |

## Reference docs

- MDN EventSource: https://developer.mozilla.org/en-US/docs/Web/API/EventSource
- Web security best practices: https://developer.mozilla.org/en-US/docs/Web/Security

## Consequences

- Easy to embed and quick to load.
- Good UX with streaming replies.
- Simpler than a fully custom WebSocket stack for v1.

## Action items

- Add signed session issuance.
- Enforce allowed-origins and rate limits.
- Add accessibility and multilingual UI options.
