# YouTube Content Creator Workflow

An AI-powered workflow for creating optimized YouTube content, inspired by the Specify methodology. This system helps creators analyze video ideas, generate engaging hooks, create SEO-optimized metadata, and make data-driven content decisions.

---

## Overview

This workflow transforms raw video ideas into production-ready content with optimized metadata for maximum reach and engagement. It uses Claude Code commands to systematically generate:

- **Analysis**: Keyword extraction, competitive research, and audience insights
- **Hooks & Intros**: Engaging opening scripts to capture attention
- **Titles**: Multiple variations optimized for browse and search traffic
- **Descriptions**: SEO-optimized descriptions with timestamps and CTAs
- **Tags**: Strategic tag sets for discovery and suggested videos

---

## Workflow Architecture

```
PHASE 1: PRE-VIDEO (Before Recording)
┌─────────────────────────────────────────────┐
│  1. Gather Reference Material               │
│     (docs, announcements, guides)           │
└──────────────────┬──────────────────────────┘
                   ▼
              ┌────────┐
              │/yt.hook│  ← Generate hook & intro
              └────┬───┘
                   │
                   ▼
         [Create Video Using Hook]


PHASE 2: POST-VIDEO (After Recording)
┌─────────────────────────────────────────────┐
│  2. Get Transcript from Finished Video      │
└──────────────────┬──────────────────────────┘
                   ▼
          ┌──────────────┐
          │ /yt.analyze  │  ← Analyze transcript
          └───────┬──────┘
                  │
                  │ Creates: analysis.md + keywords + research
                  │
     ┌────────────┼────────────┐
     │            │            │
     ▼            ▼            ▼
┌────────┐  ┌──────────┐  ┌──────────┐
│/yt.    │  │/yt.      │  │/yt.tags  │
│titles  │  │description│  │          │
└────────┘  └──────────┘  └──────────┘
     │            │            │
     └────────────┴────────────┘
                  │
          [Ready for Upload]
```

**Key Points**:
- **PHASE 1**: `/yt.hook` runs FIRST with reference material (before video creation)
- **PHASE 2**: `/yt.analyze` runs on transcript AFTER video is created
- Titles, descriptions, and tags depend on analysis (post-video only)

---

## Quick Start

### PHASE 1: Before Creating Your Video

#### 1. Gather Reference Material

Collect documentation, announcements, or guides related to your video topic.

#### 2. Generate Hook & Intro

```
/yt.hook [project-name] [paste reference material here]
```

**Example**:
```
/yt.hook ai-features "Claude Code now supports custom plugins.
Developers can build and share extensions for shadcn/ui components,
custom slash commands, and MCP servers. Target audience: TypeScript
developers looking to automate workflows."
```

**Output**: `content/[project-name]/hook.md` with 4+ hook variations and intro scripts

#### 3. Create Your Video

Use the generated hook and intro scripts when recording your video.

---

### PHASE 2: After Creating Your Video

#### 4. Get Your Transcript

Extract the transcript from your finished video (YouTube auto-captions, manual transcription, etc.)

#### 5. Analyze Your Video

```
/yt.analyze [project-name] [paste transcript here]
```

**Example**:
```
/yt.analyze ai-features

[00:00] Hey everyone, today I'm going to show you...
[00:15] The new plugin system allows developers to...
[00:30] Let's start by creating our first plugin...
[Paste full transcript]
```

**Output**: `content/[project-name]/analysis.md` with keywords and research

#### 6. Generate Metadata

Run these commands in any order:

**Generate Title Variations**:
```
/yt.titles [project-name]
```
Creates browse-optimized, search-optimized, and hybrid titles.

**Create SEO Description**:
```
/yt.description [project-name]
```
Generates complete description with timestamps, keywords, and CTAs.

**Generate Tags**:
```
/yt.tags [project-name]
```
Creates 30-40 optimized tags balanced across competition levels.

---

## Commands Reference

### `/yt.analyze`

**Purpose**: Analyze finished video transcript to extract keywords and create strategic insights for metadata generation.

**When to Use**: PHASE 2 - After your video is created and you have a transcript

**Input**: Project name + video transcript (from YouTube auto-captions, manual transcription, etc.)

**Output**:
- Keyword analysis (primary, secondary, long-tail)
- Target audience profile
- Content vibe and tone recommendations
- Competitive video research (3-5 similar videos)
- Trending topics related to your keywords
- SEO strategy recommendations

**Web Research**: Uses WebSearch to find competitor videos and trending topics.

