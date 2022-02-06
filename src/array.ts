let numbers1: number[] = [1, 2, 3, 4, 5];

//型の抽象化→ジェネリクス
let numbers2: Array<number> = [1, 2, 3, 4, 5];
let strings1: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings2: Array<string> = ['TypeScript', 'JavaScript', 'CoffeeScript'];
let strings3: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

let 二次元配列: number[][] = [
	[50, 100],
	[150, 300],
];

let 配列1: (string | number | boolean)[] = [1, false, 'Japan'];
let 配列2: Array<string | number | boolean> = [1, false, 'Japan'];
