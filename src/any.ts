let url: string =
	'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

const axios = require('axios');

interface Article {
	id: number;
	title: string;
	description: string;
}

axios.get(url).then(function (response: any) {
	let data: Article[] = response.data;
	// console.log(data);

	data.map((res) => {
		console.log(
			`id【${res.id}】 title【${res.title}】 descripton【${res.description}】`
		);
	});
});
