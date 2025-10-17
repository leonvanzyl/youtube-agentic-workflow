#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

// Get target directory from command line arguments
const args = process.argv.slice(2);
const targetDir = args[0] || '.';

// Resolve to absolute path
const projectPath = path.resolve(process.cwd(), targetDir);

console.log(`${colors.bright}${colors.cyan}
╔══════════════════════════════════════════════════╗
║   📹 YouTube Agent Workflow Setup               ║
╚══════════════════════════════════════════════════╝
${colors.reset}`);

// Check if directory exists, create if it doesn't
if (!fs.existsSync(projectPath)) {
  console.log(`${colors.yellow}Creating directory: ${projectPath}${colors.reset}`);
  fs.mkdirSync(projectPath, { recursive: true });
}

// Source directory (where templates are in the npm package)
const sourceDir = path.join(__dirname, '..');

// Files and directories to copy
const filesToCopy = [
  {
    source: 'templates/.claude/commands',
    dest: '.claude/commands',
    files: [
      'yt.init.md',
      'yt.hook.md',
      'yt.analyze.md',
      'yt.titles.md',
      'yt.tags.md',
      'yt.description.md'
    ]
  },
  {
    source: 'templates/.youtube/templates',
    dest: '.youtube/templates',
    files: [
      'hook-template.md',
      'analysis-template.md',
      'titles-template.md',
      'tags-template.md',
      'description-template.md'
    ]
  }
];

// Copy files function
function copyFile(sourcePath, destPath) {
  const destDir = path.dirname(destPath);

  // Create destination directory if it doesn't exist
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  // Copy file
  fs.copyFileSync(sourcePath, destPath);
}

// Copy all template files
console.log(`\n${colors.bright}${colors.blue}📋 Installing workflow files...${colors.reset}\n`);

filesToCopy.forEach(group => {
  const destGroupPath = path.join(projectPath, group.dest);

  group.files.forEach(file => {
    const sourcePath = path.join(sourceDir, group.source, file);
    const destPath = path.join(destGroupPath, file);

    copyFile(sourcePath, destPath);
    console.log(`${colors.green}✓${colors.reset} Copied ${group.dest}/${file}`);
  });
});

// Copy CLAUDE.md
const claudeMdSource = path.join(sourceDir, 'CLAUDE.md');
const claudeMdDest = path.join(projectPath, 'CLAUDE.md');
copyFile(claudeMdSource, claudeMdDest);
console.log(`${colors.green}✓${colors.reset} Copied CLAUDE.md`);

// Create empty directories
console.log(`\n${colors.bright}${colors.blue}📁 Creating workspace directories...${colors.reset}\n`);

const dirsToCreate = [
  'content',
  '.youtube/memory'
];

dirsToCreate.forEach(dir => {
  const dirPath = path.join(projectPath, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`${colors.green}✓${colors.reset} Created ${dir}/`);
  }
});

// Update or create .gitignore
console.log(`\n${colors.bright}${colors.blue}🔒 Updating .gitignore...${colors.reset}\n`);

const gitignorePath = path.join(projectPath, '.gitignore');
const gitignoreEntries = [
  '# YouTube Agent Workflow',
  'content/*',
  '.youtube/memory/*',
  'testing/'
];

let existingGitignore = '';
if (fs.existsSync(gitignorePath)) {
  existingGitignore = fs.readFileSync(gitignorePath, 'utf8');
}

// Check if entries already exist
const entriesToAdd = gitignoreEntries.filter(entry => {
  return !existingGitignore.includes(entry.replace('# YouTube Agent Workflow', '').trim());
});

if (entriesToAdd.length > 0) {
  const newContent = existingGitignore
    ? `${existingGitignore}\n\n${entriesToAdd.join('\n')}\n`
    : `${entriesToAdd.join('\n')}\n`;

  fs.writeFileSync(gitignorePath, newContent);
  console.log(`${colors.green}✓${colors.reset} Updated .gitignore`);
} else {
  console.log(`${colors.green}✓${colors.reset} .gitignore already configured`);
}

// Success message
console.log(`
${colors.bright}${colors.green}
╔══════════════════════════════════════════════════╗
║   ✨ Setup Complete!                            ║
╚══════════════════════════════════════════════════╝
${colors.reset}

${colors.bright}📍 Project Location:${colors.reset} ${projectPath}

${colors.bright}🚀 Quick Start:${colors.reset}

  1. Open this folder in Claude Code

  2. Run your first command:
     ${colors.cyan}/yt.init "Your Video Topic"${colors.reset}

  3. Add reference materials to:
     ${colors.cyan}content/[your-project]/references/${colors.reset}

  4. Continue with:
     ${colors.cyan}/yt.hook${colors.reset}    - Generate pre-video hooks
     ${colors.cyan}/yt.analyze${colors.reset} - Keyword research (after video)
     ${colors.cyan}/yt.titles${colors.reset}  - Generate titles
     ${colors.cyan}/yt.tags${colors.reset}    - Generate tags
     ${colors.cyan}/yt.description${colors.reset} - Generate description

${colors.bright}📚 Documentation:${colors.reset}
  - Read CLAUDE.md for complete workflow guide
  - Each command includes built-in help

${colors.bright}💡 Tip:${colors.reset} All commands can omit the project name after
   initialization - the system tracks your current project.

Happy creating! 🎬
`);
