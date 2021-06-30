//Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6. 
let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6. 

let arr2 = [1, 2, 3];
arr2.unshift(4, 5, 6)
console.log(arr2);

//Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент. 

let arr3 = ['js', 'css', 'jq'];
console.log(arr3[0]);

// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент. 

let arr4 = ['js', 'css', 'jq'];
console.log(arr4[2]);

//Дан массив [1, 2, 3, 4, 5]. 
//С помощью метода slice запишите в новый элементы [1, 2, 3]. 

let arr5 = [1, 2, 3, 4, 5];
console.log(arr5.slice(0, 3));

//Дан массив [1, 2, 3, 4, 5]. 
//С помощью метода slice запишите в новый элементы [4, 5]. 

let arr6 = [1, 2, 3, 4, 5];
let arr7 = arr6.slice(-2);
console.log(arr7);

//Дан массив [1, 2, 3, 4, 5]. 
//С помощью метода splice преобразуйте массив в [1, 4, 5].

let arr8 = [1, 2, 3, 4, 5];
arr8.splice(1, 2);
console.log(arr8);

//Используйте метод reduce в комбинации с concat 
//для свёртки массива массивов в один массив, 
//у которого есть все элементы входных массивов.

var arrays = [[1, 2, 3], [4, 5], [6]]; 
let a = arrays.reduce((num, item) => {
    return num.concat(item);
});
console.log(a);

//Дан массив [3, 4, 1, 2, 7]. Отсортируйте его не используя метод sort. 
//Предпочтительный метод сортировки - пузырьком.

let arr10 = [3, 4, 1, 2, 7]; 
function bubbleSort(arr10) { 
    var swapped;
    do {
        swapped = false; 
        for (var i=0; i < arr10.length-1; i++) { 
            if (arr10[i] > arr10[i+1]) {
                var temp = arr10[i];
                arr10[i] = arr10[i+1];
                arr10[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped); //действует, пока переменная  swapped = true 
}

bubbleSort(arr10);
console.log(arr10);

//мой вариант задачи, 2 способ
let array = [10, 4, 6, 8, 15, 1, 9];
function bubbleSort (array) {
    for(let i = 0; i <= array.length - 2; i++) { //повтор прохождений по массиву
        for (let j = 0; j <= array.length - 2; j++) { //попарное сравнение элементов массива
            if(array[j] > array[j + 1]) { //сравнение элементов
               //меняем местами элементы
                let swap = array[j]; 
                array[j] = array[j + 1]; 
                array[j + 1] = swap;
            }

        }

    }
}
bubbleSort(array);
console.log(array);