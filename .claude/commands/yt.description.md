---
description: Generate SEO-optimized video descriptions with keywords, timestamps, and calls-to-action
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

---

## Goal

Create a comprehensive, SEO-optimized video description that:
- Hooks viewers in the first 2-3 lines (visible before "Show More")
- Incorporates keywords naturally for search discovery
- Provides structured content overview with timestamps
- Includes relevant links and resources
- Contains effective calls-to-action for engagement
- Stays within YouTube's 5000 character limit
- Adds genuine value beyond the video content

---

## Operating Constraints

**ANALYSIS REQUIRED**: This command requires an existing analysis.md file with keyword data.

**MOBILE-FIRST**: First 150 characters are CRITICAL (visible on mobile without expanding).

**KEYWORD INTEGRATION**: Must be natural, not stuffed. Keywords should flow conversationally.

**TIMESTAMP INCLUSION**: Required for videos over 5 minutes (helps with suggested clips and user navigation).

**CALL-TO-ACTION BALANCE**: Engaging but not pushy. Focus on value, not begging.

**CHARACTER LIMIT**: Maximum 5000 characters total.

---

## Input Handling

### With Project Name
If user provides a project name: `$ARGUMENTS = "project-name"`
- Use: `youtube/content/[project-name]/analysis.md`

### Without Project Name
If user provides no arguments:
1. List available projects in `youtube/content/`
2. If only one project exists, use it automatically
3. If multiple exist, ask user to specify which project

### With Additional Context
If user provides context like: "include link to course" or "mention the GitHub repo"
- Use the most recent project (or prompt to specify)
- Incorporate their specific requirements into description

---

## Execution Steps

### Step 1: Load Context

1. **Locate required files**:
   ```
   ANALYSIS_FILE = youtube/content/[project-name]/analysis.md
   TITLES_FILE = youtube/content/[project-name]/titles.md (if exists)
   HOOK_FILE = youtube/content/[project-name]/hook.md (if exists)
   ```

2. **Read and extract key information**:

   **From Analysis**:
   - Primary keywords (for SEO)
   - Secondary keywords (for natural distribution)
   - Long-tail keywords (for specific search queries)
   - Target audience (for language/tone)
   - Content vibe (for description style)
   - Unique value proposition (for value communication)
   - Key points covered (for content overview section)

   **From Titles** (if available):
   - Chosen or recommended title (for consistency)
   - Title strategy (browse/search focus)

   **From Hook** (if available):
   - Main value propositions mentioned
   - Key points to highlight

3. **If analysis file not found**:
   ```
   ERROR: "No analysis found for '[project-name]'. Please run /yt.analyze first."
   ```

---

### Step 2: Description Strategy Planning

Based on analysis, determine description approach:

#### SEO Priority Assessment

**High SEO Priority** (Search-focused content):
- Keyword density: 2-4 mentions of primary keyword
- Keyword placement: Primary keyword in first 25 words
- Long-tail phrases: Include 3-5 specific search phrases
- Structured format: Clear sections with headers

**Medium SEO Priority** (Balanced):
- Keyword density: 1-2 mentions of primary keyword
- Natural integration: Keywords flow conversationally
- Mixed content: Both searchable and engaging elements

**Low SEO Priority** (Browse-focused):
- Keyword presence: Primary keyword mentioned once naturally
- Focus: Engagement, personality, community building
- Style: More conversational, less structured

#### Tone and Style Mapping

From content vibe:
- **Educational**: Clear, organized, helpful
- **Entertaining**: Casual, personality-driven, fun
- **Professional**: Authoritative, data-backed, formal
- **Inspirational**: Motivational, transformative, aspirational

---

### Step 3: Generate Primary Description (First 150 Characters)

**CRITICAL SECTION**: This appears before "Show More" on mobile.

#### Primary Description Requirements:

1. **Hook** (First 40 characters):
   - Immediate value or intrigue
   - Connect to title
   - Create reason to keep reading/watching

2. **Value Proposition** (Next 60 characters):
   - What viewer will learn/gain
   - Specific outcome or benefit
   - Align with video promise

3. **Call-to-Action or Credibility** (Remaining 50 characters):
   - Encourage watching
   - Establish authority
   - Create urgency or excitement

#### Primary Description Formula:

```
[Hook sentence that connects to title]. [What you'll learn/discover].
[CTA or credibility statement].
```

