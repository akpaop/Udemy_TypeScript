//無名関数
const BMIanonymous1 = function (height: number, weight: number): number {
	return weight / (height * height);
};
console.log(BMIanonymous1(1.8, 73));

//アロー関数
const BMIarrow = (height: number, weight: number): number => {
	return weight / (height * height);
};
console.log(BMIarrow(1.8, 73));
