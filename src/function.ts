const BMI = (height: number, weight: number): number => {
	return weight / (height * height);
};

console.log(BMI(1.8, 73));
