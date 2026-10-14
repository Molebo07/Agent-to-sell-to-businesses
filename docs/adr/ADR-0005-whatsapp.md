# ADR-0005: WhatsApp integration

## Status

Accepted.

## Context

WhatsApp is a core channel, but the product must avoid unofficial clients and operate under compliant Meta processes.

## Decision

Use Meta's official WhatsApp Cloud API with Embedded Signup and a strict template manager. Unofficial clients are prohibited.

## Options considered

| Option | Complexity | Cost | Scalability | Team familiarity |
| --- | --- | --- | --- | --- |
| Meta Cloud API direct | Medium | Medium | High | Medium |
| BSP like Twilio or 360dialog | Medium | Medium | High | Medium |
| Unofficial libraries | Low | Low | Low | Low |

## Reference docs

- Meta WhatsApp Cloud API docs: https://developers.facebook.com/docs/whatsapp/cloud-api/
- Meta messaging and quality guide: https://developers.facebook.com/docs/whatsapp/overview/

## Consequences

- Safer compliance posture and fewer number bans.
- More operational setup for onboarding and verification.
- Clearer template restrictions and cost tracking.

## Action items

- Document onboarding and verification.
- Add webhook validation and dedup logic.
- Add template manager and service-window logic.