**Character count target**: 150-200 characters

#### Keyword Placement:

Primary keyword should appear in first 25 words if content is search-focused.

---

### Step 4: Generate Full Description Components

#### Component 1: Opening Paragraph (200-300 characters)

Expand on primary description:
- Elaborate on the problem or opportunity
- Set context for the video
- Include 1-2 primary keywords naturally
- Create excitement or urgency
- Establish relevance to target audience

#### Component 2: Content Overview with Timestamps

**Format**:
```
In this video, you'll discover:
⏱️ 0:00 - [Section or topic 1]
⏱️ X:XX - [Section or topic 2]
⏱️ X:XX - [Section or topic 3]
⏱️ X:XX - [Section or topic 4]
⏱️ X:XX - [Section or topic 5]
```

**Guidelines**:
- Use emojis (⏱️ or 📌) for visual interest
- Keep section descriptions concise (3-7 words)
- Cover all major sections
- Make it scannable
- Include intro/outro if relevant

**Following paragraph** (100-150 characters):
- Reinforce value proposition
- Include 2-3 secondary keywords naturally
- Connect timestamps to viewer benefit

#### Component 3: Key Takeaways

**Format**:
```
🎯 Key Takeaway 1: [Valuable insight or learning]
🎯 Key Takeaway 2: [Valuable insight or learning]
🎯 Key Takeaway 3: [Valuable insight or learning]
```

**Following paragraph** (100-200 characters):
- Additional context
- Include long-tail keywords
- Relate takeaways to viewer goals

#### Component 4: Resources & Links

**Format**:
```
📚 RESOURCES MENTIONED:
- [Resource 1 name]: [URL]
- [Resource 2 name]: [URL]
- [Tool mentioned]: [URL]

🔗 USEFUL LINKS:
- [Related resource]: [URL]
- [Additional tool]: [URL]
- [Documentation]: [URL]
```

**Guidelines**:
- Only include if relevant resources exist
- Use descriptive link text
- Group by type (resources vs additional links)
- Keep it organized and scannable

#### Component 5: About Section

**Format**:
```
ABOUT [CHANNEL NAME]:
[2-3 sentences about channel mission and expertise]
[Authority indicators or achievements]

Connect with me:
• Website: [URL]
• Twitter/X: [URL]
• LinkedIn: [URL]
• GitHub: [URL if relevant]
```

**Guidelines**:
- Keep it brief (3-4 lines max)
- Focus on credibility and mission
- Only include active social channels
- Use bullet points for readability

#### Component 6: Calls-to-Action

**Format**:
```
👍 If you found this helpful, give it a thumbs up!
💬 Drop a comment with [specific question related to topic]
🔔 Subscribe for more [content type] every [frequency]
📢 Share this with someone who [would benefit]
```

**Guidelines**:
- Be specific (not just "like and subscribe")
- Give reason WHY they should engage
- Make comment CTA specific to video
- Focus on value exchange

#### Component 7: Engagement Hook

**Format**:
```
LEAVE A COMMENT:
What's your biggest challenge with [topic]? Let me know below!

COMMUNITY QUESTION:
[Thought-provoking question that encourages discussion]
```

**Guidelines**:
- Make it specific to video content
- Encourage genuine conversation
- Ask opinion or experience questions
- Make it easy to answer

#### Component 8: SEO Keywords Section

**Format**:
```
[Natural paragraph that includes additional keywords and context]
[Provides genuine additional value or summary]
[Helps with discovery without keyword stuffing]

Related topics: [Topic 1] | [Topic 2] | [Topic 3] | [Topic 4]
```

**Guidelines**:
- Must be natural and valuable
- NOT a list of keywords
- Provides context or summary
- Includes 3-5 related terms

#### Component 9: Hashtags

**Format**:
```
#[PrimaryKeyword] #[SecondaryKeyword] #[TrendingTopic]
```

**Guidelines**:
- 3-5 hashtags maximum (YouTube considers first 3 most)
- No spaces in multi-word hashtags
- Relevant to content
- Mix of broad and specific

#### Component 10: Legal/Disclosure (if needed)

**Format**:
```
DISCLOSURE:
[Affiliate link disclosure if applicable]
[Sponsorship disclosure if applicable]
[Music/footage credits if applicable]

[Copyright notice if applicable]
```

---

