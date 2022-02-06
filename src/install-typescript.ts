let message: string = 'Hello,TypeScript!!! ts-node!! ts-node-dev!';
console.log({ message });

//package.jsonを作成する
// npm init -y

//TypeScript
//バージョン調査
// npm info typescript
//インストール
// npm install --save-dev typescript@4.5.5
//実行
// ./node_modules/.bin/tsc src/install-typescript.ts
// npx tsc src/install-typescript.ts
// node src/install-typescript.js

//ts-node
//バージョン調査
// npm info ts-node
//インストール
//npm install --save-dev ts-node@10.4.0
//実行
// npx ts-node src/install-typescript.ts
//　→ファイルは再作成されず実行されるようだ

//ts-node-dev
//バージョン調査
// npm info ts-node-dev
//インストール
//npm install --save-dev ts-node-dev@1.1.8
//監視開始
//npx ts-node-dev --respawn src/install-typescript.ts
//監視終了
//Ctrl+C

//package.jsonにdevエントリを追加したので↓で実行できるように
//npm run dev src/install-typescript.ts

//ts.config
//npx tsc --init

//echo 'export {};' > src/boolean.ts
//npm run dev src/boolean.ts

//echo 'export {};' > src/string.ts
//npm run dev src/string.ts
