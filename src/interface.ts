console.log('interface.ts');

//アノテーションなし
let object1 = { name: 'Nori', age: 49 };

//変数宣言と一緒にアノテーション
let object2: {
	name: string;
	age: number;
} = {
	name: 'Nori',
	age: 49,
};

//エイリアスの場合はイコール必要
type objectType = {
	name: string;
	age: number;
};
let object3: objectType = {
	name: 'Nori',
	age: 49,
};

//インターフェイスの場合はイコール不要
interface objectInterface {
	name: string;
	age: number;
}
let object4: objectInterface = {
	name: 'Nori',
	age: 49,
};
