#!/usr/bin/env node
import fs from 'fs'
import path from 'path';

const GITHUB_WORKSPACE = process.argv[2];
const svgsPath = path.join(GITHUB_WORKSPACE, 'icons');
var svgs = glob.sync(path.join(svgsPath, `*.svg`))
.map(function(f) {
    return {
        svg: fs.readFileSync(f),
        id: path.basename(f).replace('.svg', '')
    };
});

console.log(svgs)

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
</body>
</html>`;

if (fs.existsSync(fileName)) {
  fs.unlinkSync(fileName)
} 

fs.writeFileSync(fileName, html);