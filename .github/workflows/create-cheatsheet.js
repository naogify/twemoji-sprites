#!/usr/bin/env node
import fs from 'fs'
import path from 'path';

const fileName = path.join(__dirname, 'cheatsheet.html');
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

fs.writeFileSync(fileName, html);