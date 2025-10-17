---
description: Generate engaging hook and intro scripts based on reference material
---

## User Input

```text
$ARGUMENTS
```

You **MUST** use the reference material from the project's reference folder to generate hooks and intro scripts.

---

## Goal

Create multiple hook and intro script options that:
- Capture attention in the first 3-5 seconds
- Match the video's intended tone and target audience
- Create curiosity or urgency to keep watching
- Smoothly transition into the main content
- Align with the reference material insights

The output provides producers/creators with ready-to-use scripts they can perform on camera **before** creating the video.

---

## Operating Constraints

**REFERENCE MATERIAL REQUIRED**: Project must have reference materials in `content/[project-name]/references/` folder (created by `/yt.init`).

**PRE-VIDEO GENERATION**: This command is designed for use BEFORE video creation. The hook/intro will guide the video production.

**MULTIPLE OPTIONS**: Generate at least 4 different hook approaches to give creators variety.

**SCRIPT-READY**: Output should be performance-ready, not just concepts. Include:
- Exact wording to say on camera
- Approximate duration
- Delivery notes where helpful
- Visual suggestions

**AUDIENCE ALIGNMENT**: Infer target audience from reference material and match hook sophistication accordingly.

---

## Input Handling

### Expected Input Format

User should provide only the project name:

```
/yt.hook [project-name]
```

**Examples:**
- `/yt.hook claude-code-plugins`
- `/yt.hook react-hooks-tutorial`
- `/yt.hook nextjs-15-features`

### Parsing Arguments

1. **If arguments provided**: Use full argument string as project name
2. **If no arguments**: Check for current project in manifest
   - Look for `content/.project-state.json`
   - If manifest exists and has `currentProject`, use that
   - If no manifest or no current project: Ask user to provide project name
3. **Validate**: Check that project folder exists at `content/[project-name]/`

---

## Execution Steps

### Step 0: Load Reference Materials from Project Folder

Before analyzing content, gather all reference materials from the project folder:

1. **Determine project name**:
   - **If $ARGUMENTS is not empty**:
     - Trim whitespace from $ARGUMENTS
     - Convert to kebab-case if needed
     - Store as `[project-name]`
   - **If $ARGUMENTS is empty**:
     - Check if `content/.project-state.json` exists using Read tool
     - If file exists:
       - Parse JSON to get `currentProject` field
       - If `currentProject` exists: Use it as `[project-name]`
       - If `currentProject` is null/empty: Show error (no project specified)
     - If file doesn't exist: Show error (no project specified)
   - **Report which project is being used**:
     ```
     Using project: [project-name]
     ```

2. **Validate project structure**:
   - Check if `content/[project-name]/` exists
   - Check if `content/[project-name]/references/` exists
   - If project folder doesn't exist: Show error (see Error Handling section)
   - If reference folder doesn't exist: Show error (see Error Handling section)

3. **Scan reference folder for all files**:
   - Use Glob tool to find all files: `content/[project-name]/references/**/*`
   - Filter for readable file types:
     - Text files: `.txt`, `.md`, `.markdown`
     - Documentation: `.pdf` (if readable)
     - Subtitles: `.srt`, `.vtt`, `.sbv`
     - Code/Config: `.json`, `.yaml`, `.yml`
     - Web content: `.html`, `.htm`
   - Ignore binary files, images, videos unless they contain extractable text

4. **Read all reference files**:
   - Use Read tool to load content from each file
   - For each file, note:
     - Filename
     - File type
     - Content length
     - Key topics (quick scan)

5. **Combine reference materials**:
   - Concatenate all file contents
   - Add file separators for clarity:
     ```
     === FILE: [filename] ===
     [file content]

     ```
   - Store combined content as `$REFERENCE_MATERIAL`

6. **Validate reference material quality**:
   - Check total character count
   - If less than 100 characters: Show warning about insufficient material
   - If no files found: Show error (see Error Handling section)
   - Report to user:
     - Number of files found
     - Total content size
     - File types detected

7. **Summary output** (inform user):
   ```
   ✓ Loaded reference materials from content/[project-name]/references/

   Files processed:
   • [filename1] ([size])
   • [filename2] ([size])
   • [filename3] ([size])

   Total: [X] files, [Y] characters

   Now analyzing reference materials to generate hooks...
   ```

