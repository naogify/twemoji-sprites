# twemoji-sprites

絵文字（[Twemoji](https://twemoji.twitter.com/)）を地図アイコン(Mapbox GL JS)として配信しているアイコン用のサーバーです。

ドキュメント: [https://www.mapbox.com/mapbox-gl-js/style-spec/#root-sprite](https://www.mapbox.com/mapbox-gl-js/style-spec/#root-sprite)

## デモ

![スクリーンショット 2021-11-29 10 36 38](https://user-images.githubusercontent.com/8760841/143796099-2059ca6b-9259-4fe9-b3e3-94b7d9a4c8bc.png)

### デモURL
https://naogify.github.io/emoji-style/


## 使い方

以下 URL を `style.json` の `sprite` の値にセットしてください。

```
https://naogify.github.io/twemoji-sprites/icons
```

次に、style 内でアイコンを指定する場合は、絵文字の Unicode を **半角英数字**でダブルクォーテーションで囲い、`icon-image` に指定してください。

### 例

🚌 をアイコンとして使用する。

```
icon-image: "1f68c"
```

### Unicode の取得方法

こちらの絵文字検索で使用したい絵文字を検索し、Unicode の 項目の `U+` 以外のテキストをコピーすることで値として指定できます。

https://lets-emoji.com/emojisearch/


## ライセンス

アイコンのライセンス以下の通りです。

- Twemoji - [https://twemoji.twitter.com/](https://twemoji.twitter.com/) ( CC-BY 4.0: https://creativecommons.org/licenses/by/4.0/ )

それ以外のソースコードは MIT ライセンスとします。

## コントリビュート

プルリクエストや Issue はいつでも歓迎します。

[https://github.com/naogify/twemoji-sprites](https://github.com/naogify/twemoji-sprites)
