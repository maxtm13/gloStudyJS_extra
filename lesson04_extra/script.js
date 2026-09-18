"use strict"

// let myString = 54;
let myString = '   Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Осталось, пунктуация?   ';

const getShortString = function (str) {
	if (typeof str !== 'string') {
		alert("Вы передали не строковое значение");
		return;
	}
	str = str.trim();
	if (str.length > 30) {
		str = str.slice(0, 30) + '[...]';
	}
	return str;
}

console.log('"' + getShortString(myString) + '"');