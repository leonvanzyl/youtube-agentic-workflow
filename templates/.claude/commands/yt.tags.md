---
description: Generate optimized video tags for search discovery and suggested videos
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

---

## Goal

Generate a strategic set of 20-30 video tags that:

- **Stay within YouTube's 500 character limit** (including commas and spaces) - NON-NEGOTIABLE
- Optimize for YouTube search discovery
- Increase suggested video appearances
- Balance broad, medium, and specific tags
- Include competitive research insights
- Match video content and keywords from analysis
- Follow YouTube's tag best practices

Tags are a secondary ranking factor but help with:

- Initial video discovery
- Suggested video algorithm
- Search query matching
- Content categorization

---

## Operating Constraints

**ANALYSIS FILE CRITICAL**: The analysis.md file is the PRIMARY source for all tag generation:
- Primary keywords → Priority tags (Tier 1)
- Secondary keywords → Related tags (Tier 2)
- Long-tail keywords → Specific tags (Tier 3)
- Target audience → Tag phrasing and selection
- Competitive research → Strategic tag insights

**TAG STRATEGY DRIVEN BY ANALYSIS**: Without analysis.md, tag optimization is severely limited.

**TAG COUNT**: Aim for 20-30 tags total (balancing coverage with the 500 character limit).

**CHARACTER LIMIT**: Maximum 500 characters total (including commas and spaces).

**TAG MIX**: Balance between:

- Broad tags (2-4): High search volume, high competition
- Medium tags (10-15): Moderate volume and competition (sweet spot)
- Specific/Long-tail tags (6-10): Low competition, high intent

**QUALITY OVER QUANTITY**: Every tag must be relevant. No misleading tags.

---

## Input Handling

### With Project Name

If user provides a project name: `$ARGUMENTS = "project-name"`

- Use: `content/[project-name]/analysis.md`

### Without Project Name

If user provides no arguments:

1. List available projects in `content/`
2. If only one project exists, use it automatically
3. If multiple exist, ask user to specify which project

### With Tag Strategy Direction

If user provides guidance like: "focus on search tags" or "optimize for suggested videos"

- Use the most recent project (or prompt to specify)
- Apply their directive to tag generation strategy

---

## Execution Steps

### Step 1: Load Context (Analysis-Driven)

1. **Locate required files**:

   ```
   ANALYSIS_FILE = content/[project-name]/analysis.md (CRITICAL)
   TITLES_FILE = content/[project-name]/titles.md (if exists)
   ```

2. **Load and extract from analysis.md (PRIMARY CONTEXT SOURCE)**:

   **CRITICAL - This drives the entire tag strategy**:

   - **Primary keywords**: These become your Tier 1 priority tags
   - **Secondary keywords**: These become your Tier 2 related tags
   - **Long-tail keywords**: These become your Tier 3 specific tags
   - **Target audience**: Influences tag phrasing and language (beginner vs advanced terms)
   - **Content topic and niche**: Defines tag categories and themes
   - **Competitive research**: Informs strategic tag selection
   - **Traffic strategy**: Determines tag mix (search vs browse focus)

   **From Titles** (if available):
   - Final chosen title (exact title becomes first/priority tag)
   - Keywords used in title (reinforce in tag set)

3. **If analysis file not found**:
   ```
   ⚠️ ERROR: "No analysis.md found for '[project-name]'.

   The analysis file is CRITICAL for generating optimized tags. Without it:
   - No keyword research to base tags on
   - No competitive insights for strategic selection
   - Generic tags without optimization

   REQUIRED: Run /yt.analyze first, then return to /yt.tags"
   ```

---

### Step 2: Tag Strategy Development

#### Determine Tag Focus

Based on analysis traffic strategy:

**Search-Focused Videos**:

- Priority: Specific search terms
- Include: Question formats, how-to phrases
- Mix: 60% specific, 30% medium, 10% broad

**Browse-Focused Videos**:

