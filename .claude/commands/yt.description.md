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

Create a SEO-optimized video description following this specific structure:

1. **Strong SEO opening paragraph** (<200 words) - Hook viewers and incorporate keywords naturally
2. **Links section** - Sponsor/affiliate links, resources mentioned, support links, social connections
3. **Timestamps** - Extracted from subtitle track in references folder with descriptive labels
4. **Three strategic hashtags**:
   - Video-specific (most important keyword from the video)
   - Industry-specific (broader category)
   - Broad appeal (reaches wider audience)

---

## Operating Constraints

**ANALYSIS FILE CRITICAL**: The analysis.md file is the PRIMARY source for:

- Primary, secondary, and long-tail keywords
- Video concept and overall vibe
- Target audience and tone
- Value propositions and key themes

**SUBTITLE TRACK REQUIRED**: Used to extract accurate timestamps from the subtitle file (.srt or .vtt) in the `content/[project-name]/references/` folder.

**ANALYSIS-DRIVEN SEO**: The SEO paragraph must be built around keywords and insights from analysis.md. Without it, optimization will be severely limited.

**MOBILE-FIRST**: First 150-200 words are CRITICAL for SEO and mobile visibility.

**KEYWORD INTEGRATION**: Natural and conversational - focus on value, not keyword stuffing.

**CHARACTER LIMIT**: Maximum 5000 characters total (YouTube limit).

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

### With Additional Context

If user provides context like: "include link to course" or "mention the GitHub repo"

- Use the most recent project (or prompt to specify)
- Incorporate their specific requirements into description

---

## Execution Steps

### Step 1: Load Context and Locate Files

1. **Locate required files**:

   ```
   ANALYSIS_FILE = content/[project-name]/analysis.md (STRONGLY RECOMMENDED)
   SUBTITLE_FILE = content/[project-name]/references/*.srt or *.vtt (REQUIRED)
   TITLES_FILE = content/[project-name]/titles.md (if exists)
   HOOK_FILE = content/[project-name]/hook.md (if exists)
   ```

2. **Load and extract from analysis.md (PRIMARY CONTEXT SOURCE)**:

   **CRITICAL - This drives the entire SEO strategy**:

   - **Primary keywords**: Main search terms (will be featured in opening paragraph)
   - **Secondary keywords**: Supporting terms (distributed naturally throughout)
   - **Long-tail keywords**: Specific phrases (helps with niche search queries)
   - **Video concept/vibe**: Educational, entertaining, professional, etc. (sets the tone)
   - **Target audience**: Who this is for (influences language and approach)
   - **Value propositions**: What viewers will gain (forms the hook)
   - **Key themes and topics**: Main discussion points (informs content structure)

   **If analysis.md not found**:

   - WARN: "No analysis.md found. SEO optimization will be severely limited. Strongly recommend running /yt.analyze first."
   - Continue with generic description, but flag this to user

3. **Verify and read subtitle track**:

   - Search in `content/[project-name]/references/` for .srt or .vtt files
   - If not found: ERROR: "No subtitle file found in references folder. Please add a .srt or .vtt file with timestamps."

   **Parse subtitle content**:

   - Extract timestamp entries (format: `00:00:00,000 --> 00:00:05,000`)
   - Read text content for each timestamp segment
   - Identify major topic changes and key discussion points
   - Note important moments and transitions
   - This data will be used ONLY for generating timestamps

4. **Load supplementary context** (if available):

   **From Titles** (if exists):

   - Chosen or recommended title (ensures consistency)
   - Title strategy (browse vs search focus)

   **From Hook** (if exists):

   - Opening value propositions
   - Key engagement angles

---

### Step 2: Generate SEO Opening Paragraph (Analysis-Driven)

**Target**: 150-200 words that hook viewers and optimize for search

**Data Source**: Use analysis.md as the foundation for all content decisions

**Requirements**:

1. **First 2-3 sentences** (visible before "Show More"):

   - Start with the **primary keyword** from analysis.md (ideally in first 25 words)
   - Hook based on **value propositions** identified in analysis
   - Match the **content vibe** (educational, entertaining, professional, etc.)
   - Create interest and urgency using **key themes** from analysis

2. **Body** (remaining content to reach ~200 words):
   - Expand on the problem/opportunity using **target audience** context from analysis
   - What viewers will learn (draw from **key topics** in analysis)
   - Specific outcomes or benefits (use **value propositions**)
   - Naturally integrate **2-3 secondary keywords** from analysis throughout
   - Weave in **1-2 long-tail keywords** where they fit naturally
   - Maintain the **tone and vibe** established in analysis

**Keyword Integration Strategy** (from analysis.md):

- **Primary keyword**: 1-2 mentions (first in opening sentences)
- **Secondary keywords**: 1-2 mentions each (distributed naturally)
- **Long-tail keywords**: 1 mention each (specific phrases that add value)

**Quality Check**:

- Sounds conversational, not keyword-stuffed
- Mobile-friendly (first 150 characters are compelling on their own)
- Creates excitement to watch the video
- Aligns with video concept and vibe from analysis
- Keywords from analysis.md flow naturally in context

