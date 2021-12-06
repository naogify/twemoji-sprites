#!/usr/bin/env node
import fs from 'fs'
import path from 'path';
import glob from 'glob';

const GITHUB_WORKSPACE = process.argv[2];
// const GITHUB_WORKSPACE = '/Users/naoppy/naogify/twemoji-sprites/'

const svgsPath = path.join(GITHUB_WORKSPACE, 'icons');
const svgs = glob.sync(path.join(svgsPath, `*.svg`))
  .map(function (f) {
    return {
      path: path.join('.', 'icons', path.basename(f)),
      fileName: path.basename(f).replace('.svg', '')
    };
  });

const fileName = path.join(GITHUB_WORKSPACE, 'cheatsheet.html');

let table = '';
let tdList = '';
for (let i = 1; i < svgs.length; i++) {
  const svg = svgs[i];
  const item = `<td class="item"><img src="${svg.path}" class="emoji-image" alt="${svg.fileName} icon"/><code>${svg.fileName}</code></td>\n`;
  
  if (i % 3 === 0 || svgs.length === i) {
    tdList+=`${item}`;
    table+= `<tr>${tdList}</tr>\n`;
    tdList = ''
  } else {
    tdList+=`${item}`;
  } 
};



const html = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Twemoji Cheat Sheet</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.0.0/github-markdown.min.css" integrity="sha512-nxv6uny69e6SeGW/aOEW0iC2+ruQMKvFDbjav6sVu1dr89ioo5wBm3F0IbBGsNyAt6nuBR/x2HUSx0a7wLEegA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <style>
    .markdown-body {
      box-sizing: border-box;
      min-width: 200px;
      max-width: 980px;
      margin: 0 auto;
      padding: 45px;
    }

    @media (max-width: 767px) {
      .markdown-body {
        padding: 15px;
      }
    }
    .emoji-image {
      height: 22px;
      width: auto;
      margin-right: 10px;
    }
  </style>
</head>
<body class="markdown-body">
  <h1>Twemoji Cheat Sheet</h1>
  <div><a href="https://github.com/naogify/twemoji-sprites">twemoji-sprites</a> で使用可能なアイコンは以下です。<br/>アイコンを使用するには style.json 内で <code>icon-image: 'apple'</code> のように指定して下さい。</div>
  <br/>
  <table>
    <tbody>
      ${table}
    </tbody>
  </table>
</body>
</html>`;

if (fs.existsSync(fileName)) {
  fs.unlinkSync(fileName)
}

fs.writeFileSync(fileName, html);