- Priority: Related topics, suggested video triggers
- Include: Niche identifiers, content type tags
- Mix: 40% specific, 40% medium, 20% broad

**Balanced Videos**:

- Priority: Mix of search and related content tags
- Include: Both search phrases and topic tags
- Mix: 50% specific, 35% medium, 15% broad

#### Tag Tier System

**Tier 1: Priority Tags (4-6 tags)**

- Exact title as a tag (most important!)
- Primary keywords from analysis
- Main topic/concept
- Direct content descriptors

**Tier 2: Related Tags (6-10 tags)**

- Secondary keywords
- Related concepts
- Alternative phrasings
- Subtopics covered
- Complementary terms

**Tier 3: Long-Tail Tags (4-6 tags)**

- Specific phrases from long-tail keyword research
- Question formats
- "How to" phrases
- Problem + solution combinations
- Niche-specific terms

**Tier 4: Broad Category Tags (2-4 tags)**

- Industry category
- Content type (tutorial, guide, review, etc.)
- Broad field or domain
- General topic area

**Tier 5: Channel/Brand Tags (2-3 tags)**

- Channel name
- Creator name
- Series name (if applicable)
- Consistent brand keyword

---

### Step 3: Generate Priority Tags (Tier 1)

**ALWAYS INCLUDE**:

1. **Exact video title** (most important tag for YouTube algorithm)

**Extract from analysis**:
2-5 primary keywords that define the video

**Example**:

- Analysis primary keywords: "Claude Code", "AI automation", "developer productivity"
- Priority tags: "Claude Code", "AI automation", "developer productivity", "coding automation", "AI coding assistant"

**Character count after Tier 1**: Track running total

---

### Step 4: Generate Related Tags (Tier 2)

From secondary keywords in analysis:

- Related topics discussed
- Alternative phrasings of main concepts
- Technologies or tools mentioned
- Skills or techniques covered
- Problems addressed

**Tag Generation Rules**:

- Use full phrases (not just single words where possible)
- Think about audience search behavior
- Include variations (singular/plural, different word orders)
- Consider autocomplete suggestions

**Example**:

- "code automation tools"
- "developer workflow"
- "AI for coding"
- "programming productivity"
- "automated code generation"
- "software development tools"

**Character count after Tier 2**: Track running total

---

### Step 5: Generate Long-Tail Tags (Tier 3)

From long-tail keywords and competitive research:

- Specific search phrases
- Question formats people search
- "How to" phrases
- Problem statements + approach
- Very specific niche terms

**Long-Tail Tag Patterns**:

- "how to [action] with [tool]"
- "best [thing] for [use case]"
- "[problem] solution"
- "learn [skill] fast"
- "[topic] for beginners"

**Example**:

- "how to automate coding with AI"
- "best AI coding tools 2025"
- "developer productivity tips"
- "automated code generation tutorial"

**Character count after Tier 3**: Track running total

---

### Step 6: Generate Broad Category Tags (Tier 4)

Identify the broader categories:

- Industry/field (e.g., "software development", "web development")
- Content format (e.g., "tutorial", "guide", "walkthrough")
- Skill level (e.g., "beginner", "advanced")
- General topics (e.g., "programming", "technology")

**Keep it Relevant**:

- Must genuinely apply to content
- Helps with general discovery
- Connects to broader content ecosystem

**Example**:

- "software development"
- "programming tutorial"
- "tech education"
- "coding"

**Character count after Tier 4**: Track running total

---

### Step 7: Generate Channel/Brand Tags (Tier 5)

Consistent tags across your content:

- Channel name (exactly as it appears)
- Your name (if personal brand)
- Series name (if part of a series)
- Brand-specific keyword

**Purpose**:

- Helps your videos suggest each other
- Builds content clusters
- Reinforces brand association

**Example**:

- "Your Channel Name"
- "Your Name"
- "AI Coding Series" (if part of series)

**Character count after Tier 5**: Track running total

---

### Step 8: Competitive Tag Analysis

If competitive research was performed in analysis:

