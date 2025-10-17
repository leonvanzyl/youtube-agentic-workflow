#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Colors for output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m'
};

console.log(`${colors.blue}📋 Syncing templates...${colors.reset}\n`);

// Define source and destination mappings
const syncMappings = [
  {
    source: '.claude/commands',
    dest: 'templates/.claude/commands',
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
    source: '.youtube/templates',
    dest: 'templates/.youtube/templates',
    files: [
      'hook-template.md',
      'analysis-template.md',
      'titles-template.md',
      'tags-template.md',
      'description-template.md'
    ]
  }
];

// Function to ensure directory exists
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Function to copy file
function copyFile(source, dest) {
  fs.copyFileSync(source, dest);
}

// Sync all files
let fileCount = 0;

syncMappings.forEach(mapping => {
  const destDir = mapping.dest;

  // Ensure destination directory exists
  ensureDir(destDir);

  mapping.files.forEach(file => {
    const sourcePath = path.join(mapping.source, file);
    const destPath = path.join(mapping.dest, file);

    if (fs.existsSync(sourcePath)) {
      copyFile(sourcePath, destPath);
      console.log(`${colors.green}✓${colors.reset} Synced ${mapping.source}/${file}`);
      fileCount++;
    } else {
      console.log(`${colors.yellow}⚠${colors.reset} Source not found: ${sourcePath}`);
    }
  });
});

console.log(`\n${colors.green}✨ Successfully synced ${fileCount} files!${colors.reset}`);
