'use strict'
let number;

const isNumber = function (params) {
	return !isNaN(parseFloat(params)) && isFinite(params)
};
const getNumber = function (pseudonum) {
	if (!isNumber(pseudonum) ) {
		return 0
	}
	let result = pseudonum.match(/\d+(\.\d+)?/)
	return parseFloat(result[0])
}

number = prompt('Значение');
number = getNumber(number)
console.log('Полученное значение: ', number, ', тип значения: ', typeof number);
