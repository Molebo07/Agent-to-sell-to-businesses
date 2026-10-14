# Assumptions and defaults

This project is built under the following reasonable assumptions to keep delivery moving while we await formal customer interviews:

1. The initial product is aimed at South African service businesses with high FAQ traffic: salons, clinics, real-estate agents, restaurants, and repair services.
2. The first paid plan is targeted at R499-R1,999 per month, with usage caps and add-ons for advanced tools.
3. The initial implementation uses a model gateway abstraction, not a hard-coded Claude vended SDK path.
4. The business will prefer a PostgreSQL-based data layer with pgvector for production, while this prototype uses in-memory data and a clean domain model.
5. WhatsApp onboarding is done through Meta's official Embedded Signup flow, with a documented fallback for manual app-system user setup.
6. We default to a privacy-first design: redact PII from logs, never train on tenant content, and require per-tenant access boundaries.
7. The application is a prototype and does not claim live Meta or payment provider production integrations yet.
8. We will use English as the default interface language, with Afrikaans and isiZulu as the first expansion targets.

These assumptions are provisional and should be revisited once research interviews are complete.