**Review competitor tags** (if available from research):

- What tags do successful similar videos use?
- Are there common patterns?
- What gaps exist (opportunities)?

**Extract competitive insights**:

- Tags they use that we should consider
- Unique tags we can use (they didn't)
- Over-saturated tags to possibly avoid

**Add competitive tags** if:

- Relevant to our content
- Not already included
- Under character limit

---

### Step 9: Tag Optimization & Character Count Validation

**⚠️ CRITICAL STEP**: You MUST verify the total character count before proceeding.

#### Character Count Management

**CRITICAL**: Total character count MUST be ≤ 500 characters (including commas and spaces between tags).

**Calculate character count**: Add up all tag characters + commas + spaces between tags.

**If over 500 characters**:

1. **REQUIRED**: Remove tags until under 500 characters
2. Priority for removal (in order):
   - Least relevant broad category tags first
   - Condense or remove redundant long-tail phrases
   - Remove duplicate concepts
   - Remove least specific related tags
3. **NEVER REMOVE**: Keep all Tier 1 (priority) tags - these are essential
4. Recount after each removal until ≤ 500

**If between 450-500**: Perfect range - stop here

**If under 450**:

- Consider adding more specific tags (if relevant)
- Add alternative phrasings
- Include more niche terms
- But prioritize staying under 500 over maximizing count

#### Tag Quality Check

For each tag, verify:

- [ ] Relevant to actual video content
- [ ] Would someone search this?
- [ ] Not misleading or clickbait
- [ ] No spam tags
- [ ] No single letters/numbers
- [ ] No competitor brand names (unless discussing them)

#### Remove These Common Mistakes:

**DON'T USE**:

- Single letters or numbers
- Tags unrelated to content (popular but irrelevant)
- Competitor brand names (unless you're reviewing/comparing them)
- Excessive repetition (same word different tags)
- Misleading tags
- Tags YouTube considers spam

---

### Step 10: Generate Tag Performance Analysis

For the final tag set, provide:

#### Tag Distribution

- Broad tags: [X] ([X]% of total)
- Medium tags: [X] ([X]% of total)
- Specific/Long-tail tags: [X] ([X]% of total)
- Brand tags: [X] ([X]% of total)

#### Keyword Research Insights

**High-Volume Keywords** (included in tags):

- [Keyword 1] - estimated search volume
- [Keyword 2] - estimated search volume

**Medium-Volume Keywords** (sweet spot - included in tags):

- [Keyword 1] - estimated search volume
- [Keyword 2] - estimated search volume
- [Keyword 3] - estimated search volume

**Low-Volume/Long-Tail Keywords** (easy ranking - included in tags):

- [Keyword 1] - highly specific
- [Keyword 2] - highly specific
- [Keyword 3] - highly specific

#### Competition Analysis

From competitive research in analysis:

- Tags from top competitor videos
- Unique tags we're using (gaps we're filling)
- Over-saturated tags we might avoid

---

### Step 11: Generate Alternative Tag Strategies

Create 2-3 alternative tag sets:

**Strategy A: Search-Focused**

- Optimized for: YouTube search rankings
- Tag mix: Heavy on specific keywords and long-tail phrases
- Best for: Tutorial, how-to, educational content

**Strategy B: Suggested-Video-Focused**

- Optimized for: Appearing in suggested videos
- Tag mix: Related topics, similar content triggers
- Best for: Entertainment, commentary, vlog content

**Strategy C: Niche-Focused**

- Optimized for: Dominating a specific niche
- Tag mix: Very specific niche terms, less competition
- Best for: Specialized technical content, deep dives

---

### Step 12: Generate Output Document

1. **Load template**: Read `.youtube/templates/tags-template.md`

2. **Fill template** with:

   - Complete tag list (comma-separated, copy-ready)
   - Tag breakdown by tier
   - Character count analysis
   - Tag distribution statistics
   - Competitive analysis insights
   - Alternative strategies
   - Tag optimization checklist
   - Best practices reminder

3. **Write to output file**: `content/[project-name]/tags.md`

4. **Update project state**: Update `content/.project-state.json` to track command completion:
   ```json
   {
     "currentProject": "[project-name]",
     "lastUpdated": "[ISO timestamp]",
     "projects": {
       "[project-name]": {
         "created": "[ISO timestamp]",
         "topic": "[original topic]",
         "completedCommands": [...existing, "tags"],
         "lastCommand": "tags"
       }
     }
   }
   ```

---

### Step 13: Report Completion

Provide user with:

1. **Success Message**: "Video tags generated!"

2. **Output Location**: Full path to tags.md

3. **Quick Stats**:

   - Total tags: [X]
   - **Character count: [X / 500]** ✓ (must be ≤ 500)
   - Tag distribution: [X% broad, X% medium, X% specific]

4. **Preview**: Show first 10 tags

5. **Copy-Ready Format**:

   ```
   [tag1], [tag2], [tag3], [tag4], [tag5], [tag6], ...
   ```

6. **Completion Summary**:

   ```
   All YouTube content assets generated! ✓

   Available files:
   • Analysis: content/[project]/analysis.md
   • Hook & Intro: content/[project]/hook.md
   • Titles: content/[project]/titles.md
   • Description: content/[project]/description.md
   • Tags: content/[project]/tags.md

   Ready to upload your video with optimized metadata!
   ```

---

## Tag Writing Guidelines

### Priority Tag Principles

**ALWAYS include title as first tag**:

- Most important signal to YouTube
- Exact match search optimization
- If title is long, use complete title

**Primary keywords are non-negotiable**:

- These define your content
- Core search optimization
- Should align with title and description

---

### Tag Phrase Structure

**Use meaningful phrases** (not just single words):

**GOOD** ✅:

- "how to automate coding"
- "AI coding assistant tutorial"
- "developer productivity tools"
- "coding automation workflow"

**BAD** ❌:

- "coding"
- "tutorial"
- "tools"
- "automation"

Single words are too broad and competitive. Phrases are more specific and targetable.

---

### Common Tag Mistakes to AVOID

**Irrelevant Popular Tags** ❌:

```
Don't tag your coding video with "Minecraft", "gaming", "funny" just
because they're popular. YouTube penalizes irrelevant tags.
```

**Keyword Stuffing** ❌:

```
Don't create 5 variations of essentially the same tag:
- "coding tutorial"
- "tutorial coding"
- "coding tutorials"
- "tutorials coding"
- "code tutorial"
Pick the 1-2 most natural variations.
```

**Competitor Names** ❌:

```
Don't tag with "Fireship", "ThePrimeagen" unless you're specifically
discussing or reviewing their content.
```

**Single Characters** ❌:

```
Don't use tags like "C", "AI", "IT" - too broad, no value
```

---

### Tag Order Strategy

**Order matters** for first 3-5 tags (most weight):

1. Exact video title
2. Primary keyword phrase 1
3. Primary keyword phrase 2
4. Main topic/category
5. Most relevant long-tail phrase

**Then continue** with decreasing priority:

- Related terms
- Long-tail variations
- Broader categories
- Brand tags

---

## Tag Type Frameworks

### Search-Optimized Tag Set Example

**Priority** (first 5):

1. [Exact title]
2. [Primary keyword phrase]
3. [Secondary keyword phrase]
4. [Main topic]
5. [How-to long-tail phrase]

**Related** (next 15):

- [Alternative phrasings]
- [Related concepts]
- [Technology/tool tags]
- [Problem-solution phrases]

**Long-tail** (next 8):

- [Specific questions]
- [Niche terms]
- [Detailed phrases]

**Broad** (next 3):

- [Industry category]
- [Content type]
- [General field]

**Brand** (last 2):

- [Channel name]
- [Series name]

---

### Suggested-Video Tag Set Example

**Priority** (first 5):

1. [Exact title]
2. [Content type + niche]
3. [Related popular topic]
4. [Complementary topic]
5. [Niche identifier]

**Related** (next 15):

- [Similar content tags]
- [Adjacent topics]
- [Related creators' topics (not names)]
- [Content cluster tags]

**Long-tail** (next 8):

- [Niche-specific phrases]
- [Unique angles]
- [Distinctive combinations]

**Broad** (next 3):

- [Category]
- [Content format]
- [Genre]

**Brand** (last 2):

- [Channel name]
- [Series name]

---

## Quality Validation

Before reporting completion, verify:

- [ ] Title included as first tag
- [ ] All primary keywords from analysis included
- [ ] 20-30 tags total (optimal range for 500 char limit)
- [ ] Total under 500 characters (CRITICAL - must verify)
- [ ] Mix of broad, medium, and specific tags
- [ ] No irrelevant or misleading tags
- [ ] No single letters or numbers
- [ ] No competitor brand names (unless reviewing)
- [ ] Tags match video content
- [ ] Natural phrases used (not just single words)
- [ ] Tag distribution analysis provided
- [ ] Alternative strategies offered
- [ ] Competitive insights included (if available)
- [ ] Output file created successfully

**If any validation fails**: Revise the relevant section before completion.

---

## Error Handling

### No Analysis Found

```
⚠️ ERROR: "No analysis.md found for this project!

The analysis file is CRITICAL for generating optimized tags. Without it:
- No keyword research (primary, secondary, long-tail)
- No competitive insights for strategic tag selection
- No target audience context for tag phrasing
- Generic tags without optimization

REQUIRED: Run /yt.analyze first, then return to /yt.tags"
```

### Missing Keywords in Analysis

```
⚠️ WARN: "Analysis file found but missing keyword data.

Tag optimization will be severely limited without:
- Primary keywords for priority tags
- Secondary keywords for related tags
- Long-tail keywords for specific tags

Consider running /yt.analyze again or manually reviewing analysis.md

Proceeding with available information..."
```

### Character Limit Exceeded

**This should NEVER happen if Step 9 is followed correctly.**

If it does occur:

```
⚠️ ERROR: "Tag set exceeds 500 characters (current: [X] characters).

YouTube has a strict 500 character limit for all tags combined.

AUTOMATICALLY REMOVING lowest-priority tags to fit within limit:
- Removed: [tag1] (broad category)
- Removed: [tag2] (duplicate concept)
- Removed: [tag3] (least specific)

New character count: [X] / 500
```

### Multiple Projects, No Specification

```
Available projects:
1. project-name-1
2. project-name-2

Please specify which project: /yt.tags project-name-1
```

---

## Examples

### Example Analysis Context:

```
Title: "Claude Code Tutorial: 5 Automations That Save Me 15 Hours/Week"
Primary Keywords: "Claude Code", "coding automation", "developer productivity"
Secondary Keywords: "AI coding assistant", "code generation", "workflow automation"
Long-tail: "how to automate coding tasks", "AI tools for developers"
Target: Professional developers
```

### Generated Tag Set Example:

```
Claude Code Tutorial: 5 Automations That Save Me 15 Hours/Week, Claude Code, coding automation, developer productivity, AI coding assistant, code generation, workflow automation, how to automate coding tasks, AI tools for developers, automated code generation, AI for coding, programming automation, coding productivity tips, Claude Code tutorial, AI automation tools, developer tools 2025, coding efficiency, AI assisted coding, code automation tools, programming productivity, dev tools, software engineering, coding workflow, tech productivity, software development
```

**Total Tags**: 26
**Character Count**: 476 / 500

**Tag Breakdown**:

- Priority (Tier 1): 5 tags
- Related (Tier 2): 10 tags
- Long-tail (Tier 3): 5 tags
- Broad (Tier 4): 4 tags
- Brand (Tier 5): 2 tags

**Distribution**:

- Specific: 54% (14 tags)
- Medium: 38% (10 tags)
- Broad: 8% (2 tags)

---

## Context

$ARGUMENTS
