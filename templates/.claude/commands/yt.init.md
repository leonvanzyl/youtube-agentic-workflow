---
description: Initialize a new YouTube video project with folder structure and reference directory
---

## User Input

```text
$ARGUMENTS
```

You **MUST** request a video topic from the user if no arguments are provided.

---

## Goal

Initialize a new YouTube video project by:
- Creating a dedicated project folder based on the video topic
- Setting up a reference subfolder for supporting materials
- Providing clear next steps for the workflow

This is the **FIRST STEP** in the YouTube content workflow, executed before gathering reference materials or analyzing content.

---

## Operating Constraints

**SINGLE PROJECT FOCUS**: Each video gets its own dedicated folder to keep reference materials, analysis, and generated content organized together.

**TOPIC-BASED NAMING**: Project folder name should be derived from the video topic in kebab-case format (e.g., "claude-plugins", "react-hooks-tutorial").

**REFERENCE ORGANIZATION**: All supporting materials (articles, documentation, subtitle tracks, research) should be stored in the project's references folder.

**WORKFLOW GUIDANCE**: Provide clear instructions on what the user should do next after initialization.

---

## Input Handling

### Expected Input Format

User should provide a brief, high-level description of the video topic:

```
/yt.init [brief video topic description]
```

**Examples:**
- `/yt.init Claude Code plugins tutorial`
- `/yt.init How to use React hooks for state management`
- `/yt.init Next.js 15 new features overview`

### Parsing Arguments

1. **Full argument string**: Treat as the video topic description
2. **If no arguments**: Ask user for a brief topic description
3. **If too vague**: Request clarification on the specific video focus

---

## Execution Steps

### Step 1: Parse Video Topic

1. **Extract topic from arguments**:
   - Use full $ARGUMENTS as the video topic
   - Trim whitespace
   - Validate topic is meaningful (not empty or too short)

2. **Generate project name**:
   - Convert topic to kebab-case format
   - Keep it concise (2-5 words ideal)
   - Remove special characters
   - Make it filesystem-friendly

   **Examples**:
   - "Claude Code plugins tutorial" → `claude-code-plugins`
   - "How to use React hooks for state management" → `react-hooks-state`
   - "Next.js 15 new features overview" → `nextjs-15-features`

3. **Validate project name**:
   - Check if folder already exists
   - If exists: Ask user if they want to use existing project or choose different name

---

### Step 2: Create Project Structure

1. **Create main project directory**:
   ```
   content/[project-name]/
   ```

2. **Create references subdirectory**:
   ```
   content/[project-name]/references/
   ```

3. **Update project state manifest**:
   - Create or update `content/.project-state.json`
   - Set current project:
     ```json
     {
       "currentProject": "[project-name]",
       "lastUpdated": "[ISO timestamp]",
       "projects": {
         "[project-name]": {
           "created": "[ISO timestamp]",
           "topic": "[original video topic description]",
           "completedCommands": ["init"],
           "lastCommand": "init"
         }
       }
     }
     ```
   - If manifest already exists:
     - Preserve existing projects list
     - Update `currentProject` to new project
     - Add new project to `projects` object with workflow tracking fields
     - Update `lastUpdated` timestamp

4. **Verify creation**:
   - Confirm both directories were created successfully
   - Confirm manifest was updated
   - Check filesystem permissions
   - Report any errors

---

### Step 3: Report Completion and Next Steps

Provide user with a clear, actionable completion message:

1. **Success Message**: "YouTube project initialized successfully!"

2. **Project Information**:
   - Project Name: `[project-name]`
   - Project Path: `content/[project-name]/`
   - References Path: `content/[project-name]/references/`
   - Status: Set as current project ✓

3. **Next Steps Instructions**:
   ```
   Your YouTube project is ready! Follow these steps:

   1. GATHER REFERENCE MATERIALS
      Copy any important materials to the reference folder:
      • Product documentation
      • Marketing announcements
      • Research articles
      • Blog posts
      • Quick start guides
      • Subtitle tracks (if working from existing video)
      • Any other supporting content

      Location: content/[project-name]/references/

   2. RUN THE HOOK GENERATION COMMAND
      Once you've added your reference materials, generate hook and intro scripts:

      /yt.hook

      (No project name needed - it will use the current project automatically!)

      This will analyze your reference materials and create engaging hooks and
      intro scripts that you can use when creating your video.

   3. AFTER VIDEO CREATION
      After you've recorded your video and have a transcript:

      /yt.analyze [project-name] [transcript or topic]

      This will analyze your video content and prepare it for optimization.

   4. GENERATE METADATA
      Finally, create your YouTube metadata:

      /yt.titles [project-name]      - Generate optimized titles
      /yt.tags [project-name]        - Generate relevant tags
      /yt.description [project-name] - Generate SEO description
   ```