### Step 5: Assemble Complete Description

1. **Combine all components** in order:
   - Primary description (first 150 chars)
   - Opening paragraph
   - Content overview with timestamps
   - Key takeaways
   - Resources & links (if applicable)
   - About section
   - Calls-to-action
   - Engagement hook
   - SEO keywords section
   - Hashtags
   - Legal/disclosure (if needed)

2. **Count total characters**: Must be under 5000

3. **Verify keyword distribution**:
   - Primary keyword: 2-4 times (search-focused) or 1-2 times (browse-focused)
   - Secondary keywords: 1-2 times each
   - Natural distribution throughout

4. **Check readability**:
   - Scannable structure with clear sections
   - Proper spacing between sections
   - Emoji use for visual interest (not overdone)
   - Mobile-friendly formatting

---

### Step 6: Generate Alternative Versions (Optional)

Create 2-3 alternative description strategies:

**Version A: SEO-Heavy**
- More keyword density
- Focus on search optimization
- Structured and informational

**Version B: Engagement-Heavy**
- More conversational
- Focus on community building
- Personal and relatable

**Version C: Conversion-Heavy**
- Focus on specific CTA (course, product, service)
- Clear value ladder
- Strategic link placement

---

### Step 7: Create Optimization Checklist

Generate checklist for user to verify:

```
- [ ] Primary keyword in first 25 words
- [ ] 2-3 secondary keywords naturally placed
- [ ] Timestamps included (if video >5 mins)
- [ ] Links are relevant and working
- [ ] Call-to-action is clear and specific
- [ ] First 150 characters are compelling
- [ ] Description adds value beyond video
- [ ] Related terms and phrases included
- [ ] Hashtags are relevant (3-5 max)
- [ ] No keyword stuffing
- [ ] Mobile-friendly formatting
- [ ] Engagement question included
- [ ] Total under 5000 characters
```

---

### Step 8: Generate Output Document

1. **Load template**: Read `youtube/.youtube/templates/description-template.md`

2. **Fill template** with:
   - Complete formatted description (copy-ready)
   - All individual components
   - Alternative versions (if generated)
   - Optimization checklist (completed)
   - SEO analysis
   - Performance optimization notes

3. **Write to output file**: `youtube/content/[project-name]/description.md`

4. **Update memory**: Add description data to memory JSON:
   ```json
   {
     ...existing data,
     "description_created": "[date]",
     "character_count": [number],
     "keyword_density": {
       "primary": [count],
       "secondary": [count]
     }
   }
   ```

---

### Step 9: Report Completion

Provide user with:

1. **Success Message**: "Video description generated!"

2. **Output Location**: Full path to description.md

3. **Quick Stats**:
   - Total character count (X / 5000)
   - Primary keyword mentions: [X]
   - Sections included: [list]

4. **Preview**: Show first 150 characters (the critical above-the-fold content)

5. **Next Steps**:
   ```
   Copy description to YouTube, then:
   • Run /yt.tags to generate optimized tags
   • Review all content (analysis, hook, titles, description) for consistency
   ```

---

## Description Writing Guidelines

### Above-the-Fold Strategy

The first 2-3 lines are EVERYTHING for mobile users:

**BAD** ❌:
```
Hey everyone! In today's video, we're going to be talking about something
really cool that I think you'll find interesting...
```

**GOOD** ✅:
```
Spending hours on repetitive code? This automation workflow cuts that time
by 80%. Here's exactly how to set it up in 15 minutes.
```

---

### Keyword Integration Best Practices

**Natural Integration** ✅:
```
"If you're learning Claude Code for the first time, this tutorial walks you
through the essential automation features that save the most time."
```

**Keyword Stuffing** ❌:
```
"Claude Code Claude Code automation tutorial. Learn Claude Code. Best Claude
Code tutorial. Claude Code tips."
```

---

### Timestamp Strategy

**Effective Timestamps** ✅:
```
⏱️ 0:00 - Why automation matters
⏱️ 2:15 - Setup and installation
⏱️ 5:30 - First automation example
⏱️ 9:45 - Advanced techniques
⏱️ 14:20 - Common mistakes to avoid
```

**Poor Timestamps** ❌:
```
0:00 Intro
5:00 Main content
15:00 Outro
```

Make them descriptive and valuable!

---

### Call-to-Action Effectiveness

