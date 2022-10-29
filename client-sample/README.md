# MatchBoX NFT関連の操作イメージ
デザインを一旦無視して機能だけを実装
・ウォレットの接続
・ウォレット繋いだ人のトロフィー一覧を取得 ※console.logでレスポンス表示
・トロフィーのサンプルNFTの所有者一覧を取得 ※console.logでレスポンス表示

# 各ファイルの解説
src/Controller.js       画面のデザイン
src/utils/interact.js   各処理の定義

# ローカル環境での試し方
①　セットアップ
yarn init
yarn install
yarn start
yarn add dotenv --save
yarn add @alch/alchemy-web3
yarn add alchemy-sdk
yarn add axios --save

②　ローカル環境の起動
yarn start