# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a YouTube content optimization workflow system that uses slash commands to guide video creators through a structured process: from project initialization and hook generation, through video analysis, to final metadata creation (titles, tags, descriptions). Each command operates on project folders and uses analysis-driven optimization.

## Architecture

### Project Structure Model

The system uses a **project-centric folder architecture**:

```
content/
├── .project-state.json          # Tracks current project and workflow state
└── [project-name]/               # One folder per video project
    ├── references/               # Source materials (docs, transcripts, etc.)
    ├── hook.md                   # Generated hook scripts (pre-video)
    ├── analysis.md              # Keyword and competitive research
    ├── titles.md                # Title variations
    ├── tags.md                  # Tag sets
    └── description.md           # SEO-optimized description
```

### Workflow State Management

**Critical File**: `content/.project-state.json`

This manifest tracks:
- `currentProject`: The active project (enables argument-less commands)
- `projects`: Map of all projects with metadata and completed commands
- `lastUpdated`: ISO timestamp

**Pattern**: All commands that create/modify project files MUST update this manifest.

### Command Workflow Sequence

1. **`/yt.init [topic]`** - Creates project structure, sets as current
2. **User action** - Manually add reference materials to `references/` folder
3. **`/yt.hook`** - Generates pre-video hook scripts from references (uses current project)
4. **User action** - Create video using hooks, generate transcript
5. **`/yt.analyze [project] [content]`** - Creates keyword research foundation
6. **`/yt.titles [project]`** - Generates browse/search/hybrid title options
7. **`/yt.tags [project]`** - Creates 20-30 tags under 500 char limit
8. **`/yt.description [project]`** - Builds SEO description with timestamps

**Key Insight**: Commands 6-8 are **analysis-driven**. Without `analysis.md`, they produce severely degraded output. The analysis file is the strategic brain of the system.

## Command Development Patterns

### Argument Handling Convention

All commands follow this pattern:
```
1. If $ARGUMENTS provided → use as project name
2. If $ARGUMENTS empty → check content/.project-state.json for currentProject
3. If no current project → error with usage instructions
```

### Analysis-Driven Architecture

Commands `/yt.titles`, `/yt.tags`, and `/yt.description` operate on a **read-analysis-then-generate** pattern:

```
1. Load content/[project]/analysis.md (CRITICAL)
2. Extract structured data:
   - Primary/secondary/long-tail keywords
   - Target audience and content vibe
   - Traffic strategy (browse/search/balanced)
   - Competitive insights
3. Use extracted data to drive generation strategy
4. If analysis missing → ERROR (not degraded mode)
```

**Pattern**: These commands should FAIL HARD if analysis.md doesn't exist. Don't generate generic output.

### Template System

Templates in `.youtube/templates/` provide output structure. Each command:
1. Loads its template file
2. Fills all sections with generated content
3. Writes to `content/[project]/[command].md`

**Important**: Templates include validation checklists and metadata that should be populated.

### Character Limits

**Hard constraints**:
- **Tags**: 500 characters total (including commas/spaces) - NON-NEGOTIABLE
- **Description**: 5000 characters maximum
- **Titles**: 60-70 optimal (mobile truncation at ~40)

The `/yt.tags` command MUST validate character count and auto-remove low-priority tags if over limit.

### Web Research Requirement

**`/yt.analyze`** command MUST use `WebSearch` tool to:
- Find 3-5 competitor videos per primary keyword
- Identify trending topics in the niche
- Extract competitive insights (what works, gaps, opportunities)

This is not optional - the research drives strategic recommendations.

### Subtitle Timestamp Extraction

**`/yt.description`** requires subtitle files (`.srt` or `.vtt`) in the `references/` folder. The command:
1. Parses subtitle timestamps and text
2. Identifies major topic changes
3. Generates descriptive labels (not generic)
4. Formats as `⏱️ TIMESTAMPS:` section

## Common Operations

### Running Commands

All slash commands are executed via the SlashCommand tool:
```
/yt.init [topic description]
/yt.hook [project-name]     # or just /yt.hook if current project set
/yt.analyze [project] [content]
/yt.titles [project]
/yt.tags [project]
/yt.description [project]
```

### Project State Updates

After any command that creates/modifies project files, update the manifest:
```json
{
  "currentProject": "[project-name]",
  "lastUpdated": "[ISO timestamp]",
  "projects": {
    "[project-name]": {
      "created": "[ISO timestamp]",
      "topic": "[original topic]",
      "completedCommands": ["init", "hook", "analyze"],
      "lastCommand": "analyze"
    }
  }
}
```

### Reference Material Handling

The `/yt.hook` command scans `content/[project]/references/` for:
- Text: `.txt`, `.md`, `.markdown`
- Subtitles: `.srt`, `.vtt`, `.sbv`
- Docs: `.pdf`, `.html`
- Config: `.json`, `.yaml`, `.yml`

It concatenates all files with separators and uses combined content for hook generation.

## Key Design Principles

1. **Analysis-First Architecture**: The analysis.md file is the source of truth for all metadata generation. Missing analysis = fail fast.

2. **Current Project Context**: Commands can omit project name if a current project is set in the manifest. This creates a smoother workflow.

3. **Pre-Video vs Post-Video**: `/yt.hook` works BEFORE video creation (from reference materials). `/yt.analyze` and subsequent commands work AFTER video creation (from transcripts).

4. **Validation Over Generation**: Commands include comprehensive quality checklists. They should validate output before completion.

5. **Mobile-First SEO**: First 150 characters of descriptions and first 40 characters of titles are critical for mobile display.

6. **Strategic Tag Mix**: Tags should be distributed: 10-20% broad, 35-45% medium specificity, 40-50% long-tail/specific.

## File Locations

- **Commands**: `.claude/commands/yt.*.md` - Slash command prompts
- **Templates**: `.youtube/templates/*-template.md` - Output structure templates
- **Projects**: `content/[project-name]/` - Generated project content
- **Git Ignore**: Content folder and testing folder are ignored

## Notes

- The `content/` directory is gitignored - user-generated projects are local
- Each command file is 400-900 lines with extensive instructions and examples
- Commands use emoji headers (⏱️, 🎁, 📚, 💰, 🔗) for visual organization in output
- The workflow assumes YouTube as the platform but patterns could extend to other video platforms
- Kebab-case naming convention for project folders ensures filesystem compatibility
