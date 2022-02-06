console.log('intersection.ts');

type Pitcher1 = {
	throwingSpeed: number;
};

type Butter1 = {
	battingAverage: number;
};

const Daimajin: Pitcher1 = {
	throwingSpeed: 154,
};

const Ochiai: Butter1 = {
	battingAverage: 0.367,
};

//インターセクション
//typeを&でつなぐだけ
type TwoWayPlayer = Pitcher1 & Butter1;

const ShowTime: TwoWayPlayer = {
	throwingSpeed: 165,
	battingAverage: 0.286,
};
