"use strict"
let langConf = confirm('Язык ru?');
let lang = langConf ? 'ru' : 'en';
if (lang == 'ru') {
	console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскрессенье');
} else console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday');

console.log('=========== switch-case ==============');

switch (lang) {
	case 'ru':
		console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскрессенье');
		break;
	case 'en':
		console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday');
		break;
	default:
		console.log("Что-то пошло не так");
		break;
}
console.log('=========== array ==============');
const arDays = {
	'ru': 'понедельник, вторник, среда, четверг, пятница, суббота, воскрессенье',
	'en': 'monday, tuesday, wednesday, thursday, friday, saturday, sunday'
};
console.log('array: ', arDays[lang]);



console.log('=========== тернарный оператор ============');
// let namePerson = 'Артем';
// let namePerson = 'Александр';
let namePerson = 'Jhon';
let toConsol = namePerson === "Артем" ? "директор" : (namePerson === 'Александр' ? 'преподаватель' : 'студент');
console.log('toConsol: ', toConsol);