---

### Step 3: Generate Links Section

**Structure** (using emojis for visual interest):

```
🎁 [Sponsor/Affiliate Section Title]:
[Product/Service Name]: [URL]
[Coupon code or special offer if applicable]

📚 [Resources Mentioned in Video]:
[Resource 1]: [URL]
[Resource 2]: [URL]

💰 SUPPORT THE CHANNEL:
☕ Buy me a coffee: [URL]
💵 PayPal: [URL]

🔗 CONNECT:
📺 Subscribe for [content description]
🐦 Follow on Twitter: [URL]
```

**Guidelines**:

- Only include links that are relevant (don't add placeholder links)
- Use descriptive names for each link
- Group by category with emoji headers
- If user mentioned specific links in context, include those
- Common categories: sponsor/affiliate, resources mentioned, support, social connections

---

### Step 4: Extract and Generate Timestamps

**Process**:

1. **Parse subtitle file** (.srt or .vtt format)
2. **Identify major topic changes** by analyzing:

   - Content transitions in subtitle text
   - Key phrases and discussion points
   - Natural section breaks
   - Important moments worth highlighting

3. **Create descriptive labels** for each timestamp:

   - Keep labels concise but descriptive (5-10 words)
   - Focus on value/topic, not generic descriptions
   - Make it scannable and useful for viewers
   - Extract actual keywords from subtitle content

4. **Format timestamps**:

```
⏱️ TIMESTAMPS:
00:00 - [Descriptive label for intro/hook]
01:15 - [Key topic or section 1]
02:22 - [Important point or transition]
03:00 - [Main content section]
[Continue for all major points...]
```

**Quality Guidelines**:

- Aim for 8-15 timestamps for a 15-25 minute video
- Each timestamp should represent a meaningful topic change
- Labels should be specific enough to help viewers navigate
- Use the actual content from subtitles to inform labels

---

### Step 5: Generate Three Strategic Hashtags (Analysis-Driven)

**Hashtag Strategy** (exactly 3 hashtags):

1. **Video-Specific Hashtag**:

   - Use the **primary keyword** from analysis.md
   - This should be THE most important keyword for this specific video
   - Convert to hashtag format (no spaces, camelCase or lowercase)
   - Examples: #claudecode, #n8nautomation, #agenticworkflows
   - Source: Primary keyword from analysis.md

2. **Industry-Specific Hashtag**:

   - Use a **secondary keyword** from analysis.md that represents the broader category
   - Helps reach audience interested in the general field
   - Examples: #ai, #automation, #productivity, #webdev
   - Source: Secondary keywords or industry category from analysis.md

3. **Broad Appeal Hashtag**:
   - Very general topic that attracts wider audience
   - Should still be relevant but has mass appeal
   - Can be derived from **target audience** or broader **content themes** in analysis
   - Examples: #tech, #coding, #tutorial, #howto
   - Source: General category or audience type from analysis.md

**Format**:

```
#videospecific #industryspecific #broadappeal
```

**Quality Check**:

- All hashtags derived from analysis.md keywords/themes
- No spaces in multi-word hashtags (use camelCase or lowercase)
- All three hashtags are genuinely relevant to content
- Mix of specificity levels (narrow → medium → broad)

---

### Step 6: Assemble Complete Description

**Final Structure**:

```
[SEO Opening Paragraph - 150-200 words]

[Links Section with emojis and organized categories]

[Timestamps Section with ⏱️ emoji header]

[Three Strategic Hashtags]
```

**Final Checks**:

1. Total character count under 5000
2. First 150 characters are compelling (mobile test)
3. Keywords appear naturally (no stuffing)
4. All links are properly formatted
5. Timestamps are accurate and descriptive
6. Three hashtags follow the strategy

---

### Step 7: Generate Output Document

1. **Load template**: Read `.youtube/templates/description-template.md`

2. **Fill template** with:

   - Complete formatted description (copy-ready)
   - SEO opening paragraph
   - Links section
   - Timestamps
   - Hashtags
   - Character count stats

3. **Write to output file**: `content/[project-name]/description.md`

---

### Step 8: Report Completion

Provide user with:

1. **Success Message**: "Video description generated!"

2. **Output Location**: Full path to description.md

3. **Quick Stats**:

   - Total character count (X / 5000)
   - Number of timestamps generated
   - Hashtags used

4. **Preview**: Show the complete copy-ready description

5. **Next Steps**:
   ```
   ✅ Copy description to YouTube Studio
   📋 Verify all links are working
   ⏱️ Confirm timestamps match video
   🏷️ Consider running /yt.tags for optimized video tags
   ```

---

## Description Writing Guidelines

### SEO Opening Paragraph Best Practices

**GOOD Opening** ✅:

```
Discover how to supercharge your Claude Code workflows by integrating custom
hooks with N8N automation. Learn to receive instant Telegram notifications
when your AI agent completes tasks or requires approval, perfect for
long-running agentic coding processes. This comprehensive tutorial covers
setting up Claude Code hooks, creating Python scripts, configuring N8N
workflows, and integrating Telegram bots for real-time updates on any device.
```

**BAD Opening** ❌:

```
Hey everyone! In today's video, we're going to be talking about something
really cool about Claude Code and N8N that I think you'll find interesting...
```

**Key Differences**:

- Good: Immediate value, specific outcomes, natural keywords
- Bad: Generic greeting, vague promise, no keywords

---

### Timestamp Guidelines

**Effective Timestamps** ✅:

```
⏱️ TIMESTAMPS:
00:00 - Introduction to Claude Code hooks and their potential
01:15 - Understanding hook events and when they trigger
02:22 - Why this solution matters for long running agentic tasks
03:00 - Setting up your first hook in Claude Code
```

**Poor Timestamps** ❌:

```
0:00 Intro
5:00 Main content
15:00 Outro
```

**Extract from subtitles**: Use the actual content to create descriptive, valuable labels

---

### Hashtag Strategy

**GOOD Hashtag Selection** ✅:

```
#claudecode #n8n #agenticai
```

- Video-specific: #claudecode (main topic)
- Industry-specific: #n8n (automation niche)
- Broad appeal: #agenticai (wider AI audience)

**BAD Hashtag Selection** ❌:

```
#tutorial #video #howto
```

- Too generic, doesn't reflect actual content
- No specificity for targeting right audience

---

## Quality Validation

Before reporting completion, verify:

- [ ] SEO paragraph is 150-200 words
- [ ] First 150 characters are compelling (mobile test)
- [ ] Primary keyword in first 25 words (if search-focused)
- [ ] Links section organized with emoji headers
- [ ] Timestamps extracted from subtitle file
- [ ] Timestamp labels are descriptive (not generic)
- [ ] Exactly 3 hashtags following the strategy
- [ ] Total character count under 5000
- [ ] No keyword stuffing
- [ ] Mobile-friendly formatting with proper spacing
- [ ] Output file created successfully

**If any validation fails**: Revise the relevant section before completion.

---

## Error Handling

### No Subtitle File Found

```
ERROR: "No subtitle file found in content/[project-name]/references/
Please add a .srt or .vtt subtitle file to extract timestamps."
```

### Multiple Projects, No Specification

```
Available projects:
1. project-name-1
2. project-name-2

Please specify which project: /yt.description project-name-1
```

### Missing Analysis File (Strong Warning)

```
⚠️ WARNING: "No analysis.md found for this project!

The analysis file is CRITICAL for generating an optimized description. Without it:
- No keyword optimization (primary, secondary, long-tail)
- No content vibe/tone guidance
- No target audience context
- Generic hashtags without strategic focus

STRONGLY RECOMMENDED: Run /yt.analyze first, then return to /yt.description

Proceeding with limited optimization based on available content..."
```

---

## Example Output

### Sample Description (Based on your provided example):

```
Discover how to supercharge your Claude Code workflows by integrating custom hooks with N8N automation. Learn to receive instant Telegram notifications when your AI agent completes tasks or requires approval, perfect for long-running agentic coding processes. This comprehensive tutorial covers setting up Claude Code hooks, creating Python scripts, configuring N8N workflows, and integrating Telegram bots for real-time updates on any device.

🎁 Get Hostinger VPS (Black Friday Deal):
https://hostinger.com/leon
Coupon Code: LEON (Additional 10% off)

🔍 Try N8N Cloud (Free Trial):
https://n8n.partnerlinks.io/f7f19w3vrhin

🎙️ Voice to Text Software (Wispr Flow):
https://wisprflow.ai/r?LEON114

📚 Claude Code Hooks Documentation:
https://docs.claude.com/en/docs/claude-code/hooks-guide

📺 Complete N8N Masterclass:
https://youtu.be/CfD17vBCPEU

💰 SUPPORT THE CHANNEL:
☕ Buy me a coffee: https://www.buymeacoffee.com/leonvanzyl
💵 PayPal: https://www.paypal.com/ncp/payment/EKRQ8QSGV6CWW

🔗 CONNECT:
📺 Subscribe for weekly AI automation tutorials
🐦 Follow on Twitter: https://x.com/leonvz

⏱️ TIMESTAMPS:
00:00 - Introduction to Claude Code hooks and their potential
01:15 - Understanding hook events and when they trigger
02:22 - Why this solution matters for long running agentic tasks
03:00 - Setting up your first hook in Claude Code
04:33 - Creating Python scripts for hook commands
06:26 - Using Claude Code to debug hook inputs
08:33 - Extracting the agents last message from transcripts
11:31 - Setting up N8N in the cloud with Hostinger
14:31 - Creating your first N8N workflow and Telegram bot
16:46 - Configuring webhook integration between Claude Code and N8N
20:00 - Testing the complete notification system
22:22 - Adding notification hooks for approval requests

#claudecode #n8n #agenticai
```

**Character Count**: 1,847 / 5000

**Hashtag Breakdown**:

- #claudecode - Video-specific (main topic of the tutorial)
- #n8n - Industry-specific (automation platform niche)
- #agenticai - Broad appeal (wider AI/automation audience)

---

## Context

$ARGUMENTS
