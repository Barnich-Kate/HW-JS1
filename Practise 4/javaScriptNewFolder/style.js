//Пользователь может заливать файлы с расширениями только jpg png. 
//Если он залил правильный файл - 
//вывести сообщение об успехе, если нет - об ошибке

function checkFile(name) {
    let newstr = name.match(/\.[jpg png]/);
    if(newstr == null) {
        alert("Не верный формат картинки");
    } else {
        alert("Картинка загружена");
    }
  
}

//страница может быть размещена на хостинге и 
//начинаться с http или https. вне зависимости 
//от этого ссылка в меню должна получать класс active



//функция принимает параметром две строки, 
//сравнить сколько букв в этих словах повторяются 
//и в каком количестве.вывести как обьект

function compStr (str1, str2) {
    let obj = {};
    let uniq1 = [];
    for(char of str1) {
        if(uniq1.indexOf(char) == -1) {
            uniq1.push(char); 
        }

    }
    let uniq2 = [];
    for(char of str2) {
        if(uniq2.indexOf(char) == -1) {
            uniq2.push(char); 
        }

    }
    for(char1 of uniq1) {
        for(char2 of uniq2) {
            if(char1 == char2) {
                let num1 = str1.split(char1).length - 1;
                let num2 = str2.split(char1).length - 1;
                let obj2 = {};
                obj2['str1'] = num1;
                obj2['str2'] = num2;
                obj[char1] = obj2;
            } 
            
        }
    }
    
    return obj;
}
console.log(compStr("жаба", "мара"));

//Дана строка из 3-х цифр. Найдите сумму этих цифр. 
//То есть сложите как числа первый 
//символ строки, второй и третий.

let str4 = '125';
let arr = str4.split("");
let sum = 0;
for (let i = 0; i<arr.length; i++) {
    sum += Number(arr[i]);
}
console.log(sum);

//Дана строка из 6-ти цифр. 
//Проверьте, что сумма первых трех цифр равняется сумме 
//вторых трех цифр. 
//Если это так - выведите 'да', в противном случае выведите 'нет'.

 let str10 = "230456"
 let arr2 = str10.split('');
 arr3 = arr2.map(Number);
 let res1 = arr3[0] + arr3[1] + arr3[2];
 let res2 = arr3[3] + arr3[4] + arr3[5];
 if (res1 == res2) {
     console.log('Yes');
 } else {
    console.log('No'); 
 }
 
 //в массиве есть обьекты с товарами, 
 //у них может быть свойство "акция". 
 //вывести в консоль только те товары, у которых она есть
 
 let array = [
    { name: 'dress', type: 'sale'},
    { name: 'suit', type: 'new'},
    { name: 'trousers', type: 'sale'},
    { name: 'djeans', type: 'new'},
    { name: 'boot', type: 'sale'},
 ];
 array.sort(function (a, b) {
     if (a.type == 'sale') {
         console.log(a.name)
     }
 })