**CRITICAL**: If this step fails, DO NOT proceed to hook generation. The reference material is essential for creating relevant, accurate hooks.

---

### Step 1: Parse and Extract Key Information

From the loaded reference material (`$REFERENCE_MATERIAL` from Step 0), extract:

**Topic/Product Information**:
- What is being announced/taught/demonstrated?
- What are the main features or capabilities?
- What problem does it solve?

**Target Audience** (infer if not explicit):
- Who would benefit from this?
- What's their likely skill level?
- What pain points do they have?

**Unique Value Proposition**:
- What makes this different/special?
- Why should someone care?
- What transformation/outcome is promised?

**Content Vibe** (infer from reference material tone):
- Professional/Technical vs Casual/Conversational
- Educational vs Entertaining vs Inspirational
- Energy level (high-energy vs measured/calm)

**Key Benefits/Features** (for content preview):
- List 3-5 main points to cover in the video
- Identify the most compelling hook opportunities

---

### Step 2: Hook Strategy Development

Based on reference material analysis, determine hook approaches that will work best:

#### Hook Type Selection Criteria

**Problem/Pain Point Hook** - Use when:
- Reference material describes a problem being solved
- Clear pain point exists for target audience
- Problem is familiar/relatable

**Bold Statement/Claim Hook** - Use when:
- Reference material presents surprising capability
- Product/feature challenges conventional approach
- There's a strong differentiator

**Story/Scenario Hook** - Use when:
- Reference material includes use cases or examples
- Relatability will drive engagement
- Content suits conversational tone

**Question/Challenge Hook** - Use when:
- Audience needs to self-identify with problem
- Topic involves decision-making
- Creating self-reflection increases engagement

**Always Generate**: At least one option of each type (4 hooks minimum)

---

### Step 3: Generate Hook Scripts

For EACH hook type, create:

#### Hook Structure (15-30 seconds)

**Opening Line** (3-5 seconds):
- Most critical sentence
- Must create pattern interrupt
- Should be memorable
- Can be provocative or intriguing

**Development** (10-20 seconds):
- Expand on opening
- Build curiosity or urgency
- Hint at value/solution
- Avoid revealing the answer

**Bridge** (3-5 seconds):
- Natural transition to intro
- Reinforce why they should keep watching
- Set stage for value delivery

#### Hook Quality Criteria

Each hook must:
- [ ] Match target audience language and sophistication
- [ ] Align with inferred content vibe
- [ ] Create curiosity gap or emotional pull
- [ ] Be achievable within 30 seconds
- [ ] Flow naturally into intro
- [ ] NOT give away the main content

---

### Step 4: Generate Intro Script

Create a comprehensive intro that follows the hook:

#### Intro Components

**Transition from Hook** (5-10 seconds):
```
- Acknowledge the hook statement/question
- Introduce yourself/channel (brief)
- Establish credibility if needed
```

**Value Proposition** (10-15 seconds):
```
- Clear statement of what viewers will learn/gain
- Why this matters (connect to pain point or goal)
- What makes this approach unique (from reference material)
```

**Content Preview** (10-20 seconds):
```
- List 3-5 key points/sections
- Create anticipation for each
- Promise outcome/transformation
- Encourage watching to the end (without begging)
```

**Recommended Total Intro Duration**: 30-45 seconds after hook

---

### Step 5: Visual and Delivery Suggestions

For each hook + intro combination, provide:

**Visual Suggestions**:
- B-roll concepts that support the message
- Graphics or text overlays
- Location/setting recommendations
- Energy level (high-energy vs calm presence)

**Delivery Notes**:
- Pacing guidance (fast/moderate/slow)
- Emphasis words or phrases
- Tone modulation points
- Where to pause for effect

---

### Step 6: Generate Output Document

1. **Determine output path**: `content/[project-name]/hook.md`

