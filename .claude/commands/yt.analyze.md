---
description: Analyze video content to extract keywords, audience insights, and competitive research
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

---

## Goal

Transform raw video content (transcript, script, or subtitle track) into a comprehensive analysis that includes:

- Primary and secondary keyword extraction
- Target audience and content vibe identification
- Detailed summary of video purpose and positioning
- Competitive research from other creators
- Trending topic analysis
- Strategic recommendations for content optimization

This analysis becomes the foundation for generating titles, descriptions, and tags.

**Workflow Position**: This command is used AFTER video creation, when you have a transcript. For pre-video hook/intro generation, use `/yt.hook` with reference material instead.

---

## Operating Constraints

**QUALITY OVER SPEED**: Take time to perform thorough research. This analysis will be used by all other commands.

**WEB RESEARCH REQUIRED**: You MUST use the WebSearch tool to:

1. Find similar videos from other creators
2. Identify trending topics related to keywords
3. Analyze what's currently performing well in the niche

**CONTEXT PRESERVATION**: The analysis output must be comprehensive enough to inform hook, title, description, and tag generation without requiring the original input again.

---

## Input Types Supported

### 1. Script Outline

- Full or partial script
- Bullet points of content structure
- Sections and key points to cover

### 2. Topic Idea

- Brief description of video concept
- Main problem/solution being addressed
- Target outcome for viewers

### 3. Subtitle Track

- Existing video transcript
- Auto-generated or manual subtitles
- Any timestamped text content

**If Input is Empty**: ERROR - "Please provide video content in one of these formats: script outline, topic idea, or subtitle track."

---

## Execution Steps

### Step 1: Initialize Analysis Context

1. **Create project directory structure**:

   ```bash
   # Generate a short project name from the topic (2-4 words, kebab-case)
   PROJECT_NAME="[derived-from-topic]"
   mkdir -p content/$PROJECT_NAME
   ```

2. **Set output paths**:

   - ANALYSIS_FILE = content/$PROJECT_NAME/analysis.md
   - MEMORY_FILE = .youtube/memory/$PROJECT_NAME.json

3. **Parse input type**:
   - Determine if input is script/topic/subtitles
   - Extract raw content length and structure
   - Note any timestamps or section markers

---

### Step 2: Content Analysis

1. **Extract Core Topic**:

   - What is the single most important subject?
   - What transformation or outcome does this promise?
   - What problem does it solve?

2. **Identify Content Vibe**:

   - Tone: Educational | Entertaining | Inspirational | Professional | Casual
   - Energy: High-energy | Calm | Intense | Conversational
   - Style: Tutorial | Story-driven | Interview | Demonstration | Opinion

3. **Define Target Audience**:
   - **Demographics**: Age range, profession, experience level
   - **Pain Points**: What problems are they facing?
   - **Goals**: What do they want to achieve?
   - **Viewing Context**: Why would they search for/watch this?

---

### Step 3: Keyword Extraction

#### Primary Keywords (3-5)

Extract the main topics that define this video:

- Focus on nouns and noun phrases
- Consider search intent
- Prioritize topics with search volume

For each primary keyword, consider:

- Search volume (High | Medium | Low - make educated guess)
- Competition level (High | Medium | Low - based on topic popularity)

#### Secondary Keywords (5-10)

Extract supporting topics:

- Related concepts discussed in video
- Skills or techniques mentioned
- Tools or methods referenced
- Problems addressed

#### Long-Tail Keywords (3-5)

Extract specific phrases:

- "How to [specific action]"
- "[Problem] + [solution approach]"
- "[Specific question]"
- "[Topic] for [specific audience]"

**Keyword Extraction Guidelines**:

- Focus on searchable terms
- Consider YouTube autocomplete patterns
- Think about viewer search intent
- Balance specificity with volume

---

### Step 4: Competitive Research (REQUIRED - Use WebSearch)

#### Research Query Strategy

For EACH primary keyword, perform web searches:

**Query Format 1**: "[keyword] youtube tutorial"
**Query Format 2**: "how to [keyword]"
**Query Format 3**: "[keyword] [current year]"

**Minimum**: Search for at least 2-3 primary keywords
**Goal**: Find 3-5 high-performing videos on similar topics

#### For Each Video Found:

Extract and document:

1. **Title** - How did they frame it?
2. **Creator/Channel** - Who is the authority?
3. **URL** - Direct link
4. **View Count** - Performance indicator
5. **Publish Date** - Recency factor
6. **What Works** - Analyze success factors:
   - Title strategy
   - Apparent hook (if visible in description)
   - Content angle
   - Unique approach
7. **Gaps/Opportunities** - What could be better:
   - Missing information
   - Outdated content
   - Different angle we could take
   - Underserved audience segment

#### Trending Topics Research

**Query Format**: "[primary keyword] trends [current year]"
**Goal**: Identify 2-3 trending angles related to our keywords

For each trend:

- Trend Status: Rising | Peak | Declining (estimate based on search results)
- Relevance: How it connects to our video
- Opportunity: How we can leverage it

---

### Step 5: Content Structure Analysis

1. **Extract Key Points**:

   - Main sections or topics covered (3-7 points)
   - Structure and flow
   - Supporting evidence or examples

2. **Identify Unique Value Proposition**:

   - What makes this video different?
   - Why should someone watch THIS vs competitors?
   - What unique angle or approach are we taking?

3. **Hook Opportunities**:
   - What's the most compelling opening angle?
   - Which pain point creates urgency?
   - What surprising insight could lead?

---

### Step 6: SEO Insights

