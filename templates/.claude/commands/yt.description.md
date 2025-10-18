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

Create a SEO-optimized video description following this specific structure (EXACTLY in this order):

1. **Links section** - All links at the TOP in single-line format:
   - Sponsors (if applicable)
   - Affiliates (WisprFlow, n8n)
   - Resources mentioned in video
   - Support links (Buy me a coffee, PayPal)
2. **SEO paragraph** (MAXIMUM 200 words) - Hook viewers and incorporate keywords naturally
3. **Timestamps** - Extracted from subtitle track with SEO-optimized labels (MAX 5 words each)
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

**CRITICAL FILES REQUIRED**:
- **analysis.md**: Drives ALL SEO strategy (keywords, audience, vibe)
- **subtitle file (.srt or .vtt)**: Used for BOTH resource extraction AND timestamps

1. **Locate required files**:

   ```
   ANALYSIS_FILE = content/[project-name]/analysis.md (CRITICAL - drives SEO strategy)
   SUBTITLE_FILE = content/[project-name]/references/*.srt or *.vtt (CRITICAL - used for resource extraction + timestamps)
   TITLES_FILE = content/[project-name]/titles.md (optional - if exists)
   HOOK_FILE = content/[project-name]/hook.md (optional - if exists)
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

3. **Verify and read subtitle track (CRITICAL - used for both resource extraction AND timestamps)**:

   - Search in `content/[project-name]/references/` for .srt or .vtt files
   - If not found: ERROR: "No subtitle file found in references folder. Please add a .srt or .vtt file with timestamps."

   **Parse subtitle content**:

   - Extract timestamp entries (format: `00:00:00,000 --> 00:00:05,000`)
   - **Read ALL text content from the entire transcript** (this is the complete video dialogue)
   - Store the complete transcript text for resource extraction (Step 2)
   - Identify major topic changes and key discussion points
   - Note important moments and transitions
   - This data will be used for: 1) Extracting resource mentions, 2) Generating timestamps

4. **Load supplementary context** (if available):

   **From Titles** (if exists):

   - Chosen or recommended title (ensures consistency)
   - Title strategy (browse vs search focus)

   **From Hook** (if exists):

   - Opening value propositions
   - Key engagement angles

---

### Step 2: Extract Resource Mentions from Transcript

**CRITICAL**: This step analyzes the subtitle/transcript content to identify external resources mentioned in the video.

**Data Source**: Complete transcript text from subtitle file (loaded in Step 1)

**Process**:

1. **Analyze the entire transcript** for mentions of:

   - **Documentation**: "OpenAI docs", "Claude Code documentation", "React docs", "API reference", etc.
   - **Tools/Services**: "GitHub Copilot", "Cursor IDE", "n8n", "Make.com", etc.
   - **GitHub Repositories**: Any mention of repos, code samples, or GitHub projects
   - **Other Videos**: References to other tutorials or video content
   - **Official Websites**: Product sites, service pages, platform homepages
   - **Courses/Tutorials**: External learning resources
   - **Articles/Blog Posts**: Written content referenced
   - **Any other external resources** mentioned as "I'll link to X in the description"

2. **Extract context for each mention**:

   - What is the resource? (e.g., "OpenAI Chat Completions API documentation")
   - Why is it mentioned? (e.g., "for reference on how to structure prompts")
   - How is it described in the video? (use this for the link description)

3. **Create structured resource list**:

   ```
   For each resource found:
   - Resource Name: [Clear, descriptive name]
   - Description: [Casual, welcoming description from video context]
   - Suitable Emoji: [Choose appropriate emoji - 📚 for docs, 🔧 for tools, 🎥 for videos, etc.]
   - URL Placeholder: [URL]
   ```

4. **Quality Guidelines**:

   - Only include resources that are clearly referenced as "check out", "I'll link", "see the docs", etc.
   - Don't include every passing mention - focus on resources the viewer would want to access
   - Use casual, welcoming language for descriptions
   - Choose emojis that fit the resource type
   - If no external resources are mentioned: Return empty list (no error)

**Output**: A list of resource entries ready for the links section, each needing only the URL to be filled in.

**Example Output**:

```
Resources extracted from transcript:
1. 📚 OpenAI Chat Completions API Documentation: [URL]
2. 🔧 Claude Code Official Marketplace: [URL]
3. 🎥 Previous tutorial on Claude Code Hooks: [URL]
4. ☕ Anthropic's Model Context Protocol Docs: [URL]
```

---

### Step 3: Generate Links Section (FIRST in Description)

**CRITICAL**: Links go at the TOP of the description, before the SEO paragraph

**Structure**: Single-line format with emoji + description + URL

**CRITICAL PRIORITY ORDER**: Sponsors → Affiliates → Resources (from Step 2) → Support Links

```
[IF SPONSOR LINKS PROVIDED BY USER - ALWAYS PUT THESE FIRST]:
🎁 [Compelling CTA for sponsor product]: [URL]
Coupon Code: [CODE] (if applicable)

