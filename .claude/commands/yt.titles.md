---
description: Generate optimized video titles for browse and search traffic
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

---

## Goal

Generate multiple title variations optimized for different traffic sources:

- **Browse Traffic**: Curiosity-driven titles for homepage and suggested videos
- **Search Traffic**: Keyword-optimized titles for search results
- **Hybrid**: Balanced titles that work for both

Each title must:

- Align with video content and analysis insights
- Match target audience language
- Include relevant keywords (for search)
- Create click motivation (for browse)
- Stay within optimal character length (60-70 characters)

---

## Operating Constraints

**ANALYSIS FILE CRITICAL**: The analysis.md file is the PRIMARY source for all title generation:
- Primary keywords → Featured in search titles
- Secondary keywords → Title variations and alternatives
- Long-tail keywords → Specific angles and hooks
- Target audience → Language, tone, and complexity
- Content vibe → Title style (educational, entertaining, professional)
- Traffic strategy → Browse vs search title focus
- Unique value proposition → Differentiation and hooks

**TITLE STRATEGY DRIVEN BY ANALYSIS**: Without analysis.md, title optimization is severely limited.

**MINIMUM OUTPUT**: Generate at least:

- 4 browse-optimized titles
- 5 search-optimized titles
- 2 hybrid titles
- Top 3 recommendations with rationale

**CHARACTER COUNT**: Track and display character count for each title (ideal: 60-70 characters for full display on most devices).

**THUMBNAIL AWARENESS**: Each title should suggest a corresponding thumbnail concept.

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

### With Title Direction

If user provides guidance like: "focus on curiosity" or "emphasize the tutorial angle"

- Use the most recent project (or prompt to specify)
- Apply their directive to title generation

---

## Execution Steps

### Step 1: Load Analysis Context (Analysis-Driven)

1. **Locate analysis file**:

   ```
   ANALYSIS_FILE = content/[project-name]/analysis.md (CRITICAL)
   ```

2. **Load and extract from analysis.md (PRIMARY CONTEXT SOURCE)**:

   **CRITICAL - This drives all title generation decisions**:

   - **Primary keywords**: Core terms for search-optimized titles
   - **Secondary keywords**: Alternative phrasings and title variations
   - **Long-tail keywords**: Specific angles and niche hooks
   - **Target audience**: Determines language sophistication and tone (beginner vs advanced)
   - **Content vibe**: Sets title style (educational, entertaining, professional, inspirational)
   - **Traffic strategy recommendation**: Determines browse vs search focus ratio
   - **Unique value proposition**: Creates differentiation and unique angles
   - **Competitive analysis**: Informs what title styles work in this niche
   - **Hook opportunities**: Provides curiosity gap and engagement angles

3. **If analysis file not found**:
   ```
   ⚠️ ERROR: "No analysis.md found for '[project-name]'.

   The analysis file is CRITICAL for generating optimized titles. Without it:
   - No keyword research for search optimization
   - No target audience context for language/tone
   - No competitive insights for differentiation
   - Generic titles without strategic focus

   REQUIRED: Run /yt.analyze first, then return to /yt.titles"
   ```

---

### Step 2: Title Strategy Determination

Based on analysis, determine optimal title approach:

#### Traffic Strategy Assessment

From analysis recommendation:

- **Browse-Focused**: Prioritize curiosity gaps, emotional triggers, bold claims
- **Search-Focused**: Prioritize keywords, clear value, search intent matching
- **Balanced**: Mix of both approaches

#### Audience Language Mapping

From target audience analysis:

- **Beginner**: Simple language, "How to", "For beginners", avoid jargon
- **Intermediate**: Mix of accessible and technical terms
- **Advanced**: Industry terminology, efficiency focus, "Master class", "Advanced"

#### Content Vibe Translation

From analysis vibe:

- **Educational**: Clear, direct, promise learning
- **Entertaining**: Fun, casual, personality-driven
- **Professional**: Authority, credibility, results-focused
- **Inspirational**: Transformation, possibility, outcome-focused

---

### Step 3: Generate Browse Traffic Titles

