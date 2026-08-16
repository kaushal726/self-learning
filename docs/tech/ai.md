---
title: AI and LLM Engineering
description: Practical guide to AI concepts, large language models, prompting, RAG, agents, and shipping LLM-powered features.
owners: Kaushal Raj
authors: Kaushal Raj
categories: Artificial Intelligence
tags: AI, LLM, Machine Learning, Prompt Engineering, RAG, Embeddings, Vector Database, Agents, Tool Use, Evaluation, Fine-tuning
---

# AI and LLM Engineering

A practical reference for building software with modern AI models — what the pieces are, when to use each one, and how to ship something reliable.

---

## Table of Contents

1. [AI Landscape](#ai-landscape)
2. [How Large Language Models Work](#how-large-language-models-work)
3. [Tokens, Context, and Cost](#tokens-context-and-cost)
4. [Prompt Engineering](#prompt-engineering)
5. [Structured Output](#structured-output)
6. [Embeddings and Vector Search](#embeddings-and-vector-search)
7. [Retrieval-Augmented Generation](#retrieval-augmented-generation)
8. [Tool Use and Function Calling](#tool-use-and-function-calling)
9. [Agents](#agents)
10. [Fine-tuning vs Prompting vs RAG](#fine-tuning-vs-prompting-vs-rag)
11. [Evaluation](#evaluation)
12. [Production Concerns](#production-concerns)
13. [Security and Safety](#security-and-safety)
14. [Reference Snippets](#reference-snippets)
15. [Glossary](#glossary)

---

## AI Landscape

| Term | Meaning |
| --- | --- |
| Artificial Intelligence | Umbrella term for systems that perform tasks normally requiring human intelligence. |
| Machine Learning | Systems that learn patterns from data instead of being explicitly programmed. |
| Deep Learning | Machine learning using multi-layer neural networks. |
| Generative AI | Models that produce new content — text, images, audio, code. |
| Large Language Model (LLM) | A deep-learning model trained on large text corpora to predict and generate language. |
| Multimodal model | A model that accepts more than one input type (text plus images, audio, or documents). |

For most application work today, "AI feature" means "call a hosted LLM over HTTP and design carefully around its behaviour."

---

## How Large Language Models Work

### Transformer basics

Modern LLMs are built on the transformer architecture. The core mechanism is **self-attention**: for each token in the input, the model computes how strongly it relates to every other token, then blends their representations. Stacking dozens of attention and feed-forward layers gives the model a rich, context-sensitive view of the whole input.

Practical consequences:

- Attention cost grows roughly with the square of the input length, which is why long inputs are slower and more expensive.
- The model has no memory between requests. Every call is stateless — you resend the whole conversation each time.
- Output is generated one token at a time, each conditioned on everything before it.

### Training stages

1. **Pre-training** — next-token prediction over a very large corpus. Produces raw language ability and world knowledge.
2. **Supervised fine-tuning** — training on curated instruction/response pairs so the model follows instructions.
3. **Preference tuning (RLHF and variants)** — ranking model outputs by human or model preference to shape helpfulness, tone, and safety.

### Sampling

At each step the model produces a probability distribution over the vocabulary. How you sample from it determines variability:

- **Temperature** — flattens or sharpens the distribution. Lower means more deterministic.
- **Top-p (nucleus sampling)** — sample only from the smallest set of tokens whose probabilities sum to `p`.
- **Top-k** — sample only from the `k` most likely tokens.

Note that several current frontier models have removed these knobs in favour of prompting and an effort/reasoning setting — check your provider's API reference before relying on them.

### Reasoning models

Newer models can produce internal reasoning before their visible answer. This trades latency and tokens for accuracy on multi-step problems. Providers expose this as an on/off setting or as an "effort" level. Use higher reasoning for planning, debugging, and analysis; use lower for classification, extraction, and chat.

---

## Tokens, Context, and Cost

A **token** is a chunk of text — roughly 3–4 characters of English, less for code and non-English text. Models bill per token and limit total tokens.

- **Context window** — the maximum tokens in a single request, covering system prompt, conversation history, tool definitions, retrieved documents, and the generated output.
- **Input vs output pricing** — output tokens generally cost several times more than input tokens.
- **Prompt caching** — providers can cache a stable prefix of your prompt and charge a fraction of the normal rate to reuse it. Caching is a prefix match: any byte change invalidates everything after it, so put stable content first (system prompt, tool definitions) and volatile content last (timestamps, the current user question).

Cost control checklist:

- Count tokens with the provider's own token-counting endpoint, not a third-party tokenizer from another vendor.
- Cache the shared prefix on repeated calls.
- Send only the retrieved passages you need, not whole documents.
- Trim or summarise old conversation turns instead of resending everything forever.
- Route simple tasks to a smaller, cheaper model.

---

## Prompt Engineering

### Structure of a good prompt

| Part | Purpose |
| --- | --- |
| Role and context | Who the model is acting as and what the situation is. |
| Task | The single, specific thing to do. |
| Input data | The content to operate on, clearly delimited. |
| Constraints | Length, format, tone, what to avoid. |
| Output format | Exact shape of the response. |
| Examples | One to five worked examples for anything non-obvious. |

### Techniques that reliably help

- **Be specific.** "Summarise in three bullets, each under 20 words, focused on financial risk" beats "summarise this".
- **Few-shot examples.** Showing two or three input/output pairs is usually more effective than describing the format in prose.
- **Chain of thought.** Asking the model to work through the problem step by step improves multi-step accuracy. Reasoning models do this natively.
- **Delimit inputs.** Wrap user-supplied content in XML-style tags or fenced blocks so the model can tell instructions apart from data.
- **Positive instructions.** "Respond in plain prose" works better than "do not use markdown".
- **Prompt chaining.** Split a complex job into several small calls — extract, then classify, then write — instead of one prompt that does everything.

### Techniques that often backfire

- Stacking emphasis ("CRITICAL: YOU MUST ALWAYS...") on capable models causes over-triggering; state the rule once, plainly.
- Vague quality words ("make it good", "be thorough") give the model nothing to aim at.
- Very long prompts full of edge cases the model then over-applies. Prefer a short prompt plus examples.

### Prompt template

```text
You are a <role> helping with <domain>.

Task: <one specific instruction>

Rules:
- <constraint>
- <constraint>

Input:
<data>
{{user_input}}
</data>

Respond as: <exact output format>
```

---

## Structured Output

Free-form text is hard to consume from code. Three approaches, best first:

1. **Schema-constrained output.** Provide a JSON Schema and the provider guarantees a conforming response. Most reliable option when available.
2. **Tool/function calling with a strict schema.** Define a tool whose parameters are the shape you want, and force the model to call it.
3. **Prompt-only JSON.** Ask for JSON and parse it. Always wrap parsing in error handling and retry once on failure.

Schema tips:

- Set `additionalProperties: false` and list `required` fields.
- Use `enum` for closed sets — it removes an entire class of parsing bugs.
- Keep schemas flat; deeply nested and recursive schemas are often unsupported.
- Always validate the parsed object before using it, even with guaranteed formats.

---

## Embeddings and Vector Search

An **embedding** maps text to a fixed-length vector such that semantically similar text lands nearby. Similarity is normally measured by cosine similarity.

Uses: semantic search, deduplication, clustering, classification, recommendation, and the retrieval half of RAG.

### Vector stores

| Option | Fits |
| --- | --- |
| `pgvector` (PostgreSQL) | You already run Postgres and want one database. |
| Managed vector services | Large scale, low operational effort. |
| Embedded libraries (FAISS and similar) | Local, batch, or single-process workloads. |

Indexes such as HNSW give approximate nearest-neighbour search — fast lookups at a small recall cost, tunable with parameters such as `ef_search`.

### Chunking

Retrieval quality is dominated by chunking quality.

- Split on structure — headings, sections, functions — rather than a fixed character count.
- Target roughly 200–800 tokens per chunk, with 10–20% overlap.
- Store metadata with each chunk (source, title, section, URL, timestamp) so you can filter and cite.
- Prepend the document title and section heading to each chunk so it stands alone.

---

## Retrieval-Augmented Generation

RAG grounds a model's answers in your own data without retraining it.

```text
Query
  → embed query
  → search vector store (+ keyword search)
  → rerank top candidates
  → build prompt with the best passages
  → model generates answer with citations
```

### Making RAG work

- **Hybrid search.** Combine vector similarity with keyword/BM25 search. Keyword search catches exact identifiers, error codes, and product names that embeddings blur.
- **Rerank.** Retrieve 20–50 candidates cheaply, then rerank to the top 3–8 with a cross-encoder or a small model call.
- **Cite sources.** Return the chunk identifiers used, and show them in the UI. This is the cheapest hallucination defence you have.
- **Allow "I don't know".** Instruct the model to say when the context doesn't contain the answer, rather than filling the gap.
- **Query rewriting.** Rewrite conversational follow-ups ("and the second one?") into standalone queries before retrieval.
- **Filter by metadata.** Restrict retrieval by tenant, product, language, or date before ranking.

### When RAG is the wrong tool

If the whole corpus fits comfortably in the context window and the cost is acceptable, just send it. Long-context models have made small-corpus RAG unnecessary in many cases.

---

## Tool Use and Function Calling

Tool use lets the model request an action your code performs. The model never executes anything itself — it emits a structured call, you run it, and you return the result.

The loop:

1. Send the request with a list of tool definitions (name, description, JSON Schema for inputs).
2. The model responds either with an answer or with one or more tool calls.
3. Execute each call, then send the results back as tool results.
4. Repeat until the model responds without calling a tool.

Design guidance:

- **Descriptions decide everything.** Say *when* to call the tool, not only what it does.
- **Keep the tool set small.** A focused set of 5–15 tools beats 60 overlapping ones. Use dynamic tool discovery if you genuinely have many.
- **Return errors as results, not exceptions.** Mark the result as an error and describe what went wrong so the model can recover.
- **Execute parallel calls in parallel** and return all results in a single message.
- **Gate destructive actions.** Anything irreversible — sending mail, deleting records, moving money — should require confirmation, and validation belongs in your code, not in the prompt.

---

## Agents

An agent is a model in a loop with tools, deciding its own next step until a goal is met.

### Should you build one?

Check all four before committing:

- **Complexity** — is the task genuinely multi-step and hard to specify up front?
- **Value** — does the outcome justify higher latency and cost?
- **Viability** — is the model actually capable at this task?
- **Cost of error** — can mistakes be caught and rolled back?

If any answer is no, use a simpler tier: a single call, or a fixed pipeline of calls that your code orchestrates. Most "agent" products are better as workflows.

### Patterns

| Pattern | Description |
| --- | --- |
| Single call | One request, one response. Classification, extraction, summarisation. |
| Chain | Fixed sequence of calls, each feeding the next. |
| Router | One call classifies the request, then dispatches to a specialised handler. |
| Parallel fan-out | Independent subtasks run concurrently, results merged. |
| Evaluator/optimiser | One model produces, another critiques, loop until the critique passes. |
| Autonomous agent | Model plans and chooses tools freely until the goal is reached. |

### Keeping long runs healthy

- **Context management** — summarise or drop stale tool output before the window fills.
- **Memory** — persist durable facts to files or a store so they survive restarts.
- **Step limits** — cap iterations and total token spend; loops without a ceiling are a production incident waiting to happen.
- **Checkpoints** — make each step observable and recoverable.
- **Sub-agents** — delegate independent, sizeable tracks of work; don't delegate what one or two tool calls would finish.

---

## Fine-tuning vs Prompting vs RAG

| Need | Use |
| --- | --- |
| Model lacks facts about your domain | RAG |
| Model has the knowledge but wrong format or tone | Prompting, few-shot examples |
| Consistent style or output shape at scale | Fine-tuning |
| Cheaper or faster inference for a narrow task | Fine-tune a small model |
| Freshness — data changes daily | RAG (fine-tuning cannot keep up) |

Order of attempts: prompt → few-shot → RAG → fine-tune. Fine-tuning is the last step because it costs the most, is hardest to iterate on, and locks you to a model version. It does not add knowledge reliably — it shapes behaviour.

---

## Evaluation

Without evaluation you cannot tell an improvement from a regression.

### Build an eval set first

Collect 50–200 real inputs with expected outputs or acceptance criteria. Include the awkward cases: empty input, hostile input, ambiguous requests, very long documents.

### Scoring methods

| Method | Fits | Cost |
| --- | --- | --- |
| Exact match / regex | Classification, extraction, structured fields | Free |
| Programmatic checks | Valid JSON, schema conformance, code compiles, tests pass | Free |
| LLM-as-judge | Open-ended quality, tone, helpfulness | Moderate |
| Human review | Final gate before release; calibrating the judge | High |

LLM-as-judge tips: give the judge a concrete rubric with independently checkable criteria, not "rate 1–10". Score criteria one at a time. Run the judge on a strong model even when the system under test uses a small one.

### RAG-specific metrics

- **Retrieval recall** — is the correct passage in the retrieved set at all?
- **Precision at k** — how much of what was retrieved is relevant?
- **Faithfulness** — is every claim in the answer supported by the retrieved context?
- **Answer relevance** — does the answer actually address the question?

Run evals in CI on every prompt change. Prompts are code.

---

## Production Concerns

**Latency.** Stream responses so users see the first token quickly. Run independent calls in parallel. Cache stable prefixes. Use a smaller model where quality allows. Reasoning models can take minutes on hard tasks — design the UI for asynchronous checking rather than a blocking spinner.

**Reliability.** Retry transient failures (429, 5xx, network) with exponential backoff and jitter; never retry 400 or 401. Set explicit timeouts. Have a fallback model configured. Handle every stop reason, including refusals and hitting the token cap — code that reads the first content block unconditionally will break.

**Observability.** Log the prompt version, model, token usage, latency, stop reason, and request ID for every call. Sample and review real outputs weekly. Track cost per request and per user.

**Versioning.** Pin exact model identifiers rather than floating aliases in production. Treat prompts as versioned artefacts in source control. Re-run evals whenever the model or prompt changes.

**Idempotency.** Model output is non-deterministic even at low temperature. Anything that writes to a database or calls a payment API needs an idempotency key on your side.

---

## Security and Safety

**Prompt injection** is the defining vulnerability of LLM applications. Any text the model reads — a web page, a PDF, an email, a code comment, a tool result — can contain instructions, and the model has no reliable way to tell data from directives.

Mitigations:

- Never grant the model authority it should not have. Enforce permissions in your code, not in the prompt.
- Treat all retrieved and tool-returned content as untrusted data. Delimit it clearly and say so in the system prompt.
- Require human confirmation for irreversible or outward-facing actions.
- Never place secrets in prompts, system prompts, or memory files — they persist in conversation history and logs.
- Sandbox any generated code, and constrain filesystem paths to a fixed root.
- Constrain outbound network access from tool execution environments.

**Data handling.** Know your provider's retention policy. Redact personal data before sending it. Check whether zero-retention mode is available if you need it. Confirm the compliance posture — residency, certifications, sub-processors — before shipping regulated workloads.

**Output safety.** Never render model output as raw HTML without sanitising it. Never pass model output straight into a shell, SQL query, or `eval`. Validate against a schema before it reaches any downstream system.

---

## Reference Snippets

### Basic call

```javascript
const response = await client.messages.create({
  model: MODEL_ID,
  max_tokens: 4096,
  system: "You are a concise technical assistant.",
  messages: [{ role: "user", content: userInput }],
});
```

### Streaming

```javascript
const stream = await client.messages.stream({
  model: MODEL_ID,
  max_tokens: 4096,
  messages: [{ role: "user", content: userInput }],
});

for await (const event of stream) {
  if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
    process.stdout.write(event.delta.text);
  }
}

const final = await stream.finalMessage();
```

### Tool loop

```javascript
const messages = [{ role: "user", content: userInput }];

while (true) {
  const response = await client.messages.create({
    model: MODEL_ID,
    max_tokens: 4096,
    tools,
    messages,
  });

  if (response.stop_reason !== "tool_use") {
    return response;
  }

  messages.push({ role: "assistant", content: response.content });

  const results = await Promise.all(
    response.content
      .filter((block) => block.type === "tool_use")
      .map(async (block) => {
        try {
          const output = await runTool(block.name, block.input);
          return { type: "tool_result", tool_use_id: block.id, content: output };
        } catch (error) {
          return {
            type: "tool_result",
            tool_use_id: block.id,
            content: `Error: ${error.message}`,
            is_error: true,
          };
        }
      }),
  );

  messages.push({ role: "user", content: results });
}
```

### Retry with backoff

```javascript
async function withRetry(fn, attempts = 4) {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (error) {
      const retryable = [408, 429, 500, 502, 503, 529].includes(error.status);
      if (!retryable || i === attempts - 1) throw error;
      const delay = Math.min(1000 * 2 ** i, 30000) + Math.random() * 500;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}
```

### Minimal RAG pipeline

```javascript
async function answer(question, filters = {}) {
  const queryVector = await embed(question);
  const candidates = await vectorStore.search(queryVector, { limit: 40, filters });
  const keywordHits = await keywordSearch(question, { limit: 20, filters });
  const merged = dedupe([...candidates, ...keywordHits]);
  const top = await rerank(question, merged, 6);

  const context = top
    .map((chunk, i) => `[${i + 1}] ${chunk.title}\n${chunk.text}`)
    .join("\n\n");

  return client.messages.create({
    model: MODEL_ID,
    max_tokens: 2048,
    system:
      "Answer only from the provided context. Cite sources as [n]. " +
      "If the context does not contain the answer, say so plainly.",
    messages: [
      { role: "user", content: `<context>\n${context}\n</context>\n\nQuestion: ${question}` },
    ],
  });
}
```

---

## Glossary

| Term | Definition |
| --- | --- |
| Agent | A model in a loop with tools, choosing its own next action. |
| Chunk | A passage of a document stored and retrieved as a unit. |
| Context window | Maximum tokens a model can process in one request. |
| Embedding | A vector representation of text used for semantic similarity. |
| Few-shot | Including worked examples in the prompt. |
| Fine-tuning | Further training of a base model on your own examples. |
| Grounding | Constraining answers to supplied source material. |
| Hallucination | Confident output that is not supported by facts or context. |
| Inference | Running a trained model to produce output. |
| Prompt caching | Reusing a cached prompt prefix at reduced cost. |
| Prompt injection | Malicious instructions hidden in content the model reads. |
| RAG | Retrieval-augmented generation — retrieve, then generate. |
| Reranking | Reordering retrieved candidates by relevance before use. |
| System prompt | Persistent instructions that frame the model's behaviour. |
| Temperature | Sampling parameter controlling output randomness. |
| Token | The unit of text models read, generate, and bill for. |
| Tool use | The model requesting an action that your code executes. |
| Vector database | A store optimised for nearest-neighbour search over embeddings. |
