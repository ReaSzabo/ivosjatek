const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(PROJECT_ROOT, 'out');
const DOCS_DIR = path.join(PROJECT_ROOT, 'docs');
const CNAME_SRC = path.join(PROJECT_ROOT, 'CNAME');
const CNAME_DEST = path.join(DOCS_DIR, 'CNAME');

// Ensure docs directory exists
if (!fs.existsSync(DOCS_DIR)) {
    fs.mkdirSync(DOCS_DIR, { recursive: true });
}

// Remove docs except CNAME
fs.readdirSync(DOCS_DIR).forEach(file => {
    if (file !== 'CNAME') {
        const filePath = path.join(DOCS_DIR, file);
        fs.rmSync(filePath, { recursive: true, force: true });
    }
});

// Copy all from out to docs
fs.readdirSync(OUT_DIR).forEach(file => {
    const src = path.join(OUT_DIR, file);
    const dest = path.join(DOCS_DIR, file);
    fs.cpSync(src, dest, { recursive: true });
});

// Ensure CNAME is present
if (fs.existsSync(CNAME_SRC)) {
    fs.copyFileSync(CNAME_SRC, CNAME_DEST);
}