1. **Determine Search Intent**:

   - **Informational**: Learn about a topic
   - **Navigational**: Find specific creator/brand
   - **Transactional**: Ready to buy/sign up
   - **Commercial Investigation**: Comparing options

2. **Traffic Strategy Recommendation**:

   - **Browse Traffic Focus**: If topic is novel, emotional, or curiosity-driven
   - **Search Traffic Focus**: If topic is tutorial, how-to, or problem-solution
   - **Balanced**: If topic has both search demand and viral potential

3. **Title Strategy Direction**:
   - Curiosity Gap vs Clear Promise
   - Keyword-heavy vs Intrigue-heavy
   - Outcome-focused vs Problem-focused

---

### Step 7: Generate Analysis Document

1. **Load template**: Read `.youtube/templates/analysis-template.md`

2. **Fill template** with all extracted information:

   - Replace ALL placeholder text
   - Use specific data from research
   - Include URLs and metrics from web search
   - Provide actionable recommendations

3. **Write to ANALYSIS_FILE**: `content/$PROJECT_NAME/analysis.md`

4. **Create memory snapshot**: Save key data to MEMORY_FILE as JSON:
   ```json
   {
     "project_name": "[name]",
     "created": "[date]",
     "primary_keywords": ["keyword1", "keyword2", "keyword3"],
     "secondary_keywords": ["keyword1", "keyword2", ...],
     "target_audience": "[summary]",
     "content_vibe": "[tone/style]",
     "traffic_strategy": "[browse|search|balanced]",
     "unique_value": "[key differentiator]"
   }
   ```

---

### Step 8: Report Completion

Provide user with:

1. **Success Message**: "Video analysis complete!"

2. **Output Location**: Full path to analysis.md

3. **Quick Summary**:

   - Primary Keywords: [list]
   - Target Audience: [summary]
   - Recommended Strategy: [browse/search/balanced]
   - Competitors Analyzed: [count]

4. **Next Steps**:

   ```
   Ready to create content based on this analysis:
   • Run /yt.titles to generate title variations
   • Run /yt.description to create SEO description
   • Run /yt.tags to generate optimized tags

   Each command will use the analysis from: [path]
   ```

5. **Key Insights**: Share 2-3 most important findings from research

---

## Quality Validation

Before reporting completion, verify:

- [ ] At least 3 primary keywords identified
- [ ] At least 5 secondary keywords identified
- [ ] Target audience clearly defined
- [ ] At least 3 competitor videos researched with URLs
- [ ] Trending topics identified (at least 1)
- [ ] SEO strategy recommendation provided
- [ ] Unique value proposition articulated
- [ ] Hook opportunities identified
- [ ] Analysis file created successfully
- [ ] Memory file created successfully

**If any validation fails**: Document the gap and attempt to resolve before completion.

---

## Operating Principles

### Research Thoroughness

- **Don't Skip Web Research**: The competitive analysis is CRITICAL
- **Document Sources**: Always include URLs for videos found
- **Be Specific**: Vague insights like "create good content" are not helpful
- **Think Strategically**: Every insight should inform content decisions

### Keyword Quality

- **Searchable**: Think about what people actually type into YouTube search
- **Relevant**: Keywords must genuinely reflect video content
- **Balanced**: Mix of high-volume competitive terms and long-tail opportunities
- **Intent-Aware**: Consider WHY someone searches for these terms

### Audience Understanding

- **Specific Over Generic**: "Beginner JavaScript developers struggling with async" beats "developers"
- **Problem-Focused**: Define pain points clearly
- **Context-Aware**: Consider where they are in their journey

### Competitive Analysis

- **Learn from Success**: What made those videos perform well?
- **Find Gaps**: What did they miss that we can provide?
- **Differentiate**: How can we be unique while serving the same need?

---

## Error Handling

### No Input Provided

- ERROR: "Please provide video content. Supported formats: script outline, topic idea, or subtitle track."
- Provide examples of each format

### Input Too Short

- WARN: "Input is brief. Analysis will be limited. Consider providing more detail."
- Proceed with best effort analysis

### Web Search Fails

- WARN: "Unable to complete competitive research due to search limitations."
- Proceed with analysis based on available information
- Note the limitation in the analysis document

### Unable to Extract Keywords

- ERROR: "Could not identify clear keywords from input. Please provide more specific topic information."
- Ask user for clarification on main topic

---

## Examples

### Example Input 1: Topic Idea

```
I want to create a video about using Claude Code for automating repetitive coding tasks.
The target audience is developers who are tired of writing boilerplate code and want to
speed up their workflow. I'll show 5 practical examples of automation.
```

**Expected Analysis**:

- Primary Keywords: "Claude Code", "coding automation", "workflow automation"
- Secondary Keywords: "boilerplate code", "developer productivity", "AI coding tools"
- Target Audience: Professional developers, intermediate to advanced level
- Content Vibe: Educational, professional, practical
- Traffic Strategy: Search-focused (how-to intent)

### Example Input 2: Script Outline

```
Hook: Ever spent hours writing the same code patterns over and over?
Intro: Today I'm showing you how AI can automate your repetitive tasks
Section 1: Why automation matters (time saved, fewer errors)
Section 2: Setting up Claude Code
Section 3: Example 1 - Automating API endpoint creation
Section 4: Example 2 - Database schema generation
...
```

**Expected Analysis**:

- Extract keywords from each section
- Identify hook opportunities from opening
- Analyze structure for content optimization
- Research competing "automation" and "AI coding" videos

---

## Context

$ARGUMENTS
