/*1. Выведите на экран таблицу умножения (как в школьной тетради). */

let x = document.getElementById('tbl');
document.write("<table border='1'>");
    

function countTable () {
    for (let i = 2; i <= 10; i++) {
        for (let n = 2; n <= 10; n++) {
           console.log(i*n);
           document.write("<tr><th>" + i + "*" + n + "=" + i * n + "</th><tr>");
           
        }
    }
}


/*2. Сделайте функцию, 
которая принимает параметром число от 1 до 7, 
а возвращает день недели. */

let day = +prompt('Введите число от 1 до 7','');

function calcDay(day) {
  
    switch (day) {
    case 1: return 'Понедельник';
    break;
    case 2: return 'Вторник';
    break;
    case 3: return 'Среда';
    break;
    case 4: return 'Четверг';
    break;
    case 5: return 'Пятница';
    break;
    case 6: return 'Суббота';
    break;
    case 7: return 'Воскресенье';
    break;
    default: return "Неверное значение";
    }
}
alert(calcDay(day));



/*3. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. 
Выведите на экран только те числа из массива, 
которые начинаются на цифру 1, 2 или 5.*/

let arr = [10, 20, 30, 50, 235, 3000];

function findNum(arr) {
    
  for(let num of arr) {
      let char = String(num) [0];

      if(char === "1" || char === "2" || char === "5" ){
      console.log(num);
    }
  }
}
findNum(arr);

/*4.  Дан массив с числами. 
Создайте из него новый массив, где останутся лежать только числа, 
которые кратны 3. Создайте для этого вспомогательную функцию.*/

function multOf3(arr) {
    let arrOf3 = [];
    for (let num of arr) {
        if (num % 3 == 0) {
            arrOf3.push(num);
        }
    }
    return arrOf3;

}
console.log(multOf3(arr));

/*5. Создайте массив arr = ['a', 'b', 'c', 'd'] 
и с его помощью выведите на экран строку 'a+b, c+d'.*/

function abcd() {
    let arr = ['a', 'b', 'c', 'd'];
    let str = arr[0] + "+" + arr[1] + ", " + arr[2] + "+" + arr[3];
    return 
}
abcd();

/*6. Создайте массив arr с элементами 2, 5, 3, 9. 
Умножьте первый элемент массива на второй, 
а третий элемент на четвертый. 
Результаты сложите, присвойте переменной  result. 
Выведите на экран значение этой переменной.*/

let arr3 = [2, 5, 3, 9];

function countArr(arr) {
    let result;
    for (let num of arr) {
        result = (arr[0] * arr[1]) + (arr[2] * arr[3]);
    }
    return result;
}
console.log(countArr(arr3));


/* 8. Сделайте функцию, которая возвращает н-ное число фибоначчи, 
ряд начинайте с 1*/

function fib(n) {
   let num;
   if (n > 1) {
       num = fib(n-1) + fib(n-2);
   } 
   else {
       num = n;
   }
   return num
}
console.log(fib(3));
console.log(fib(7));

/*10. Дан массив с числами. [2,3,1,4,8,6,7,5
    Не используя метода reverse 
    переверните его элементы в обратном порядке. */

let arr2 = [2,3,1,4,8,6,7,5,9];

function reverse(arr) {
    let arrRev = [];
    for (let num of arr) {
        arrRev.unshift(num);

    }

    return arrRev;
}
console.log(reverse(arr2));

