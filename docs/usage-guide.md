# Usage Guide — Your AI Board of Advisors

## Step-by-step setup

### Claude (recommended)

1. Go to [claude.ai](https://claude.ai)
2. In the sidebar, click **Projects** → **New Project**
3. Name it: "My Board of Advisors"
4. Click **Set custom instructions**
5. Copy ALL the content from [`prompts/board.md`](../prompts/board.md) and paste it there
6. Fill in the "My Context" section with your company data
7. **Upload documents** (click the attach icon inside the project):
   - Your company presentation
   - Key topics or problems you want to analyze
   - Any relevant financial, strategic, or team documents
8. Open a new chat inside the project and start presenting topics

### ChatGPT

1. Go to [chatgpt.com](https://chatgpt.com)
2. Option A: **Explore GPTs → Create** (create a custom GPT)
3. Option B: **Settings → Personalization → Custom instructions**
4. Paste the content from [`prompts/board.md`](../prompts/board.md)
5. For context documents: attach them directly in each chat

**Note:** Claude Projects keeps documents persistent across conversations. In ChatGPT you need to attach them every time, unless you create a custom GPT.

---

## How to present topics

### Option 1: Free topic

Simply write your problem or decision directly:

> "I'm considering opening a second location. We have good occupancy at the current one but I'm not sure if it's the right time."

> "My partner wants to invest in digital marketing but I think we should improve the product first."

> "A competitor offered to buy my company. I wasn't looking for it but the number is interesting."

### Option 2: Upload a Key Topic

If you have a Key Topic worksheet (from your peer group -- Vistage, EO, YPO, or similar format), upload it directly or paste the content. The board will analyze it section by section.

### Option 3: Request a specific analysis

> "Analyze my P&L from last quarter and tell me what concerns you."

> "I just lost my head of sales. What should I do?"

---

## Available commands

| What you say | What happens |
|---|---|
| *(present any topic)* | All 6 directors weigh in sequentially + summary of agreements and tensions |
| "I want to talk only with the CFO" | The conversation focuses on that perspective |
| "I need to make a decision" | All 6 vote: in favor / against / with conditions |
| "I want to explore options" | Each director proposes a different course of action |
| *(upload a Key Topic)* | Full analysis like a board session |

You can also combine:

> "I want to explore options and then vote"

> "Have only the Devil's Advocate comment on what I just presented"

> "Head of Revenue, explain your point about pricing in more detail"

---

## Example prompts to try

Once set up, try one of these:

**Investment decision:**
> "I'm considering investing $50,000 USD to automate a key process in my operation. What do you think?"

**People problem:**
> "My best employee asked for a 30% raise and I'm not sure I can afford it without compromising cash flow. What should I do?"

**Commercial opportunity:**
> "A large client is offering me a 2-year contract but requires exclusivity in my sector. Should I accept?"

**Strategic dilemma:**
> "I have to choose between growing aggressively this year or consolidating what I have. Which path should I take?"

**Personal/professional decision:**
> "I'm thinking about leaving my company and starting something new. Is it the right time?"

---

## Tips to get the most out of it

**About context:**
- The more your board knows about your company, the better the responses
- Your company presentation is the best context document — it already has history, numbers, and challenges
- Updating the context periodically improves the quality of responses

**About usage:**
- Use it BEFORE deciding, not after — the value is in stress-testing, not validating
- If all directors agree, ask "What are we failing to see?"
- Go deeper when something doesn't sit right: "CFO, explain why you think the numbers don't work"
- Use it to prepare topics before bringing them to your peer group

**About honesty:**
- Don't get upset with the Devil's Advocate — their job is to make you uncomfortable
- If you feel the board is agreeing with everything, you're probably not giving it enough information
- The best decisions come from the friction between perspectives