Create titles optimized for homepage, suggested videos, and subscription feed.

#### Browse Title Principles

**Curiosity Gap Strategy**:

- Create a question in viewer's mind
- DON'T reveal the answer
- Use intrigue and pattern interrupts
- Trigger emotional response

**Examples of Curiosity Gaps**:

- "This [common thing] secretly [surprising fact]..."
- "Why [unexpected behavior] happens (not what you think)"
- "I tried [thing] for [time] and [surprising result]"
- "[Number] [things] nobody tells you about [topic]"

#### Generate 4+ Browse Titles

For EACH title, include:

- Full title text
- Character count
- Why it works (psychological trigger)
- Thumbnail angle suggestion
- Emotional appeal (curiosity, fear, surprise, aspiration, etc.)

**Browse Title Types to Include**:

1. **Curiosity Gap Title**: Creates mystery without revealing answer
2. **Bold Claim Title**: Makes controversial or surprising statement
3. **Outcome/Transformation Title**: Promises specific result
4. **Problem/Solution Intrigue**: Identifies problem, hints at unusual solution

---

### Step 4: Generate Search Traffic Titles

Create titles optimized for YouTube search and Google discovery.

#### Search Title Principles

**Keyword Placement**:

- Primary keyword in first 5 words when possible
- Natural integration (not stuffed)
- Include year for freshness if relevant
- Add qualifiers (beginner, advanced, complete, etc.)

**Search Intent Matching**:

- **Informational**: "What is...", "Understanding...", "Guide to..."
- **Tutorial**: "How to...", "Tutorial:", "Step by step..."
- **Comparison**: "X vs Y", "Best...", "Which..."
- **List**: "Top X...", "X ways to...", "X tips for..."

#### Generate 5+ Search Titles

For EACH title, include:

- Full title text
- Character count
- Primary keyword used
- Secondary keywords included
- Search intent matched (informational/tutorial/comparison/etc.)

**Search Title Types to Include**:

1. **How-To Format**: Direct problem-solution
2. **Tutorial Format**: Educational, step-by-step implication
3. **Complete Guide Format**: Comprehensive coverage promise
4. **Comparison/Versus Format**: Decision-support content
5. **Master Class Format**: Deep-dive expertise signal

---

### Step 5: Generate Hybrid Titles

Create 2+ titles that balance browse appeal with search optimization.

#### Hybrid Title Strategy

**Balance Elements**:

- Include primary keyword (for search)
- Add curiosity element (for browse)
- Keep it concise (character limit)
- Maintain authenticity (match content)

**Example Structures**:

- "[Keyword]: [Intriguing hook or outcome]"
- "How to [Keyword] [surprising method or timeframe]"
- "[Keyword] explained [surprising angle]"
- "[Number] [Keyword] secrets [authority hasn't told you]"

For EACH hybrid title:

- Full title text
- Character count
- Browse appeal explanation
- Search appeal explanation
- Balance assessment

---

### Step 6: Title Optimization Check

For EVERY generated title, verify:

#### Character Count (60-70 target)

- Count total characters including spaces
- Flag titles over 70 (may truncate)
- Flag titles under 40 (may seem incomplete)

#### Mobile Display Test

- First 40 characters must be compelling (mobile truncation point)
- Core value/intrigue must be in first half

#### Competitive Differentiation

- Compare to competitor titles from analysis
- Ensure unique angle or phrasing
- Avoid copycat titles

#### Content Alignment

- Title must match actual video content
- No misleading clickbait
- Promises must be fulfilled in video

#### Keyword Optimization (for search titles)

- Primary keyword included?
- Natural integration (not forced)?
- Keyword position (earlier is better)?

---

### Step 7: Generate Recommendations

#### Top 3 Title Picks

Select and rank the best 3 titles overall:

**#1 Recommended**:

- Title text
- Type (browse/search/hybrid)
- Character count
- **Rationale**: Why this is the top choice based on analysis
- **Expected Performance**: Traffic source predictions
- **Thumbnail Pairing**: Specific thumbnail concept

**#2 Alternative**:

