# WhatsApp onboarding guide

## Goal

Connect each tenant's WhatsApp Business number through Meta's official business tooling and keep the platform compliant.

## Required verification steps

1. Confirm the business is verified by Meta as a legitimate customer account.
2. Use Meta's Embedded Signup flow when available.
3. Ensure the business has an app and system user configured.
4. Store API credentials in a secure secret manager; never in client code.
5. Validate that the number is permitted for the brand and is not blocked.

## Fallback path

If Embedded Signup is unavailable or the tenant cannot complete it in-app, the tenant should complete the equivalent Meta business assignment in a controlled way and provide the generated credentials to the operator team.

## Safety notes

- Never use unofficial WhatsApp libraries.
- Always validate inbound signatures and deduplicate message IDs.
- Respect customer service window rules and template limits.
- Track cost per WhatsApp message and surface it in the tenant onboarding wizard.

## Operational checklist

- Number connected and active
- Verified webhooks configured
- Template library created for greeting and handoff
- Delivery status alerts enabled
- Revenue and cost estimation visible to the operator