💬 Want my full voice to text software? Check out WisprFlow: https://wisprflow.ai/r?LEON114
🚀 Start building with n8n (use my link to support my channel ❤️): https://n8n.partnerlinks.io/f7f19w3vrhin

[INSERT RESOURCES EXTRACTED FROM STEP 2 HERE]:
[emoji] [Resource description from transcript analysis]: [URL]
[emoji] [Resource description from transcript analysis]: [URL]
(one line per resource)

☕ Buy me a coffee: https://www.buymeacoffee.com/leonvanzyl
💵 Donate using PayPal: https://www.paypal.com/ncp/payment/EKRQ8QSGV6CWW
```

**Guidelines**:

- **Format**: Everything on single lines (emoji + description + URL all on one line)
- **Priority order**: 1) Sponsors (ALWAYS FIRST), 2) Affiliates (WisprFlow, n8n), 3) Resources (extracted from transcript in Step 2), 4) Support links (coffee, PayPal)
- **ALWAYS include WisprFlow and n8n affiliate links** (these are standard)
- **Dynamically include resources** extracted from Step 2 with `[URL]` placeholder for manual filling
- **ALWAYS include Buy me a coffee and PayPal links at the end** of the links section
- Use welcoming, casual descriptions with suitable emojis
- Sponsor links are highest priority and go at the very top
- Resources come from Step 2 transcript analysis - these will have `[URL]` placeholders
- Keep descriptions concise but compelling

**Resource Link Format** (from Step 2):

Each extracted resource should be formatted as:
```
[emoji] [Welcoming description based on video context]: [URL]
```

**Examples**:
- `📚 Claude Code Hooks Documentation: [URL]`
- `🔧 Check out Anthropic's official Claude Code marketplace: [URL]`
- `🎥 My previous tutorial on setting up n8n workflows: [URL]`
- `☕ OpenAI API Reference for Chat Completions: [URL]`

---

### Step 4: Generate SEO Opening Paragraph (Analysis-Driven)

**Target**: MAXIMUM 200 words that hook viewers and optimize for search

**IMPORTANT**: This comes AFTER the links section in the final description

**Data Source**: Use analysis.md as the foundation for all content decisions

**Requirements**:

1. **First 2-3 sentences** (visible before "Show More"):

   - Start with the **primary keyword** from analysis.md (ideally in first 25 words)
   - Hook based on **value propositions** identified in analysis
   - Match the **content vibe** (educational, entertaining, professional, etc.)
   - Create interest and urgency using **key themes** from analysis

2. **Body** (remaining content up to MAXIMUM 200 words):
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

### Step 5: Extract and Generate Timestamps

**Process**:

1. **Parse subtitle file** (.srt or .vtt format)
2. **Identify major topic changes** by analyzing:

   - Content transitions in subtitle text
   - Key phrases and discussion points
   - Natural section breaks
   - Important moments worth highlighting

3. **Create SEO-optimized labels** for each timestamp:

   - **MAXIMUM 5 words per timestamp** (strict limit)
   - **SEO-optimized using keywords from analysis.md**
   - Use primary and secondary keywords naturally in labels
   - Focus on value/topic, not generic descriptions
   - Make it scannable and useful for viewers
   - Extract actual keywords from subtitle content
   - Example: "Building n8n AI Agent" ✅ (5 words, includes keywords)
   - Example: "Setting up and configuring the n8n AI automation agent workflow" ❌ (11 words, too long)

4. **Format timestamps**:

```
⏱️ TIMESTAMPS:
00:00 [SEO-Optimized Label - max 5 words]
01:15 [SEO-Optimized Label - max 5 words]
02:22 [SEO-Optimized Label - max 5 words]
03:00 [SEO-Optimized Label - max 5 words]
[Continue for all major points...]
```

**Quality Guidelines**:

- Aim for 8-15 timestamps for a 15-25 minute video
- Each timestamp should represent a meaningful topic change
- **Each label MUST be 5 words or less**
- **Labels MUST incorporate keywords from analysis.md**
- Labels should be specific enough to help viewers navigate
- Use the actual content from subtitles to inform labels