**Specific and Value-Focused** ✅:
```
💬 Drop a comment with your biggest automation challenge - I read and
respond to every one!
```

**Generic and Pushy** ❌:
```
Like and subscribe!!! Please!!! Click the bell!!!
```

---

### Mobile Formatting

Use these techniques for mobile readability:
- Short paragraphs (2-3 lines max)
- Emoji for visual breaks and section markers
- Clear spacing between sections
- Bullet points or numbered lists
- All caps for section headers (sparingly)

---

## Quality Validation

Before reporting completion, verify:

- [ ] First 150 characters are compelling
- [ ] Primary keyword appears in first 25 words (if search-focused)
- [ ] Total character count under 5000
- [ ] Timestamps included (if relevant)
- [ ] At least 3 calls-to-action
- [ ] Engagement question included
- [ ] Links formatted correctly
- [ ] Hashtags relevant (3-5 max)
- [ ] No keyword stuffing
- [ ] About section included
- [ ] Mobile-friendly formatting
- [ ] SEO optimization checklist completed
- [ ] Output file created successfully

**If any validation fails**: Revise the relevant section before completion.

---

## Error Handling

### No Analysis Found
```
ERROR: "No analysis found. Please run /yt.analyze first to generate the
required analysis with keywords for this project."
```

### Missing Keywords in Analysis
```
WARN: "Analysis is missing keyword data. Generating description with
available information, but SEO optimization may be limited."
```

### Character Count Exceeded
```
WARN: "Generated description exceeds 5000 characters. Trimming optional
sections to fit within limit."
```

### Multiple Projects, No Specification
```
Available projects:
1. project-name-1
2. project-name-2

Please specify which project: /yt.description project-name-1
```

---

## Examples

### Example Analysis Context:
```
Primary Keywords: "Claude Code tutorial", "AI coding automation"
Secondary Keywords: "developer productivity", "code generation"
Target Audience: Professional developers, intermediate level
Content Vibe: Educational, practical
Video Length: 12 minutes
```

### Generated Description Example:

```
Stop wasting hours on repetitive code. This Claude Code tutorial shows you
5 automations that save 15+ hours per week. Ready to code smarter?

In this video, you'll discover the exact automation workflows I use daily
to eliminate boilerplate code, generate API endpoints, and streamline my
entire development process. Whether you're new to AI coding assistants or
looking to level up your productivity, these practical examples will
transform your workflow.

⏱️ 0:00 - Why automation is a game-changer
⏱️ 2:15 - Setting up Claude Code
⏱️ 4:30 - Automation #1: API endpoint generation
⏱️ 6:45 - Automation #2: Database schema creation
⏱️ 9:00 - Automation #3: Test file scaffolding
⏱️ 11:15 - Automation #4: Documentation generation
⏱️ 13:30 - Automation #5: Code refactoring workflows

These aren't just theoretical examples - these are the exact automations
I use in production code every day. By the end, you'll have 5 practical
workflows you can implement immediately.

🎯 Key Takeaway 1: Automation saves time and reduces human error
🎯 Key Takeaway 2: Start with repetitive tasks for biggest impact
🎯 Key Takeaway 3: AI coding assistants excel at pattern-based code

📚 RESOURCES MENTIONED:
- Claude Code Documentation: [URL]
- Example GitHub Repository: [URL]
- Automation Templates: [URL]

ABOUT MY CHANNEL:
I create practical coding tutorials focused on developer productivity and
modern AI tools. 10+ years of professional development experience.

Connect with me:
• Website: [URL]
• Twitter: [URL]
• GitHub: [URL]

👍 If this saved you time, give it a thumbs up!
💬 Drop a comment: What's your biggest coding time-waster?
🔔 Subscribe for weekly productivity and AI coding tutorials
📢 Share with a developer who's tired of repetitive work

LEAVE A COMMENT:
What automation would save YOU the most time? Let me know and I might
cover it in the next video!

This tutorial covers AI coding automation, developer productivity tools,
and practical Claude Code workflows that work in real-world projects.
Perfect for developers looking to eliminate repetitive tasks and focus
on creative problem-solving.

Related topics: Developer Productivity | AI Coding Tools | Workflow Automation | Code Generation

#ClaudeCode #CodingAutomation #DeveloperProductivity
```

**Character Count**: 2,147 / 5000

---

## Context

$ARGUMENTS
