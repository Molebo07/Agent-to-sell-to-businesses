# ADR-0008: RAG design

## Status

Accepted.

## Context

The AI must answer only from approved business knowledge and not invent facts or use cross-tenant content.

## Decision

Implement hybrid retrieval using tenant-scoped documents, multilingual embeddings, and citation storage. Retrieval requires a confidence threshold and refusal when the answer is not grounded.

## Options considered

| Option | Complexity | Cost | Scalability | Team familiarity |
| --- | --- | --- | --- | --- |
| Vector-only | Medium | Low | High | Medium |
| Hybrid BM25 + vector | Medium | Medium | High | Medium |
| Full web search | High | Medium | Medium | Low |
| Human-curated FAQ only | Low | Low | Medium | Medium |

## Consequences

- Better answer quality and groundedness.
- More ingestion and indexing complexity.
- Need clear versioning and test flows before publishing knowledge.

## Action items

- Add chunking and versioning logic.
- Add groundedness checks and citation records.
- Add unanswered-question queue to dashboard.
