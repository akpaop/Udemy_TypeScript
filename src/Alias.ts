console.log('Alias.ts');

//typは別名としてるだけなのか...
//構造体というわけではないんだな...
type Mojitetsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojitetsu = 'Hello';

type user = { name: string; age: number };
const Profile1: user = { name: 'ao', age: 18 };

type Profile2 = typeof Profile1;
