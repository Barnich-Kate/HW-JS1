/*Зная количество зерен, посчитать сумму в денежном эквиваленте, 
на которую “прилип” шейх. 
Учитывайте, что одно зерно весит 1 аррузу (0,019 г)*/


function pow(x, n) {
    let result = x;
    
    for (let i = 1; i < n; i++) {
        result *=x;
    }
    return result;
}
console.log(pow(2,64));


function countWeight (weight) {
    let beansWeight;
    let beansNum = 2**64 - 1;
    
    beansWeight = beansNum * weight;

    return beansWeight;
}
console.log(countWeight(0.019));

function countDebt (price) {
    let weight = countWeight(0.019);
    
    return weight * price;
}
console.log(countDebt(40));




/*В книге N страниц, пронумерованных как обычно от 1 до N. 
Если сложить сумму цифр( 10 = 1+0 11= 1+1), 
содержащихся в каждом номере страницы, будет 1095. 
Сколько страниц в книге?

Не работает*/

function countPages(total) {
    
    let pagenum = 1;
    let sum = 0;
    while (sum <= total) {
        pagenum++;
        let str = pagenum.toString;
    for (let char of str)   {
        let count = Number(char);
        sum += count;
        console.log(sum);
    }             
        return countPages;
    }
console.log(countPages(1095));


/*Рандом дописать к задаче про цвета
Не работает*/

let colors = ["red", "orange", "yellow", "green", "blue", "violet"];

function makeColors(lenght) {
	let result = '';
    let colorsLenght = colors.length;
    for (let i = 0; i < colors.length; i++) {
    
    result = Math.floor(Math.randome() * colorsLenght);
        
    }
    return result;
}
console.log(makeColors(5));