2. **Create hook.md** with:
   - **Reference Material Summary**: Brief recap of what was provided
   - **Target Audience Identified**: Who this is for
   - **Content Strategy**: Recommended approach and tone
   - **Hook Option 1: Problem/Pain Point**
     - Full script
     - Duration estimate
     - Why this works
     - Delivery notes
     - Visual suggestions
   - **Hook Option 2: Bold Statement/Claim**
     - [Same structure as Option 1]
   - **Hook Option 3: Story/Scenario**
     - [Same structure as Option 1]
   - **Hook Option 4: Question/Challenge**
     - [Same structure as Option 1]
   - **Intro Script** (works with any hook)
     - Transition section
     - Value proposition
     - Content preview
     - Duration estimate
   - **Recommended Combination**
     - Which hook works best for this content
     - Complete hook + intro script
     - Total duration
   - **Testing Recommendations**
     - How to adapt for different platforms
     - A/B testing suggestions

3. **Create directory if needed**: Ensure `content/[project-name]/` exists

---

### Step 7: Report Completion

Provide user with:

1. **Success Message**: "Hook and intro scripts generated!"

2. **Output Location**: Full path to hook.md

3. **Quick Summary**:
   - Number of hook options created
   - Recommended hook type for this content
   - Total script duration estimate

4. **Preview**: Show the recommended hook opening line

5. **Next Steps**:
   ```
   Use these scripts when creating your video. After your video is complete:
   • Get transcript from the finished video
   • Run /yt.analyze [project-name] [transcript] to analyze the video
   • Then generate titles, tags, and description from the analysis
   ```

---

## Hook Writing Guidelines

### The First 3 Seconds Rule

The opening line must create immediate impact:
- **Bad**: "Hey everyone, today we're going to talk about..."
- **Good**: "I wasted 200 hours before learning this one thing..."

### Avoid Common Mistakes

**DON'T**:
- Ask for likes/subscribes in the hook
- Spend time introducing yourself
- Use generic openings ("in this video...")
- Give away the main content
- Use clickbait that doesn't match content

**DO**:
- Start with immediate value or intrigue
- Use specific numbers or claims
- Create emotional response
- Match the thumbnail concept
- Set proper expectations

### Audience-Specific Language

**Beginners**:
- Avoid jargon
- Acknowledge their starting point
- Emphasize simplicity and accessibility
- Use encouraging language

**Intermediate/Advanced**:
- Use industry terminology naturally
- Respect their existing knowledge
- Focus on efficiency or advanced insights
- Skip basic explanations

### Content Vibe Alignment

Adjust based on reference material tone:

**Educational/Professional**:
- Clear, direct language
- Credibility markers
- Logical flow
- Data or research references

**Entertaining/Casual**:
- Conversational tone
- Personality and humor
- Relatable situations
- Energy and enthusiasm

**Inspirational**:
- Emotional resonance
- Transformation language
- Personal connection
- Vision of possibility

---

## Hook Type Templates

### Type 1: Problem/Pain Point

**Structure**:
1. State the frustrating problem (specific)
2. Amplify the pain (why it matters)
3. Promise the solution exists
4. Tease what's coming

**Example Framework**:
```
"[Specific painful situation]. You've tried [common failed attempts],
but [problem persists]. What if I told you [surprising solution exists]?
In the next [X] minutes, I'm going to show you exactly [outcome]."
```

---

### Type 2: Bold Statement/Claim

**Structure**:
1. Make surprising claim
2. Add credibility or proof hint
3. Challenge current belief
4. Promise to prove it

**Example Framework**:
```
"[Surprising claim that contradicts common belief]. I know this sounds
[crazy/impossible/controversial], but I've [evidence/experience].
Let me show you exactly why [claim is true] and how you can [benefit]."
```

---

### Type 3: Story/Scenario

**Structure**:
1. Start mid-story (in medias res)
2. Create relatable moment
3. Connect to larger lesson
4. Promise to reveal the journey

**Example Framework**:
```
"[Moment of high tension or relevance]. This happened to me [timeframe],
and it completely changed how I think about [topic]. By the end of this video,
you'll understand [key insight] and be able to [outcome]."
```

---

### Type 4: Question/Challenge

**Structure**:
1. Ask provocative question
2. Present common wrong answer
3. Hint at surprising truth
4. Promise to reveal answer

**Example Framework**:
```
"[Thought-provoking question]? Most people think [common belief], but
that's actually why they struggle with [problem]. The real answer is
[intriguing hint], and I'm going to prove it to you right now."
```

---

## Quality Validation

Before reporting completion, verify:

- [ ] At least 4 different hook types generated
- [ ] Each hook has complete script (not just outline)
- [ ] Hook duration estimates provided
- [ ] Intro script includes all components
- [ ] Visual suggestions provided
- [ ] Delivery notes included
- [ ] Hooks align with identified target audience
- [ ] Hooks match inferred content vibe
- [ ] Complete hook+intro version provided
- [ ] No generic placeholders remain
- [ ] Output file created successfully

**If any validation fails**: Revise the relevant section before completion.

---

## Error Handling

### No Arguments Provided and No Current Project
```
ERROR: No project specified and no current project found.

Usage: /yt.hook [project-name]

Or run without arguments to use the current project (set by /yt.init).

The command will automatically load reference materials from:
content/[project-name]/references/

Examples:
  /yt.hook claude-code-plugins
  /yt.hook react-hooks-tutorial
  /yt.hook    (uses current project from last /yt.init)

If you haven't created a project yet, run:
  /yt.init [video topic description]

This will create the project structure and set it as your current project.
```

### Project Folder Doesn't Exist
```
ERROR: Project folder not found.

Looking for: content/[project-name]/

The project "[project-name]" does not exist. Did you run the init command first?

To create this project:
  /yt.init [video topic description]

To see existing projects, check the content/ folder.
```

### Reference Folder Doesn't Exist
```
ERROR: Reference folder not found.

Looking for: content/[project-name]/references/

The project folder exists, but the references subfolder is missing.
This usually means the project structure is incomplete.

Please create the references folder and add your materials:
  content/[project-name]/references/

Or reinitialize the project:
  /yt.init [video topic description]
```

### No Reference Files Found
```
ERROR: No reference materials found in content/[project-name]/references/

The references folder is empty. Please add reference materials before generating hooks.

Supported file types:
• Text files: .txt, .md, .markdown
• Documentation: .pdf
• Subtitles: .srt, .vtt, .sbv
• Code/Config: .json, .yaml, .yml
• Web content: .html, .htm

Copy your reference materials (product docs, announcements, guides, etc.) to:
content/[project-name]/references/

Then run this command again.
```

### Insufficient Reference Material
If reference material is too brief (less than 100 characters):
```
WARN: Limited reference material found ([X] characters total).

Files found:
• [list of files with sizes]

The hook generator works best with comprehensive reference materials.
Consider adding more context:
• Product documentation
• Feature descriptions
• Target audience information
• Marketing materials
• Use cases or examples

Generating hooks with available information, but results may be more generic.

Continue anyway? (y/n)
```

---

## Example Usage

### Scenario Setup:

**Step 1: User initializes project**
```
/yt.init Claude Code plugins marketplace tutorial
```

**Step 2: User adds reference materials to `content/claude-code-plugins/references/`:**
- `product-announcement.md` - Official launch announcement
- `quick-start-guide.md` - Getting started documentation
- `features.txt` - Key features list
- `target-audience-notes.md` - Developer persona research

**Step 3: User runs hook command**
```
/yt.hook claude-code-plugins
```

### Agent Response:

```
✓ Loaded reference materials from content/claude-code-plugins/references/

Files processed:
• product-announcement.md (2,341 characters)
• quick-start-guide.md (4,128 characters)
• features.txt (892 characters)
• target-audience-notes.md (1,567 characters)

Total: 4 files, 8,928 characters

Now analyzing reference materials to generate hooks...
```

### Generated Hook Example (Problem/Pain Point):

**Opening Line**:
> "Every developer I know spends hours doing the same repetitive setup tasks over and over."

**Full Script** (26 seconds):
```
Every developer I know spends hours doing the same repetitive setup tasks
over and over. Component libraries, boilerplate code, documentation lookups—
it adds up fast. But what if your AI coding assistant could be customized
to do all of this automatically? Claude Code just launched a plugin
marketplace, and I'm about to show you how to build your first plugin in
under 10 minutes that will save you hours every week.
```

**Why This Works**:
- Identifies relatable pain (repetitive tasks)
- Validates the frustration ("adds up fast")
- Introduces surprising solution (customizable AI)
- Promises quick value (10 minutes to build, hours saved)
- Creates curiosity about plugins

---

## Context

$ARGUMENTS