- Title text
- Type (browse/search/hybrid)
- Character count
- **Rationale**: When to use this instead of #1
- **Expected Performance**: Traffic source predictions
- **Thumbnail Pairing**: Specific thumbnail concept

**#3 Backup**:

- Title text
- Type (browse/search/hybrid)
- Character count
- **Rationale**: When to use this instead of #1 or #2
- **Expected Performance**: Traffic source predictions
- **Thumbnail Pairing**: Specific thumbnail concept

#### Testing Strategy

Recommend A/B test approach:

- Which 2 titles to test
- Hypothesis for each
- Key metrics to watch (CTR, AVD, traffic source ratio)

---

### Step 8: Generate Output Document

1. **Load template**: Read `.youtube/templates/titles-template.md`

2. **Fill template** with:

   - All browse titles (4+)
   - All search titles (5+)
   - Hybrid titles (2+)
   - Alternative formats
   - Top 3 recommendations with full rationale
   - Testing strategy
   - Optimization checklist

3. **Write to output file**: `content/[project-name]/titles.md`

4. **Update memory**: Add title data to memory JSON:
   ```json
   {
     ...existing data,
     "titles_created": "[date]",
     "browse_titles": 4,
     "search_titles": 5,
     "recommended_title": "[title text]",
     "title_strategy": "[browse|search|hybrid]"
   }
   ```

---

### Step 9: Report Completion

Provide user with:

1. **Success Message**: "Video titles generated!"

2. **Output Location**: Full path to titles.md

3. **Quick Summary**:

   - Total titles generated
   - Recommended primary title
   - Title strategy used (browse/search/hybrid)

4. **Preview**: Show top 3 recommended titles

5. **Next Steps**:
   ```
   Review titles and select your preferred option, then:
   • Design thumbnail that pairs with chosen title
   • Run /yt.description to create SEO description
   • Run /yt.tags to generate optimized tags
   ```

---

## Title Writing Guidelines

### Browse Traffic Best Practices

**Create Curiosity Gaps**:

- ✅ "This Python trick changed how I code forever"
- ❌ "Learn Python list comprehensions"

**Use Specificity**:

- ✅ "I tested 47 productivity apps. Only 3 actually work."
- ❌ "Best productivity apps"

**Add Emotion or Stakes**:

- ✅ "Why your React components are slower than you think"
- ❌ "React component optimization"

**Use Pattern Interrupts**:

- ✅ "Stop using useState for this (use this instead)"
- ❌ "When to use useState in React"

---

### Search Traffic Best Practices

**Keyword First**:

- ✅ "Python Tutorial for Beginners: Complete Course in 2025"
- ❌ "Learn how to code in Python from scratch"

**Match Search Intent**:

- ✅ "How to Build a REST API with FastAPI (Step-by-Step)"
- ❌ "FastAPI is awesome for APIs"

**Add Qualifiers**:

- ✅ "JavaScript Promises Explained (For Beginners)"
- ❌ "Promises in JavaScript"

**Include Year for Freshness**:

- ✅ "Docker Tutorial 2025: Containerization Complete Guide"
- ❌ "Docker Tutorial: Complete Guide"

---

### Common Title Mistakes to AVOID

**DON'T**:

