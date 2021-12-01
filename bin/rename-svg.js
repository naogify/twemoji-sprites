#!/usr/bin/env node

const fs = require('fs')
const glob = require('glob');
const path = require('path');
const twemoji = require('twemoji');

const srcPath = path.join(__dirname, '..', 'icons')

glob.sync(path.join(srcPath, `*.svg`))
  .map(function (f) {

    let fileName = f.replace(`${srcPath}/`, '')
    fileName = fileName.replace('.svg', '')

    const codePointList = fileName.split('-')

    let utf16 = ''
    for (let i = 0; i < codePointList.length; i++) {
      const codePoint = codePointList[i];
      utf16 = utf16 + twemoji.convert.fromCodePoint(codePoint)
    }

    // 囲み文字 例:#️⃣、 豆腐文字などは削除
    const excludes = ['20e3', 'e50a']

    const isExcludeFileName = excludes.find(exclude => fileName.match(exclude));

    if (!isExcludeFileName) {
      const outputPath = f.replace(fileName, utf16)
      
      fs.renameSync(f, outputPath)
    } else {
      fs.unlinkSync(f)
    }
  });