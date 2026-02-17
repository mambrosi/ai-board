# Skills for Your AI Board of Advisors

These custom skills extend your AI Board of Advisors with document generation capabilities. After a board session, use these skills to turn conversations into professional deliverables.

## What are Skills?

Skills are extensions that teach Claude how to perform specific tasks. Once installed, Claude automatically uses them when relevant — you don't need to do anything special, just ask naturally.

## Available Skills

### Board Session Tools

### 📓 Decision Journal
After a board session, say **"log this decision"** or **"journal"** and Claude generates a structured 1-2 page PDF capturing: what was discussed, each director's position, key tensions, your decision, and a 30/60/90 day review reminder.

### 📋 Meeting Prep
Say **"prepare me for a meeting with [person]"** and Claude generates a one-page briefing: your objective, anticipated objections with prepared responses, strategic questions, and opening/closing lines. Print it and take it with you.

### 📄 One-Page Strategy
After a board session, say **"make me a one-pager"** and Claude converts the entire discussion into a professional one-page document you can share with partners, investors, or your team — no editing needed.

### Decision Frameworks

### 👤 Hire or Promote Evaluator
Say **"should I promote or hire externally?"** and Claude walks you through a structured analysis: role requirements vs. candidate readiness, real cost comparison (not just salary), the question nobody asks, and a clear recommendation with conditions. Calls out when you're confusing loyalty with competence.

### ⚰️ Kill or Pivot Decision
Say **"this isn't working, should I kill it?"** and Claude runs a surgical analysis: the original bet vs. reality, sunk cost trap check, three options (kill / pivot / double down) with concrete trade-offs, and a clear verdict. Ruthless about sunk cost — because most people kill things too late.

### 💲 Raise Price or Absorb Cost
Say **"my costs went up, should I raise prices?"** and Claude builds the full picture: margin impact math, three pricing strategies (full pass-through / partial / restructure the offer), client segmentation by sensitivity, and conversation scripts for each tier. Challenges the fear of losing clients with data.

## How to Install

### Option A: Upload as ZIP (claude.ai web or Claude Desktop)
1. Download the `.zip` file for the skill you want from this repo
2. Go to **Settings → Capabilities → Skills**
3. Click **"Upload skill"**
4. Select the `.zip` file
5. Toggle the skill ON

### Option B: Manual install (Claude Desktop / Claude Code)
1. Download the skill folder
2. Place it in `~/.claude/skills/`
3. Restart Claude

## Requirements
- Claude Pro, Max, Team, or Enterprise plan
- **Code execution and file creation** must be enabled in Settings → Capabilities
- **Skills** must be enabled in Settings → Capabilities

## Built-in Skills Worth Enabling

While you're in Settings → Capabilities, also turn on these Anthropic built-in skills that pair well with the board:

| Skill | What it does | Example use |
|-------|-------------|-------------|
| **xlsx** | Creates and edits Excel files | "Build a financial model with the scenarios we discussed" |
| **pptx** | Creates PowerPoint presentations | "Turn this board session into a presentation for my partner" |
| **docx** | Creates Word documents | "Write a formal proposal based on what we decided" |
| **pdf** | Reads and creates PDFs | "Create a PDF summary of this session" |

## Creating Your Own Skills

Want to create a skill tailored to your workflow? Enable the **skill-creator** example skill in Settings → Capabilities, then start a conversation with:

> "Help me build a skill that [describes what you want]"

Claude will interview you about your workflow and generate the skill for you.
