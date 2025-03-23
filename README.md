# 🌐 Pokemon-Viewer-Golang 🔍  

**ポケモンAPIから取得した情報を検索・閲覧できる Golang 製 Web アプリ**

## 🖥 デモ

## **📎 概要**
- [セットアップ](#セットアップ)
- [利用方法](#利用方法)

---

## **🛠 技術関連**
- [使用技術](#使用技術)
- [機能一覧](#機能一覧)
- [処理フロー](#処理フロー)
- [API仕様](#api仕様)

---

## **📍 開発のポイント**
- [こだわりのポイント](#こだわりのポイント)
- [苦労した点](#苦労した点)
- [さらに追加したい機能](#さらに追加したい機能)

---

## **📄 参考情報**
- [参考文献](#参考文献)

---

## <a id="セットアップ"></a>🧰 セットアップ

## <a id="利用方法"></a>📖 利用方法

---

## <a id="使用技術"></a>🧱 使用技術

| カテゴリ   | 技術スタック       |
|------------|--------------------|
| 開発言語   | Go, TypeScript     |
| フロントエンド | React, Vite       |
| バージョン管理 | Git, GitHub        |

## <a id="機能一覧"></a>⚙ 機能一覧

<div style="display: flex; justify-content: space-between;">
  <div style="text-align: center;">
    <p><strong>一覧表示画面</strong></p>
    <img width="500" alt="スクリーンショット 2025-03-23 21 46 34" src="https://github.com/user-attachments/assets/142ace7e-5967-4701-bf77-6f49dd1c3897" />
  </div>
  
  <div style="text-align: center;">
    <p><strong>詳細表示画面</strong></p>
    <img width="500" alt="スクリーンショット 2025-03-23 21 43 01" src="https://github.com/user-attachments/assets/8a283659-6062-493f-a3b3-870b99e14308" />
  </div>
</div>



## <a id="処理フロー"></a>🔀 処理フロー

## <a id="API仕様"></a>🔌 API仕様

- APIドキュメント：https://github.com/BackendExplorer/Pokemon-Viewer-Golang/blob/main/docs/openapi.yaml


---

## <a id="こだわりのポイント"></a>✨ こだわりのポイント

- 保守性と拡張性を意識し、機能ごとにファイルを分割して実装しました。
- 外部API（PokeAPI）との連携を通して、リアルタイムデータの取得やAPI通信処理を学びました。
- ページネーション機能やCORS設定など、実務を意識した構成にこだわりました。

## <a id="苦労した点"></a>⚠️ 苦労した点

- 複数のAPIを連続で呼び出す際のエラーハンドリングとパフォーマンス調整に苦労しました。
- クエリパラメータの処理やバリデーションで、細かい条件分岐やエッジケースの対応が必要でした。

## <a id="さらに追加したい機能"></a>💡 さらに追加したい機能

- Redisなどを用いたキャッシュ機能の導入によるパフォーマンス向上
- ポケモンのタイプや能力値による検索・フィルタ機能
- ユニットテスト・統合テストの実装

---

## <a id="参考文献"></a>📄 参考文献

- [Go言語 公式ドキュメント](https://go.dev/doc/)
- [Goパッケージリファレンス](https://go.dev/doc/)
- [React 公式ドキュメント](https://ja.react.dev/)
- [TypeScript 公式ドキュメント](https://www.typescriptlang.org/ja/docs/)