- Use ALL CAPS (except acronyms)
- Use excessive punctuation!!!???
- Make false promises (clickbait that doesn't deliver)
- Use ambiguous pronouns ("This will change everything" - what is "this"?)
- Keyword stuff unnaturally
- Copy competitor titles exactly
- Use insider jargon for beginner content
- Make titles longer than 70 characters

**DO**:

- Use numbers when relevant (specific, concrete)
- Include brackets for context [Tutorial], (2025), etc.
- Test multiple options
- Match title tone to thumbnail
- Keep it scannable (easy to read quickly)
- Use active voice
- Be specific about value/outcome

---

## Title Type Frameworks

### Curiosity Gap Framework

**Structure**: [Surprising statement] + [intriguing detail] + [no resolution]

**Templates**:

- "Why [unexpected behavior] is actually [surprising reason]"
- "This [common thing] secretly [surprising effect]"
- "I [action] for [specific time/number] and [unexpected result]"
- "[Number] [things] that [surprising claim]"

---

### How-To Framework

**Structure**: How to [outcome] + [method/tool] + [qualifier] + [year]

**Templates**:

- "How to [achieve outcome] with [specific method] ([qualifier])"
- "How to [solve problem] without [common approach]"
- "How to [action] like [expert/desired state] in [timeframe]"

---

### Tutorial Framework

**Structure**: [Topic] Tutorial + [Qualifier] + [Outcome] + [Year]

**Templates**:

- "[Topic] Tutorial: [Specific skill/outcome] for [Audience]"
- "[Topic] Tutorial for [Level]: [Timeframe] to [Outcome]"
- "Complete [Topic] Tutorial - [What you'll build/learn]"

---

### Bold Claim Framework

**Structure**: [Surprising claim] + [context] + [proof hint]

**Templates**:

- "[Topic] is [surprising negative] (here's why)"
- "You're [doing common thing] wrong (do this instead)"
- "[Common belief] is a myth - [alternative truth]"
- "Stop [common practice] and start [better approach]"

---

### Outcome/Transformation Framework

**Structure**: [Achieve outcome] + [timeframe] + [method]

**Templates**:

- "[Achieve outcome] in [timeframe] with [specific method]"
- "From [starting state] to [end state] using [approach]"
- "[Achieve outcome] without [common requirement]"

---

## Quality Validation

Before reporting completion, verify:

- [ ] At least 4 browse titles generated
- [ ] At least 5 search titles generated
- [ ] At least 2 hybrid titles generated
- [ ] Character counts provided for all titles
- [ ] All titles under 80 characters (hard limit)
- [ ] Top 3 recommendations with rationale
- [ ] Thumbnail suggestions for key titles
- [ ] Primary keywords included in search titles
- [ ] Curiosity elements in browse titles
- [ ] No misleading clickbait titles
- [ ] Testing strategy provided
- [ ] Output file created successfully

**If any validation fails**: Revise the relevant section before completion.

---

## Error Handling

### No Analysis Found

```
⚠️ ERROR: "No analysis.md found for this project!

The analysis file is CRITICAL for generating optimized titles. Without it:
- No keyword research for search titles
- No target audience context for tone/language
- No content vibe guidance for title style
- No competitive insights for differentiation
- Generic titles without strategic focus

REQUIRED: Run /yt.analyze first, then return to /yt.titles"
```

### Missing Keywords in Analysis

```
⚠️ WARN: "Analysis file found but missing keyword data.

Title optimization will be severely limited without:
- Primary keywords for search titles
- Target audience for language selection
- Content vibe for style direction
- Traffic strategy for browse vs search focus

Consider running /yt.analyze again or manually reviewing analysis.md

Proceeding with available information..."
```

### Multiple Projects, No Specification

```
Available projects:
1. project-name-1
2. project-name-2

Please specify which project: /yt.titles project-name-1
```

---

## Examples

### Example Analysis Context:

```
Primary Keywords: "Claude Code", "AI coding assistant", "developer automation"
Target Audience: Professional developers, intermediate level
Content Vibe: Educational but enthusiastic
Traffic Strategy: Search-focused with browse potential
Unique Value: 5 real-world automation examples
```

### Generated Title Examples:

**Browse #1 (Curiosity Gap)**:

> "This AI wrote 500 lines of code while I got coffee"

- **Character Count**: 52
- **Why It Works**: Specific number, relatable scenario, surprising outcome
- **Thumbnail**: Split screen - coffee cup vs code editor with scrolling code

**Search #1 (How-To)**:

> "How to Automate Coding with Claude Code (2025 Tutorial)"

- **Character Count**: 56
- **Primary Keyword**: "Automate Coding with Claude Code"
- **Intent**: Informational/Tutorial

**Hybrid #1**:

> "Claude Code Tutorial: 5 Automations That Save Me 15 Hours/Week"

- **Character Count**: 63
- **Browse Appeal**: Specific time save (15 hours), creates curiosity about automations
- **Search Appeal**: Includes "Claude Code Tutorial", clear value

---

## Context

$ARGUMENTS
