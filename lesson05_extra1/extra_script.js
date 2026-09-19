const num = 266219;
let p = 1;
strNum = num.toString();
for (let index = 0; index < strNum.length; index++) {
	// console.log(strNum[index]);
	p *= strNum[index];
}
console.log('Произведение цифр p: ', p);
let pPow3 = p ** 3;
console.log("Произведение цифр в степени 3: ", pPow3);
console.log('Первые 2 цифры: ', pPow3.toString().slice(0, 2));