---

### Step 6: Generate Three Strategic Hashtags (Analysis-Driven)

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

### Step 7: Assemble Complete Description

**Final Structure** (EXACTLY in this order):

```
[Links Section - Single-line format]
  - Priority order: 1) Sponsors, 2) Affiliates (WisprFlow, n8n), 3) Resources, 4) Support (coffee, PayPal)

[SEO Opening Paragraph - MAXIMUM 200 words]

[Timestamps Section with ⏱️ emoji header - each label max 5 words]

[Three Strategic Hashtags]
```

**Final Checks**:

1. **Structure Order**: Links → SEO Paragraph → Timestamps → Hashtags
2. **Links Format**: Single-line entries (emoji + description + URL on one line)
3. **Links Priority Order**: Sponsors FIRST, then affiliates (WisprFlow, n8n), then resources, then support links (coffee, PayPal)
4. **Links**: WisprFlow and n8n affiliate links included, plus Buy me a coffee and PayPal at end of links section
5. **SEO Paragraph**: Maximum 200 words (strict limit)
6. First 150 characters are compelling (mobile test)
7. Keywords appear naturally (no stuffing)
8. All links are properly formatted as single-line entries
9. **Timestamps**: Each label is 5 words or less, SEO-optimized with keywords
10. Timestamps are accurate and descriptive
11. Three hashtags follow the strategy
12. Total character count under 5000

---

### Step 8: Generate Output Document

1. **Load template**: Read `.youtube/templates/description-template.md`

2. **Fill template** with:

   - Complete formatted description (copy-ready)
   - SEO opening paragraph
   - Links section
   - Timestamps
   - Hashtags
   - Character count stats

3. **Write to output file**: `content/[project-name]/description.md`

4. **Update project state**: Update `content/.project-state.json` to track command completion:
   ```json
   {
     "currentProject": "[project-name]",
     "lastUpdated": "[ISO timestamp]",
     "projects": {
       "[project-name]": {
         "created": "[ISO timestamp]",
         "topic": "[original topic]",
         "completedCommands": [...existing, "description"],
         "lastCommand": "description"
       }
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
   - Number of timestamps generated
   - Number of resource links extracted from transcript (with `[URL]` placeholders to fill)
   - Hashtags used

4. **Resource Links Notice** (if any were extracted):
   ```
   📋 NOTE: [X] resource links were extracted from your video transcript.
   These have [URL] placeholders - please add the actual URLs before uploading:
   - [List each resource with its description]
   ```

5. **Preview**: Show the complete copy-ready description

6. **Next Steps**:
   ```
   🔗 IMPORTANT: Fill in [URL] placeholders for resource links
   ✅ Copy description to YouTube Studio
   📋 Verify all links are working
   ⏱️ Confirm timestamps match video
   🏷️ Consider running /yt.tags for optimized video tags
   ```

---

## Description Writing Guidelines

### SEO Opening Paragraph Best Practices (Maximum 200 Words)

**IMPORTANT**: This comes AFTER the links section in the final description

**GOOD Opening** ✅:

```
Discover how to supercharge your Claude Code workflows by integrating custom
hooks with N8N automation. Learn to receive instant Telegram notifications
when your AI agent completes tasks or requires approval, perfect for
long-running agentic coding processes. This comprehensive tutorial covers
setting up Claude Code hooks, creating Python scripts, configuring N8N
workflows, and integrating Telegram bots for real-time updates on any device.
```
(~75 words - well under the 200-word maximum)

**BAD Opening** ❌:

```
Hey everyone! In today's video, we're going to be talking about something
really cool about Claude Code and N8N that I think you'll find interesting...
```

**Key Differences**:

- Good: Immediate value, specific outcomes, natural keywords, under 200 words
- Bad: Generic greeting, vague promise, no keywords, wastes character count

---

### Timestamp Guidelines

**Effective Timestamps** ✅ (Max 5 words, SEO-optimized):

```
⏱️ TIMESTAMPS:
00:00 Claude Code Hooks Introduction
01:15 Understanding Hook Events
02:22 Long-Running Agentic Task Solution
03:00 Setting Up First Hook
04:33 Creating Python Hook Scripts
```

**Poor Timestamps** ❌:

```
0:00 Intro (too generic, no keywords)
5:00 Main content (no value, not descriptive)
15:00 Setting up and configuring the complete n8n automation workflow system (11 words - WAY too long)
```

**Key Principles**:
- **Maximum 5 words per label** (strict limit)
- **Include keywords from analysis.md** (SEO optimization)
- Descriptive and valuable for navigation
- Extract from actual subtitle content

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

### Structure Order ✅
- [ ] Links section at the TOP
- [ ] SEO paragraph AFTER links
- [ ] Timestamps AFTER description
- [ ] Hashtags at the BOTTOM

### Links Section ✅
- [ ] **Single-line format**: emoji + description + URL all on one line
- [ ] **Priority order correct**: Sponsors FIRST, then affiliates (WisprFlow, n8n), then resources, then support links (coffee, PayPal)
- [ ] WisprFlow affiliate link included
- [ ] n8n affiliate link included
- [ ] Buy me a coffee link included at end of links section
- [ ] PayPal donation link included at end of links section
- [ ] All links are properly formatted as single-line entries
- [ ] Suitable emojis used for each link

### SEO Paragraph ✅
- [ ] Maximum 200 words (STRICT limit - not 150-200, must be max 200)
- [ ] First 150 characters are compelling (mobile test)
- [ ] Primary keyword in first 25 words (if search-focused)
- [ ] No keyword stuffing
- [ ] Natural keyword integration

### Timestamps ✅
- [ ] Timestamps extracted from subtitle file
- [ ] **Each timestamp is MAXIMUM 5 words** (strict limit)
- [ ] **Timestamps are SEO-optimized using analysis.md keywords**
- [ ] Labels are descriptive (not generic "intro", "main content")
- [ ] Keywords naturally incorporated in timestamp labels

### Hashtags ✅
- [ ] Exactly 3 hashtags following the strategy
- [ ] Video-specific + Industry-specific + Broad appeal

### Overall ✅
- [ ] Total character count under 5000
- [ ] Mobile-friendly formatting with proper spacing
- [ ] Follows exact same structure as Nate's format
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

### Sample Description (Single-Line Link Format with Dynamic Resource Extraction):

```
🎁 Get Hostinger VPS (Black Friday Deal): https://hostinger.com/leon
Coupon Code: LEON (Additional 10% off)

