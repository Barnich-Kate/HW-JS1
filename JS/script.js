//переменная месяц - не работает почему-то:(
let month = prompt ('4');
if (month <= 3 && >= 5) {
    alert ('Весна');
} else if (month <=6 && >= 8) {
    alert ('Лето');
} else if (month <= 9 && >= 11) {
    alert ('Осень');
} else {
    alert ('Зима');
}

//задача тест
let test = true;
if (test = true) {
    alert ('Верно');
} 
else {
    alert ('Неверно')
}

//Количество секунд в сутках
console.log(24*60*60);

//Радиус круга 1 способ - не работает почему-то :(
/*let radius = prompt ("");
const Number_P=3.14;
let s = Number_P*r^2;
alert(s);*/

//Радиус круга 2 способ
let radius = 25;
let square = 3.14*25^2;
console.log ('s')