**Example**:
```
/yt.analyze docker-tutorial

[00:00] Hey everyone, welcome to this Docker tutorial for beginners.
[00:15] Today we're going to cover everything you need to know...
[00:30] First, let's talk about what Docker actually is...
[Paste full transcript here]
```

---

### `/yt.hook`

**Purpose**: Generate multiple hook and intro script options BEFORE creating your video.

**Requirements**: Reference material about your video topic (announcements, docs, guides)

**When to Use**: PHASE 1 - Before recording your video

**Input**: Project name + reference material

**Output**:
- 4+ hook variations (Problem/Pain, Bold Claim, Story, Question)
- Complete intro script with value proposition
- Visual and delivery suggestions
- Recommended combined version
- A/B testing strategy

**Example**:
```
/yt.hook docker-tutorial "Docker beginner guide - covers installation,
basic commands, creating Dockerfiles, and deploying web apps. Target
audience: developers new to containerization who want to learn Docker
basics quickly."
```

---

### `/yt.titles`

**Purpose**: Generate titles optimized for different traffic sources.

**Requirements**: Must run `/yt.analyze` first

**Input**: Project name (optional if only one project exists)

**Output**:
- 4+ browse traffic titles (curiosity-driven)
- 5+ search traffic titles (keyword-optimized)
- 2+ hybrid titles (balanced approach)
- Character counts for each
- Top 3 recommendations with rationale
- Thumbnail pairing suggestions

**Title Types Generated**:
- **Browse**: Curiosity gaps, bold claims, outcome promises
- **Search**: How-to, tutorial, complete guide, comparison, master class
- **Hybrid**: Balanced keyword + curiosity

**Example**:
```
/yt.titles docker-beginners-tutorial
```

---

### `/yt.description`

**Purpose**: Create comprehensive, SEO-optimized video description.

**Requirements**: Must run `/yt.analyze` first

**Input**: Project name (optional if only one project exists)

**Output**:
- Mobile-optimized opening (first 150 chars)
- Content overview with timestamps
- Key takeaways section
- Resources and links
- About section
- Multiple CTAs
- Engagement hooks
- SEO keyword integration
- Hashtags
- Complete copy-ready version

**Character Limit**: Up to 5000 characters

**Example**:
```
/yt.description docker-beginners-tutorial
```

---

### `/yt.tags`

**Purpose**: Generate strategic tag set for search and suggested video optimization.

**Requirements**: Must run `/yt.analyze` first

**Input**: Project name (optional if only one project exists)

**Output**:
- 30-40 optimized tags
- Tag distribution analysis
- Competitive tag insights
- Alternative tag strategies
- Copy-ready comma-separated format

**Tag Tiers**:
- **Priority**: Title + primary keywords (5-7 tags)
- **Related**: Secondary keywords + variations (8-12 tags)
- **Long-tail**: Specific search phrases (5-8 tags)
- **Broad**: Category tags (3-5 tags)
- **Brand**: Channel/series tags (2-4 tags)

**Character Limit**: 500 characters total

**Example**:
```
/yt.tags docker-beginners-tutorial
```

---

## Folder Structure

```
youtube/
├── .claude/
│   └── commands/           # Command definitions
│       ├── yt.analyze.md
│       ├── yt.hook.md
│       ├── yt.titles.md
│       ├── yt.description.md
│       └── yt.tags.md
│
├── .youtube/
│   ├── templates/          # Output templates
│   │   ├── analysis-template.md
│   │   ├── hook-template.md
│   │   ├── titles-template.md
│   │   ├── description-template.md
│   │   └── tags-template.md
│   │
│   └── memory/             # Project state (JSON)
│       └── [project-name].json
│
├── content/                # Generated content per project
│   └── [project-name]/
│       ├── analysis.md     # Keyword & competitive research
│       ├── hook.md         # Hook & intro scripts
│       ├── titles.md       # Title variations
│       ├── description.md  # SEO description
│       └── tags.md         # Tag strategy
│
└── README.md              # This file
```

---

## Best Practices

### 1. Follow the Two-Phase Workflow

**PHASE 1 (Pre-Video)**:
- Gather thorough reference material
- Generate hook/intro scripts with `/yt.hook`
- Use these scripts when creating your video

**PHASE 2 (Post-Video)**:
- Get accurate transcript from finished video
- Run `/yt.analyze` on the transcript
- Generate titles, descriptions, and tags

**DON'T skip the hook phase!** Creating your hook BEFORE the video ensures better retention and engagement.

---

### 2. Provide Detailed Input

Better input = better output:

