#!/usr/bin/env node
import fs from 'fs'
import glob from 'glob';
import path from 'path';
import twemoji from 'twemoji';
import * as unicodeEmoji from 'unicode-emoji';
import emoji from 'node-emoji';

const emojiList = unicodeEmoji.getEmojis()

const srcPath = path.join(path.resolve(), 'icons')


glob.sync(path.join(srcPath, `*.svg`))
  .map(function (f) {

    let fileName = f.replace(`${srcPath}/`, '');
    fileName = fileName.replace('.svg', '');

    const codePointList = fileName.split('-');

    let utf16 = '';
    for (let i = 0; i < codePointList.length; i++) {
      const codePoint = codePointList[i];
      utf16 = utf16 + twemoji.convert.fromCodePoint(codePoint);
    }

    // 顔文字や人間系アイコン、シンボル系アイコンはスプライト軽量化のため削除
    const excludesEmojiCategory = [
      'face-emotion',
      'person-people',
      'symbols'
    ];
    const isEmojiOk = emojiList.find(emoji => emoji.emoji === utf16 && !excludesEmojiCategory.includes(emoji.category));

    if (isEmojiOk) {

      // 囲み文字 例:#️⃣、 豆腐文字などは削除
      const excludes = ['20e3', 'e50a'];
      const isExcludeFileName = excludes.find(exclude => fileName.match(exclude));

      if (!isExcludeFileName) {

        let syntax = emoji.unemojify(utf16);
        syntax = syntax.replace(/\:/g, '')
        const outputPath = f.replace(fileName, syntax);
        
        fs.renameSync(f, outputPath);
      } else {
        fs.unlinkSync(f);
      }

    } else {
      fs.unlinkSync(f);
    }

  });