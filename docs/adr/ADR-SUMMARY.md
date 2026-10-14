# ADR summary for approval

| Decision | Rationale | Cost impact | Risks |
| --- | --- | --- | --- |
| Agent runtime: Vercel AI SDK + OpenRouter abstraction | Avoids lock-in to Claude subscriptions and supports multi-model routing | Low to medium | Provider capability differences and cost spikes if routing is not tuned |
| LLM gateway: OpenRouter first | Strong model availability and easier failover across providers | Low | Free-tier limits and rate caps can constrain development and traffic |
| Database: Postgres with pgvector + RLS | Best fit for tenant isolation, vector search, and auditability | Medium | Requires careful schema and policy design |
| Queue: Postgres-backed queue | Keeps message orchestration deterministic and integrated with data layer | Low | Queue backlog and dead-letter handling need operational controls |
| WhatsApp: Meta Cloud API direct | Best official integration path with business verification support | Medium | Compliance and onboarding overhead |
| Web widget: SSE + signed token | Simple, low-latency and low-footprint user experience | Low | Need strong origin and abuse controls |
| Multi-tenancy: shared schema with tenant filters | Keeps cost down while preserving isolation | Low | Requires robust testing and security review |
| RAG: hybrid retrieval with citations | Improves trust and answer quality | Medium | Needs knowledge versioning and QA tests |
| Hosting: stateless deployment in SA-aware region | Good balance of cost and performance | Medium | Must revisit as traffic grows |
| Billing: provider abstraction | Keeps plan logic flexible and region-sensitive | Medium | Payment integration details vary by market |
| Auth: role-based access layer | Strongly supports tenant admin and operator personas | Medium | Must be enforced at every boundary |
| Guardrails and evals: mandatory from day one | Critical for POPIA-safe and customer-safe behavior | Medium | Requires ongoing effort and test maintenance |

This table should be reviewed before any production customer deployment is approved.
