const fs = require('fs');
const path = require('path');

const CONTENT_DIR = 'content';
const SIDEBAR_FILE = '_sidebar.md';

// Helper to extract title from markdown file
function extractTitle(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const titleMatch = content.match(/^#\s+(.+)$/m);
    return titleMatch ? titleMatch[1] : path.basename(filePath, '.md');
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return path.basename(filePath, '.md');
  }
}

// Natural sort for files with numeric prefixes
function naturalSort(a, b) {
  const aParts = a.match(/(\d+)|([^\d]+)/g);
  const bParts = b.match(/(\d+)|([^\d]+)/g);
  
  for (let i = 0; i < Math.min(aParts.length, bParts.length); i++) {
    if (aParts[i] !== bParts[i]) {
      const aNum = parseInt(aParts[i]);
      const bNum = parseInt(bParts[i]);
      if (!isNaN(aNum) && !isNaN(bNum)) return aNum - bNum;
      return aParts[i].localeCompare(bParts[i]);
    }
  }
  return aParts.length - bParts.length;
}

// Generate sidebar content recursively
function generateSidebarContent(dir = CONTENT_DIR, level = 0) {
  let content = [];
  const items = fs.readdirSync(dir);
  
  // Process directories first
  const dirs = items.filter(item => 
    fs.statSync(path.join(dir, item)).isDirectory()
  ).sort();

  // Then process files
  const files = items.filter(item => 
    fs.statSync(path.join(dir, item)).isFile() && 
    path.extname(item) === '.md'
  ).sort(naturalSort);

  // Add directories
  for (const subdir of dirs) {
    const displayName = subdir.charAt(0).toUpperCase() + subdir.slice(1).replace(/-/g, ' ');
    content.push(`${'  '.repeat(level)}* **${displayName}**`);
    content = content.concat(generateSidebarContent(path.join(dir, subdir), level + 1));
  }

  // Add files
  for (const file of files) {
    const filePath = path.join(dir, file);
    const title = extractTitle(filePath);
    const link = filePath.replace(/\\/g, '/');
    content.push(`${'  '.repeat(level)}* [${title}](/${link})`);
  }

  return content;
}

// Generate and write sidebar
function generateSidebar() {
  try {
    const sidebarContent = [
      '* [Home](/)',
      ...generateSidebarContent()
    ].join('\n');

    fs.writeFileSync(SIDEBAR_FILE, sidebarContent);
    console.log('Successfully generated _sidebar.md');
  } catch (error) {
    console.error('Error generating sidebar:', error);
    process.exit(1);
  }
}

generateSidebar();