💬 Want my full voice to text software? Check out WisprFlow: https://wisprflow.ai/r?LEON114
🚀 Start building with n8n (use my link to support my channel ❤️): https://n8n.partnerlinks.io/f7f19w3vrhin
📚 Claude Code Hooks Documentation: [URL]
🔧 Anthropic's Official Claude Code Marketplace: [URL]
🎥 My previous tutorial on setting up n8n webhooks: [URL]
☕ Buy me a coffee: https://www.buymeacoffee.com/leonvanzyl
💵 Donate using PayPal: https://www.paypal.com/ncp/payment/EKRQ8QSGV6CWW

Discover how to supercharge your Claude Code workflows by integrating custom hooks with N8N automation. Learn to receive instant Telegram notifications when your AI agent completes tasks or requires approval, perfect for long-running agentic coding processes. This comprehensive tutorial covers setting up Claude Code hooks, creating Python scripts, configuring N8N workflows, and integrating Telegram bots for real-time updates on any device.

⏱️ TIMESTAMPS:
00:00 Claude Code Hooks Introduction
01:15 Understanding Hook Events
02:22 Long-Running Agentic Task Solution
03:00 Setting Up First Hook
04:33 Creating Python Hook Scripts
06:26 Debugging Hook Inputs
08:33 Extracting Agent Message Transcripts
11:31 N8N Cloud Setup
14:31 N8N Workflow Telegram Bot
16:46 Webhook Integration Setup
20:00 Testing Notification System
22:22 Adding Approval Request Hooks

#claudecode #n8n #agenticai
```

**Character Count**: ~1,650 / 5000

**Structure Verification**:
✅ All links at top in single-line format
✅ Priority order: Sponsor, affiliates (WisprFlow/n8n), resources (3 extracted from transcript with [URL] placeholders), support (coffee, PayPal)
✅ SEO paragraph after links (under 200 words)
✅ Timestamps with max 5-word labels
✅ SEO-optimized timestamp labels using keywords
✅ Three hashtags at bottom

**Resources Extracted from Transcript**:
- 📚 Claude Code Hooks Documentation: [URL]
- 🔧 Anthropic's Official Claude Code Marketplace: [URL]
- 🎥 My previous tutorial on setting up n8n webhooks: [URL]

(User needs to fill in these [URL] placeholders before uploading)

**Hashtag Breakdown**:
- #claudecode - Video-specific (main topic of the tutorial)
- #n8n - Industry-specific (automation platform niche)
- #agenticai - Broad appeal (wider AI/automation audience)

---

## Context

$ARGUMENTS
