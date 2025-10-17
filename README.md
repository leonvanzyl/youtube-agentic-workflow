# Create YouTube Agent

An AI-powered YouTube content optimization workflow system that integrates with [Claude Code](https://claude.ai/code) to help video creators through every stage of the content creation process.

## What It Does

This package sets up a comprehensive workflow system using slash commands in Claude Code to guide you from initial concept to final video metadata:

- **Pre-Production**: Generate engaging hooks and scripts from reference materials
- **Post-Production**: Analyze keywords, create SEO-optimized titles, tags, and descriptions
- **Data-Driven**: Uses competitive research and keyword analysis to maximize discoverability

## Quick Start

```bash
# Install in a new directory
npx create-youtube-agent@latest my-youtube-workflow

# Or install in current directory
npx create-youtube-agent@latest .
```

Then:
1. Open the project folder in [Claude Code](https://claude.ai/code)
2. Run `/yt.init "Your Video Topic"` to create your first project
3. Follow the guided workflow

## Features

### Slash Commands

Six powerful commands to optimize your content:

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `/yt.init` | Initialize new project structure | Start of each video project |
| `/yt.hook` | Generate pre-video hook scripts | Before filming |
| `/yt.analyze` | Keyword research & competitive analysis | After video creation |
| `/yt.titles` | Generate title variations | Before publishing |
| `/yt.tags` | Create optimized tag sets | Before publishing |
| `/yt.description` | Build SEO descriptions with timestamps | Before publishing |

### Project-Based Workflow

Each video gets its own organized project folder:

```
content/
└── your-video-project/
    ├── references/          # Your source materials
    ├── hook.md             # Generated hook scripts
    ├── analysis.md         # Keyword research
    ├── titles.md           # Title variations
    ├── tags.md             # Tag sets
    └── description.md      # Final description
```

### Analysis-Driven Optimization

The system uses competitive research and keyword analysis to ensure your metadata is:
- **Discoverable**: Optimized for YouTube search and browse
- **Strategic**: Balances broad reach with niche targeting
- **Validated**: Includes character count checks and quality guidelines

## Workflow Example

### 1. Initialize Project
```
/yt.init "How to Build a Mechanical Keyboard"
```
Creates project folder with reference directory.

### 2. Add Reference Materials
Drop your research, docs, or outlines into:
```
content/how-to-build-a-mechanical-keyboard/references/
```

### 3. Generate Hook Scripts
```
/yt.hook
```
Creates attention-grabbing opening scripts based on your references.

### 4. Create Your Video
Film using the hook scripts as your opening.

### 5. Analyze & Optimize
After creating your video:
```
/yt.analyze how-to-build-a-mechanical-keyboard "your video transcript"
```
Performs keyword research and competitive analysis.

### 6. Generate Metadata
```
/yt.titles
/yt.tags
/yt.description
```
Creates optimized titles, tags, and description with timestamps.

## Requirements

- [Claude Code](https://claude.ai/code) (Free or Pro)
- Node.js 14+ (for installation only)
- No coding experience required

## Key Features

### Smart Context Awareness
After initialization, commands automatically use your current project - no need to repeat the project name.

### Character Limit Enforcement
- **Tags**: Automatically validates 500-character YouTube limit
- **Descriptions**: 5000-character maximum with mobile-first optimization
- **Titles**: Optimized for 60-70 characters with mobile preview

### Competitive Research
The `/yt.analyze` command uses web search to:
- Find 3-5 competitor videos per keyword
- Identify trending topics in your niche
- Extract strategic insights and opportunities

### Timestamp Generation
Automatically generates descriptive timestamps from subtitle files (.srt, .vtt) in your references folder.

## Project Structure

```
your-project/
├── .claude/
│   └── commands/              # Slash command definitions
│       ├── yt.init.md
│       ├── yt.hook.md
│       ├── yt.analyze.md
│       ├── yt.titles.md
│       ├── yt.tags.md
│       └── yt.description.md
├── .youtube/
│   ├── templates/             # Output format templates
│   │   ├── hook-template.md
│   │   ├── analysis-template.md
│   │   ├── titles-template.md
│   │   ├── tags-template.md
│   │   └── description-template.md
│   └── memory/                # System state (gitignored)
├── content/                   # Your video projects (gitignored)
│   └── [project-name]/
│       ├── references/        # Your source materials
│       └── [generated-files]  # System output
└── CLAUDE.md                  # Detailed system documentation
```

## Advanced Usage

### Multiple Projects
The system tracks your current project, but you can work on multiple videos:

```bash
/yt.init "Project A"
/yt.hook

/yt.init "Project B"
/yt.hook

/yt.analyze project-a "transcript A"
/yt.analyze project-b "transcript B"
```

### Reference Material Types
The system supports various file formats:
- Text: `.txt`, `.md`, `.markdown`
- Subtitles: `.srt`, `.vtt`, `.sbv`
- Documents: `.pdf`, `.html`
- Data: `.json`, `.yaml`, `.yml`

### Tag Strategy
Generated tags follow YouTube best practices:
- 10-20% broad keywords (high competition)
- 35-45% medium specificity (balanced)
- 40-50% long-tail (niche targeting)

## Troubleshooting

### Command Not Found
Make sure you're using Claude Code and the commands start with `/yt.`

### No Current Project
Run `/yt.init` first, or specify the project name explicitly in commands.

### Analysis Missing
Commands `/yt.titles`, `/yt.tags`, and `/yt.description` require `/yt.analyze` to be run first.

## Documentation

For complete workflow details, system architecture, and customization options, see:
- `CLAUDE.md` - Full system documentation
- Individual command files in `.claude/commands/` - Detailed usage examples

## Philosophy

This system follows these core principles:

1. **Analysis-First**: Strategic research drives metadata generation
2. **Mobile-Optimized**: First impressions matter on mobile devices
3. **Pre-Video & Post-Video**: Optimize before filming and after editing
4. **Validation Over Generation**: Built-in quality checks and guidelines
5. **Context-Aware**: Smart defaults reduce repetitive inputs

## License

MIT

## Contributing

This is an open workflow system. Feel free to:
- Customize command prompts in `.claude/commands/`
- Modify output templates in `.youtube/templates/`
- Extend the system with additional commands

## Credits

Built for use with [Claude Code](https://claude.ai/code) by Anthropic.
