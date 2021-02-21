var surname = prompt('Укажите вашу фамилию', 'Ефимов');
var name = prompt('Укажите ваше имя', 'Сергей');
var patronymic = prompt('Укажите ваше отчество', 'Аристархович');

var age = +prompt('Укажите ваш возраст в годах', '18');

var male = confirm('Ваш пол мужской?');

var retiree = confirm('Вы работаете?');

if (male > 0) {
    male = 'мужской'
} else {
    male = 'женский'
}

retiree > 0 ? retiree = 'да' : retiree = 'нет';

alert('ваше ФИО: ' + surname + ' ' + name + ' ' + patronymic + '\nваш возраст в годах: ' + age + '\nваш возраст в днях: ' + (age * 365) + '\nчерез 5 лет вам будет: ' + (age + 5) + '\nваш пол: ' + male + "\nвы работаете: " + retiree);

