#!/usr/bin/env node
import fs from 'fs'
import path from 'path';

const GITHUB_WORKSPACE = process.argv[2];

const fileName = path.join(GITHUB_WORKSPACE, 'cheatsheet.html');
const html = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Twemoji Cheat Sheet</title>
</head>
<body>
<div>hello</div>
</body>
</html>`;

if (fs.existsSync(fileName)) {
  fs.unlinkSync(fileName)
} 

fs.writeFileSync(fileName, html);