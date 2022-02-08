const nextYearSalary = (curSalary: number, rate: number = 1.1): number => {
	return curSalary * rate;
};

console.log(nextYearSalary(1000, 1.05));
console.log(nextYearSalary(1000));
