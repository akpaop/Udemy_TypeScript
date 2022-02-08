const sumMap = (...values: number[]): number => {
	let goukei = 0;
	values.map((value) => {
		goukei = goukei + value;
	});

	return goukei;
};

console.log(sumMap(1, 2, 3, 4, 5, 6));

const reducer = (prev: number, cur: number): number => {
	console.log(prev, cur);
	return prev + cur;
};

const sum = (...values: number[]): number => {
	//配列にはreduceメソッドを指定できる
	//reduceにはコールバック関数を引数に設定する
	//コールバック関数は第2引数には初期値を設定。
	//省略するとIndexゼロがセットされる
	return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
