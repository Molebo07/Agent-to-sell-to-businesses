# Agent-to-sell-to-businesses

A prototype multi-tenant AI customer support platform for South African SMBs. It demonstrates a sales-ready SaaS concept for managing customer conversations across WhatsApp and a website widget, with tenant isolation, AI handoff, lead capture, and operator oversight.

## Platform name

The working platform name in this prototype is: InTouch AI.

## What is included

- Landing page and product messaging for a sellable SaaS product
- Operator dashboard mock for tenant and handoff oversight
- Embeddable widget prototype for website customer chat
- Express API for health, metrics, tenants, conversations, and lead capture
- Architecture, research, and ADR documentation under `docs/`
- Boop fork audit and tech-debt register

## Quick start

```bash
npm install
npm start
```

Then open:

- http://localhost:3000/
- http://localhost:3000/app

## MIT attribution

This project was inspired by the Boop Agent architecture and is intentionally reworked for a commercial multi-tenant SaaS product. The original Boop Agent repository is distributed under the MIT License; this repository keeps that attribution intent while adapting the design for a B2B commercial platform.

## Documentation map

- `docs/ASSUMPTIONS.md`
- `docs/BOOP-FORK-AUDIT.md`
- `docs/SYSTEM-DESIGN.md`
- `docs/WHATSAPP-ONBOARDING.md`
- `docs/tech-debt.md`
- `docs/research/`
- `docs/adr/`
