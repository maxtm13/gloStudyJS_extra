"use strict"

let arr=[];
let element;

const getFirstNum = function (element) {
	if (element > 1) {
		element = element / 10
		return getFirstNum(element)
	} else {
		return Math.trunc(element * 10);
	}
}

const isSimpleNumber = function (num) {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) return false
	}
	return true;
} 


console.log("\n====  массив arr ====\n\n");
for (let i = 0; i < 8; i++) {
	do {
		element = Math.round(Math.random() * 9999)
	} while (element < 100) 
	arr.push(element)
}

console.log('Массив: ', arr);
for (let i = 0; i < 8; i++) {
	if (getFirstNum(arr[i]) === 2 || getFirstNum(arr[i]) === 4) {
		console.log('Элемент ' + arr[i]+ ' начинается на 2 или 4', );
	}
}

console.log("\n====  простые числа от 1 до 100 ====\n\n");

for (let i = 2; i <= 100; i++ ) {
	if (isSimpleNumber(i)) console.log(i + " Делители этого числа: 1 и " + i);
}