// Напишите функцию pluck, которая берет массив объектов 
//и возвращает массив значений определенного поля:
//var characters = [
 //   { 'name': 'barney', 'age': 36 },
//    { 'name': 'fred', 'age': 40 }
//  ];
//  console.log(pluck(characters, 'name')); // ['barney', 'fred'] 

var characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
    ];
    

    function pluck (arr, prop) {
        let arrProp = [];
        for (let char of arr) {
            arrProp.push(char[prop]);
        }
        
        return arrProp;
    }

console.log(pluck(characters, 'age'));

//Напиши функцию, считающую число свойств в объекте:

var a = { a: 1, b: 2 };

function count(a) {
    return Object.keys(a).length;
}
console.log(count(a)); // 2

var b = function () {}
console.log(count(b)); // 0

var c = [1, 2, 3];
console.log(count(c)); // 3

var d = [];
d[100] = 1;
console.log(count(d)); //1


//Напишите скрипт, который присваивает переменной d значение 7, 
//а затем выводит на экран объект со следующими  свойствами: 
//в первой строке - это значение, во второй строке - 
//квадрат этого значения, в третьей строке - куб этого значения

//1 вариант (не работает)
function assignD(num, sq) {
    let n = 7;
    num = n;

    /*return Math.pow(num, 2);
    return Math.pow(num, 3);*/
    
}

console.log(assignD());
console.log(assignD(Math.pow(2)));
console.log(assignD(Math.pow(3)));

// 2 вариант

let n = 7;
console.log(n);
console.log(Math.pow(n, 2));
console.log(Math.pow(n, 3));