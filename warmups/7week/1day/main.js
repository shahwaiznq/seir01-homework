// const allergies = function (score) {
// 	const scorecard = {
// 		1: 'eggs',
// 		2: 'peanuts',
// 		4: 'shellfish',
// 		8: 'strawberries',
// 		16: 'tomatoes',
// 		32: 'chocolate',
// 		64: 'pollen',
// 		128: 'cats',
// 	};

// 	const out = [];

// 	Object.keys(scorecard)
// 		.reverse()
// 		.forEach(function (food) {
// 			if (food <= score) {
// 				score -= food;
// 				out.push(scorecard[food]);
// 			}
// 		});

// 	return out;
// };

const scorecard = [
	'eggs',
	'peanuts',
	'shellfish',
	'strawberries',
	'tomatoes',
	'chocolate',
	'pollen',
	'cats',
];

const allergies = (score, out = [], index = scorecard.length) =>
	score <= 0
		? out
		: score >= 2 ** index
		? allergies(score - 2 ** index, [...out, scorecard[index]], index - 1)
		: allergies(score, out, index - 1);

console.log(allergies(34));
