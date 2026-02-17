---
name: raise-or-absorb
description: Structured decision framework for evaluating whether to raise prices or absorb increased costs. Use when the user says "my costs went up", "should I raise prices", "I'm losing margin", "debería subir precios", "me subieron los costos", or mentions margin compression, cost increases, supplier price hikes, inflation impact, or pricing decisions.
---

# Raise Price or Absorb Cost Framework

## Tone
Direct and data-driven, but commercially aware. This skill balances financial reality with client relationship intelligence. It doesn't just say "raise prices" — it forces the user to think about timing, communication, segmentation, and what they're actually selling (hint: it's rarely what they think). If the user is avoiding raising prices out of fear of losing clients, challenge that fear with data.

## Language
All output — document headers, section titles, table headers, labels, example scripts, and body text — must be generated in the same language the user is using. No hardcoded language. Everything adapts. If Spanish, use Rioplatense Spanish (vos, no tú).

## Context Awareness
This skill may be used inside a project that already has company context (uploaded documents, company presentation, or a <my_context> section in the project instructions). If that context exists, use it automatically — do not ask the user to repeat information that's already available.

If no company context is available, ask for the minimum context needed before proceeding:
- Company name, industry, and size
- Approximate revenue or budget relevant to this decision
- Any other details specific to the decision at hand

Never assume company details. Use what's available or ask.

## Before generating
Ask ONLY what you don't already know:

1. What costs went up? By how much (% and absolute)?
2. What are your current margins on the affected product/service?
3. What's your pricing structure? (fixed, hourly, subscription, project-based)
4. Who are your top 5 clients by revenue? What % of your revenue do they represent?
5. When was the last time you raised prices? By how much?
6. How price-sensitive are your clients? Have you ever lost a client over price?
7. Are your competitors facing the same cost increase?

## Analysis Framework
Generate a document (PDF, 1-2 pages) with this structure:

### Header
"[Pricing Decision] — [Context: e.g., 'Supplier cost increase Q1 2026']" (adapt title to the user's language)
Date

### Section 1: The Math (no emotions, just numbers)
| Metric | Before | After (absorb) | After (raise) |
|--------|--------|----------------|---------------|
| Unit cost | | | |
| Current price | | | New price |
| Margin per unit ($ and %) | | | |
| Monthly impact on profit | | | |
| Annual impact on profit | | | |

"If you absorb this, you're taking a [X]% pay cut. Is that what you want?"

### Section 2: The Real Question
"You're not deciding whether to raise prices. You're deciding how much margin erosion you're willing to accept permanently. Because cost increases almost never reverse — if you absorb this one, you're absorbing it forever."

### Section 3: Three Strategies

**Strategy A: Full pass-through**
- Raise prices to fully cover the cost increase
- Risk: client pushback, potential churn
- Best for: commoditized markets where everyone faces the same increase, or high-value services where price is not the main decision factor
- How to communicate it: transparency + timing

**Strategy B: Partial pass-through + efficiency**
- Raise prices partially, absorb the rest through operational efficiency
- Where can you cut cost without cutting value?
- Best for: competitive markets where you can't fully differentiate on value alone
- Trap: "Absorbing cost through 'efficiency' often means asking your team to do more for less. Is that sustainable?"

**Strategy C: Restructure the offer**
- Don't raise the price — change what's included
- Remove low-value components, add high-perceived-value ones, create tiers
- Best for: services where the current packaging is outdated or clients pay for things they don't use
- This is often the smartest move because it reframes the conversation from "you're charging me more" to "I'm choosing what I need"

### Section 4: Client Segmentation
Not all clients deserve the same strategy:
| Client tier | Revenue % | Price sensitivity | Strategy |
|------------|-----------|------------------|----------|
| Top 20% (key accounts) | | | |
| Middle 60% | | | |
| Bottom 20% | | | |

"If you're afraid of losing a bottom-20% client over a price increase, ask yourself: should you even have that client?"

### Section 5: The Conversation Script
For each client tier, provide:
- When to communicate (timing matters — never during a crisis or right after a complaint)
- How to frame it (what to say and what NOT to say)
- What to offer if they push back (and what to never offer)
- Sample opening: specific, honest, professional

### Section 6: Verdict
Clear recommendation:
- Which strategy for which client segment
- Timeline for implementation
- What to monitor after the change (churn rate, margin recovery, client sentiment)

## Important
- Challenge the assumption that raising prices = losing clients. Most businesses overestimate price sensitivity and underestimate the cost of NOT raising prices.
- If the user hasn't raised prices in 2+ years, flag it: "You've been giving yourself a pay cut every year through inflation alone."
- If their top client represents >25% of revenue and they're afraid to raise prices on them, that's a dependency problem, not a pricing problem. Call it out.
