---
description: Generate engaging hook and intro scripts based on video analysis
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

---

## Goal

Create multiple hook and intro script options that:
- Capture attention in the first 3-5 seconds
- Match the video's tone and target audience
- Create curiosity or urgency to keep watching
- Smoothly transition into the main content
- Align with the analysis insights and competitive research

The output provides producers/creators with ready-to-use scripts they can perform on camera.

---

## Operating Constraints

**ANALYSIS REQUIRED**: This command requires an existing analysis.md file. If user hasn't run `/yt.analyze` yet, prompt them to do so first.

**MULTIPLE OPTIONS**: Generate at least 4 different hook approaches to give creators variety.

**SCRIPT-READY**: Output should be performance-ready, not just concepts. Include:
- Exact wording to say on camera
- Approximate duration
- Delivery notes where helpful
- Visual suggestions

**AUDIENCE ALIGNMENT**: Hook must match the audience sophistication level and content vibe from analysis.

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
If user provides context like: "make the hook more casual" or "focus on the transformation"
- Use the most recent project (or prompt to specify)
- Apply their directive to hook generation

---

## Execution Steps

### Step 1: Load Analysis Context

1. **Locate analysis file**:
   ```
   ANALYSIS_FILE = youtube/content/[project-name]/analysis.md
   ```

2. **Read and extract key information**:
   - Video topic and main message
   - Target audience (demographics, pain points, goals)
   - Content vibe (tone, energy, style)
   - Hook opportunities identified in analysis
   - Unique value proposition
   - Primary keywords
   - Competitive insights (what hooks worked for others)

3. **If analysis file not found**:
   ```
   ERROR: "No analysis found for '[project-name]'. Please run /yt.analyze first."
   ```

---

### Step 2: Hook Strategy Development

Based on analysis, determine hook approaches that will work best:

#### Hook Type Selection Criteria

**Problem/Pain Point Hook** - Use when:
- Analysis shows clear pain point in target audience
- Video solves a specific problem
- Audience is problem-aware

**Bold Statement/Claim Hook** - Use when:
- Video presents surprising insight
- You have credibility or proof
- Content challenges conventional thinking

**Story/Scenario Hook** - Use when:
- Content vibe is conversational/casual
- Emotional connection is important
- Relatability drives engagement

**Question/Challenge Hook** - Use when:
- Audience needs to self-identify with problem
- Creating self-reflection increases engagement
- Topic involves decision-making

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
- [ ] Align with content vibe from analysis
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
- What makes this approach unique (from analysis UVP)
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

1. **Load template**: Read `youtube/.youtube/templates/hook-template.md`

2. **Fill template** with:
   - All 4+ hook variations with full scripts
   - Complete intro script
   - Recommended combined version
   - Visual suggestions for each
   - Delivery notes
   - Testing recommendations

3. **Write to output file**: `youtube/content/[project-name]/hook.md`

4. **Update memory**: Add hook data to memory JSON:
   ```json
   {
     ...existing data,
     "hook_created": "[date]",
     "hook_count": 4,
     "recommended_hook": "[hook number]"
   }
   ```

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
   Review and select your preferred hook, then:
   • Run /yt.titles to generate title variations
   • Run /yt.description to create SEO description
   • Run /yt.tags to generate optimized tags
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

From analysis vibe, adjust:

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
- [ ] Hooks align with analysis target audience
- [ ] Hooks match content vibe from analysis
- [ ] Complete hook+intro version provided
- [ ] No generic placeholders remain
- [ ] Output file created successfully

**If any validation fails**: Revise the relevant section before completion.

---

## Error Handling

### No Analysis Found
```
ERROR: "No analysis found. Please run /yt.analyze first to generate the
required analysis for this project."
```

### Multiple Projects, No Specification
```
Available projects:
1. project-name-1
2. project-name-2
3. project-name-3

Please specify which project: /yt.hook project-name-1
```

### Analysis Incomplete
If analysis is missing key information:
```
WARN: "Analysis is incomplete. Generating hooks with available information,
but results may be less targeted. Consider re-running /yt.analyze with more detail."
```

---

## Examples

### Example Analysis Context:
```
Topic: Claude Code automation for developers
Target Audience: Intermediate developers, frustrated with repetitive tasks
Content Vibe: Educational but enthusiastic, professional but approachable
Pain Point: Wasting hours on boilerplate code
Unique Value: Showing 5 specific real-world examples
```

### Generated Hook Example (Problem/Pain Point):

**Opening Line**:
> "I spent 15 hours last week writing the same API endpoints over and over."

**Full Script** (23 seconds):
```
I spent 15 hours last week writing the same API endpoints over and over.
Create, read, update, delete – same pattern, different models. Then I
discovered Claude Code could do this in minutes. Not just templates,
actual intelligent automation that understands your codebase. In the
next 12 minutes, I'm showing you 5 examples that will save you hours
every single week.
```

**Why This Works**:
- Specific time waste (15 hours) creates immediate pain recognition
- Lists familiar pattern (CRUD) for developer audience
- Contrasts old way vs new way
- Promises concrete value (5 examples, hours saved)

---

## Context

$ARGUMENTS