**Good** ✅:
```
/yt.analyze

Tutorial about React hooks, specifically useState and useEffect.
Target audience: developers with 1-2 years of JS experience who know
class components but are new to hooks. Will cover conversion from
class to functional components, common mistakes, and best practices.
```

**Bad** ❌:
```
/yt.analyze

video about react hooks
```

---

### 3. Review and Customize

The generated content is a starting point:
- Review all options before selecting
- Customize to match your personal style
- Ensure authenticity (don't use content that doesn't sound like you)
- Verify all claims and promises match your actual video

---

### 4. Test and Iterate

Use the A/B testing recommendations:
- Try different hook styles
- Test browse vs search titles
- Track which tags drive traffic
- Refine based on performance data

---

### 5. Maintain Consistency

Use the same project for related content:
- Keywords stay consistent
- Brand voice is maintained
- Cross-referencing is easier
- Content clusters naturally form

---

## Traffic Strategy Guide

### Search-Focused Content

**When to Use**:
- Tutorial or how-to content
- Problem-solution videos
- Educational content
- Skill-building videos

**Optimize For**:
- Keyword-rich titles
- Clear search intent matching
- Descriptive thumbnails
- Long-form content (10+ minutes)

**Commands Priority**:
1. `/yt.analyze` (focus on keyword research)
2. `/yt.titles` (use search-optimized titles)
3. `/yt.description` (keyword integration)
4. `/yt.tags` (search-focused tag strategy)

---

### Browse-Focused Content

**When to Use**:
- Entertainment content
- Trending topic commentary
- Storytelling videos
- Personality-driven content

**Optimize For**:
- Curiosity gap titles
- Eye-catching thumbnails
- Strong hooks (first 30 seconds)
- Emotional connection

**Commands Priority**:
1. `/yt.analyze` (focus on competitive research)
2. `/yt.hook` (maximize viewer retention)
3. `/yt.titles` (use browse-optimized titles)
4. `/yt.description` (engagement-focused)

---

### Balanced Approach

**When to Use**:
- Most content actually falls here
- Educational + entertaining mix
- Evergreen content with viral potential

**Optimize For**:
- Hybrid titles (keyword + curiosity)
- Both search and suggested video optimization
- Multiple traffic sources

**Commands Priority**:
1. `/yt.analyze` (comprehensive analysis)
2. All commands with balanced strategies

---

## Troubleshooting

### "No analysis found" Error

**Problem**: Trying to run hook/titles/description/tags before analysis.

**Solution**: Run `/yt.analyze` first for that project.

---

### Multiple Projects Warning

**Problem**: Multiple project folders exist, unclear which to use.

**Solution**: Specify project name: `/yt.hook project-name`

---

### Tags Over 500 Characters

**Problem**: Generated tags exceed YouTube's limit.

**Solution**: The command will automatically trim low-priority tags. Review the removed tags and manually adjust if needed.

---

### Missing Keywords in Analysis

**Problem**: Analysis didn't identify enough keywords.

**Solution**: Re-run `/yt.analyze` with more detailed input about your topic.

---

## Roadmap

Potential future enhancements:

- [ ] Thumbnail concept generator
- [ ] Script structure optimizer
- [ ] Community post generator
- [ ] Playlist organizer
- [ ] Analytics integration
- [ ] Competitor tracking
- [ ] Content calendar planning
- [ ] Multi-language support

---

## Credits

This workflow is inspired by the [Specify](https://github.com/specify/specify) methodology for systematic software development. The approach of using structured templates and progressive commands has been adapted for YouTube content creation.

---

## License

This workflow is part of the youtube-agentic-workflow project.

---

## Feedback & Contributions

Found an issue or have a suggestion? The workflow can be customized by:
- Editing command files in `.claude/commands/`
- Modifying templates in `.youtube/templates/`
- Adjusting command logic and validation rules

---

## Getting Started Checklist

**PHASE 1: Pre-Video**
- [ ] Review this README to understand the workflow
- [ ] Gather reference material (docs, announcements, guides)
- [ ] Run `/yt.hook` with reference material
- [ ] Review hook options and select your favorite
- [ ] Create your video using the hook/intro scripts

**PHASE 2: Post-Video**
- [ ] Get transcript from finished video
- [ ] Run `/yt.analyze` with the transcript
- [ ] Review analysis output for insights
- [ ] Create title variations with `/yt.titles`
- [ ] Generate description with `/yt.description`
- [ ] Create tags with `/yt.tags`
- [ ] Review all generated metadata
- [ ] Customize to match your style
- [ ] Upload video with optimized metadata
- [ ] Track performance and iterate

---

**Happy Creating!** 🎬✨
