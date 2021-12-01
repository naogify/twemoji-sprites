# twemoji-sprites

絵文字（[Twemoji](https://twemoji.twitter.com/)）を地図アイコン(Mapbox GL JS)として配信しているアイコン用のサーバーです。

ドキュメント: [https://www.mapbox.com/mapbox-gl-js/style-spec/#root-sprite](https://www.mapbox.com/mapbox-gl-js/style-spec/#root-sprite)

## デモ

|![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/142797/f2bbbe57-da57-ac0a-1439-3e48177627aa.png)|
|:--|


### デモURL
https://naogify.github.io/emoji-style/


## 使い方

以下 URL を `style.json` の `sprite` の値にセットしてください。

```
https://naogify.github.io/twemoji-sprites/icons
```

次に、style 内でアイコンを指定する場合は指定したい絵文字を `icon-image` に指定してください。

### 例

🚌 をアイコンとして使用する。

```
icon-image: 🚌
```

指定例はこちらのファイルをご参考ください。https://github.com/naogify/emoji-style/blob/main/layers/poi-bus.yml#L25

### 使用可能な絵文字一覧

使用可能な絵文字一覧はこちらをご参考ください。

https://raw.githubusercontent.com/naogify/twemoji-sprites/gh-pages/icons.json



以下の絵文字や一部の絵文字は使用できません。ご了承ください。

#⃣ *⃣ 0⃣ 1⃣ 2⃣ 3⃣ 4⃣ 5⃣ 6⃣ 7⃣ 8⃣ 9⃣

Mac での表示確認はしていますが、Windows やスマートフォンでの表示確認はできておりません。  
不具合がありましたら [Issue](https://github.com/naogify/twemoji-sprites/issues/new) にてご報告ください。

## ライセンス

アイコンのライセンス以下の通りです。

- Twemoji - [https://twemoji.twitter.com/](https://twemoji.twitter.com/) ( CC-BY 4.0: https://creativecommons.org/licenses/by/4.0/ )

それ以外のソースコードは MIT ライセンスとします。

## コントリビュート

プルリクエストや [Issue](https://github.com/naogify/twemoji-sprites/issues/new) はいつでも歓迎します。

[https://github.com/naogify/twemoji-sprites](https://github.com/naogify/twemoji-sprites)
