# ADR-0010: Billing

## Status

Proposed.

## Context

Tenants need plans, quotas, usage monitoring, and a clean upgrade path. Billing must be separate from core app logic and support flexible payment methods.

## Decision

Wrap the payments provider behind a billing interface, with Stripe or PayFast/Paystack support evaluated by region, fees, and local market fit. Usage-based add-ons are designed in from the start.

## Options considered

| Option | Complexity | Cost | Scalability | Team familiarity |
| --- | --- | --- | --- | --- |
| Stripe | Medium | Medium | High | Medium |
| PayFast | Medium | Medium | Medium | Medium |
| Paystack | Medium | Low | Medium | Medium |
| Yoco | Medium | Medium | Low | Low |

## Consequences

- Can support local customer expectations while remaining flexible.
- More integration complexity than a simple monthly subscription.
- Stronger alignment to SMB realities.

## Action items

- Add plan and quota abstraction.
- Add usage thresholds and alerts.
- Support CSV and API export of billing records.