4. **Workflow Summary**:
   ```
   Workflow Overview:
   init → gather references → hook → create video → analyze → titles/tags/description

   You are here: ✓ init (COMPLETED)
   Next step: Gather reference materials in content/[project-name]/references/
   ```

---

## Quality Validation

Before reporting completion, verify:

- [ ] Project name generated from topic (kebab-case format)
- [ ] Main project directory created
- [ ] References subdirectory created
- [ ] Project state manifest created/updated at `content/.project-state.json`
- [ ] Current project set in manifest
- [ ] No filesystem errors occurred
- [ ] Next steps clearly communicated
- [ ] User knows where to put reference materials
- [ ] User knows what command to run next

**If any validation fails**: Report the specific error and provide troubleshooting guidance.

---

## Error Handling

### No Arguments Provided
```
ERROR: Please provide a brief description of your video topic.

Usage: /yt.init [video topic description]

Examples:
  /yt.init Claude Code plugins tutorial
  /yt.init React hooks state management
  /yt.init Next.js 15 new features
```

### Topic Too Short or Vague
```
WARN: Topic description is very brief. Please provide a bit more context.

Current: "[topic]"

Example of better description:
Instead of: "plugins"
Try: "Claude Code plugins tutorial"
```

### Project Already Exists
```
WARN: A project with this name already exists at content/[project-name]/

Would you like to:
1. Use the existing project (resume workflow)
2. Choose a different project name
3. Delete and recreate (WARNING: This will remove all existing files)

Please specify your choice.
```

### Directory Creation Failed
```
ERROR: Failed to create project directory.

Attempted path: content/[project-name]/
Error: [specific error message]

Please check:
- File system permissions
- Available disk space
- Path validity
```

---

## Project Naming Guidelines

### Good Project Names
- **Descriptive**: Clearly indicates video topic
- **Concise**: 2-5 words, under 50 characters
- **Filesystem-friendly**: Only lowercase letters, numbers, hyphens
- **Memorable**: Easy to type in subsequent commands

### Examples of Good Names
- `claude-code-plugins`
- `react-hooks-tutorial`
- `nextjs-15-features`
- `typescript-generics`
- `docker-compose-guide`

### Examples to Avoid
- Too long: `how-to-use-claude-code-plugins-for-developers-complete-guide`
- Too generic: `tutorial`, `video`, `content`
- Special chars: `react_hooks!`, `next.js@15`
- Spaces: `my video topic` (will be converted automatically)

---

## Folder Structure Created

After running this command, your project structure will look like:

```
content/
├── .project-state.json    ← Project manifest (tracks current project)
└── [project-name]/
    └── references/         ← Put your reference materials here
```

After running subsequent commands, the structure will grow to:

```
content/
├── .project-state.json    ← Project manifest
└── [project-name]/
    ├── references/         ← Your reference materials
    ├── hook.md           ← Generated by /yt.hook
    ├── analysis.md       ← Generated by /yt.analyze
    ├── titles.md         ← Generated by /yt.titles
    ├── tags.md           ← Generated by /yt.tags
    └── description.md    ← Generated by /yt.description
```

---

## Notes

**Pre-emptive Setup**: This command is designed to be run BEFORE you have all your materials ready. It creates the structure so you know exactly where to put things.

**Project State Management**: The command creates/updates `content/.project-state.json` to track:
- Current active project (so you can run `/yt.hook` without specifying project name)
- All projects created with their metadata
- Last update timestamp

This allows for a streamlined workflow where subsequent commands automatically use the current project.

**Flexible Reference Materials**: The reference folder can contain any type of supporting content - there's no strict format requirement. Common materials include:
- Markdown files with notes
- PDFs of documentation
- Text files with links
- Subtitle/transcript files
- Screenshots or images
- Any other relevant research

**No Analysis Yet**: This command only sets up the structure. The actual content analysis happens in the `/yt.hook` and `/yt.analyze` commands.

**Git-Friendly**: The kebab-case naming ensures folder names work well with version control systems.

---

## Example Usage

### User Input:
```
/yt.init Building custom Claude Code plugins for developers
```

### Expected Output:
```
YouTube project initialized successfully!

Project Information:
├─ Project Name: claude-code-plugins
├─ Project Path: content/claude-code-plugins/
├─ References Path: content/claude-code-plugins/references/
└─ Status: Set as current project ✓

Next Steps:

1. GATHER REFERENCE MATERIALS
   Copy any important materials to the reference folder:
   • Product documentation
   • Marketing announcements
   • Research articles
   [...]

   Location: content/claude-code-plugins/references/

2. RUN THE HOOK GENERATION COMMAND
   /yt.hook

   (No project name needed - it will use the current project automatically!)

[... rest of instructions ...]

Workflow Overview:
init → gather references → hook → create video → analyze → titles/tags/description

You are here: ✓ init (COMPLETED)
Next step: Gather reference materials in content/claude-code-plugins/references/
```

---

## Context

$ARGUMENTS
