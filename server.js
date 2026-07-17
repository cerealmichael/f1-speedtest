'use strict';

const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything in this directory statically (index.html, images, etc.)
app.use(express.static(__dirname, {
  extensions: ['html'],
  setHeaders(res) {
    // Keep it snappy but avoid stale assets during the party.
    res.setHeader('Cache-Control', 'no-cache');
  }
}));

// Fallback: always hand back the single-page app.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`ReactLab running on port ${PORT}`);
});
