# twemoji-sprites

これは、絵文字 [Twemoji](https://twemoji.twitter.com/) を地図アイコン(Mapbox GL JS)として配信しているアイコン用のサーバーです。

ドキュメント: [https://www.mapbox.com/mapbox-gl-js/style-spec/#root-sprite](https://www.mapbox.com/mapbox-gl-js/style-spec/#root-sprite)

## 使い方

以下 URL を `style.json` の `sprite` の値にセットしてください。

```
https://naogify.github.io/twemoji-sprites/icons
```

次に、style 内でアイコンを指定する場合は、絵文字の Unicode を **半角英数字**で、`icon-image` に指定してください。

### 例

🚌 をアイコンとして使用する。

```
icon-image: "1f68c"
```

こちらの絵文字検索で使用したい絵文字を検索し、Unicode の 項目をコピーし、`U+` 以外のテキストをコピーし半角英数字にすることで使用できます。
指定する値は、クォーテーションで囲ってください。

https://lets-emoji.com/emojisearch/


## ライセンス

このプロジェクトで同梱している各アイコンのライセンスはそれぞれの配布元で確認してください。

- Twemoji - [https://twemoji.twitter.com/](https://twemoji.twitter.com/)

それ以外のソースコードは MIT ライセンスとします。

## コントリビュート

プルリクエストや Issue はいつでも歓迎します。

[https://github.com/naogify/twemoji-sprites](https://github.com/naogify/twemoji-sprites)
