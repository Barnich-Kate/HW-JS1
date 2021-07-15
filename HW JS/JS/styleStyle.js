class Machine {
  constructor(name, power) {
    this.enabled = false;
    this.name = name;
    this.power = power;
  }
  Characteristics() {
    if(this.enabled === true) {
      console.log(`${name} with power ${power}W is turned on`);
    }
    
  }
}
let fridge = new Machine('Samsung', 8);
fridge.enable();

class Coffemaker extends Machine {
  constructor (name, power, waterAmount) {
    super(name, power);
    this.name = name;
    this.power = power;
    this.waterAmount = waterAmount;
  }
  enable () {
    super.Characteristics;
    this.heat();
  }


  heat () {
    setTimeout(function(){
      console.log('Кофеварка нагрелась');
    },100);
  }
  getPower () {
    console.log(power);
  }
  run() {
    if(this.enabled){
      if(this._waterAmount >= 30){
        setTimeout(function(){
          console.log('Coffee is ready!');
        },1000);
      }
      else{
        console.warn('Не достаточно воды');
      }
    }  
  }
  }
  waterAmount (amount) {
    if(this.amount === undefined){
      console.log(this._waterAmount);
    }
    else{
      if(typeof(this.amount) !== 'number'){
        console.error('Сыпем гвозди...');
        return false;
      }
      if(this.amount + this._waterAmount > waMAX){
        console.error('Облились!');
      }
      else if(this.amount < 0){
        console.error('Эта вода непригодна для полива цветов!');
      }
      else{
        this._waterAmount += this.amount;
        console.log(`Текущее количество воды - ${this._waterAmount}мл.`);
      }
    }
  }


let cm = new CoffeeMaker('Saeco', 10, 1000);
cm.enable();
cm.run();

cm.waterAmount(100);
cm.waterAmount();
cm.waterAmount(-100);
cm.waterAmount(1100);
cm.waterAmount();
cm.waterAmount(350);
cm.waterAmount('skldfjdslk');
cm.run();
  








//Напишите функцию, которая проверяет, 
//является ли элемент именно простым объектом, 
//а не массивом, null и т.п.

function checkEl (element) {
    
    return typeof element === 'object' && !Array.isArray(element) && element != null;
   

}
console.log(checkEl({name : 1}));
console.log(checkEl(null));
console.log(checkEl([1,2,3]));



//Напишите функцию, которая возвращает новый объект 
//без указанных значений.
//* Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }


let obj = {
    a: 1,
    b: 2,
    c: 4,
    d: 5,
    f: null
};
function delField (obj, field) {
    delete obj[field];  
    return obj;
}
console.log(delField(obj, 'c'));

//Описание задачи: Напишите функцию, которая делает 
//поверхностную проверку объекта на пустоту.
//* Ожидаемый результат: ({}) => true,
//({ a: undefined }) => true,
//({ a: 1 }) => false
//* Пустые значения: '', null, NaN, undefined


function checkObj (obj) {
    let was_not_empty = false;
    
    for (let field in obj) {
        console.log(field);
        if (field != null || field != NaN || field != undefined || field != "") {
            was_not_empty = true;
            break;
        } 
    }

    console.log(!was_not_empty);
}
checkObj (obj);
console.log(checkObj({ a: undefined }));
console.log(checkObj({ a: 1 }));

// Напишите функцию, которая поверхностно сравнивает два объекта.
//* Ожидаемый результат: 
//True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true



// Напишите функцию, которая вызывает метод массива на заданный путь объекта.
/*
  * Описание задачи: Напишите функцию, которая вызывает метод массива на заданный путь объекта.
  * Ожидаемый результат: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
Пример использования: const data = { a: { b: [1, 2, 3] } }
console.log(invoke(data, 'a.b', 'splice', [1, 2])); // [2, 3]*/




//Напишите функцию, которая очищает массив от нежелательных значений, 
//таких как false, undefined, пустые строки, ноль, null.
//Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] =>[1, 2, 3]

function delArr(arr2) {
    for (let i = arr2.length - 1; i >=0; i--) {
        if (isNaN(arr2[i]) || arr2[i] === false || arr2[i] === undefined || arr2[i] === null || arr2[i] === "" || arr2[i] === 0) {
            arr2.splice(i);   
        }

    }
    console.log(arr2);
}
delArr([0, 1, false, 2, undefined, '', 3, null]);

//Напишите функцию, которая убирает повторяющиеся значения.
//* Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]


let arrayCount = [1, 2, 3, 1, 2];
function clearRepeat(arr) {
    let toClear = [];
    for (let char of arr) {
        if (!toClear.includes(char)) {
            toClear.push(char);
        }
    }
    return toClear;
}
console.log(clearRepeat(arrayCount));


let set = new Set(arrayCount);
console.log(Array.from(set));

//Напишите функцию, которая разделяет массив на части заданного размера.
//* Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

let arreySpl = [1, 2, 3, 4, 5];
function arrSplit(arr) {
    let arrSize = 3;
    let sliceArr = [];
    for (let i = 0; i <arr.length; i += arrSize) {
        sliceArr.push(arr.slice(i, i + arrSize));
    }
    
    return sliceArr;
}
console.log(arrSplit(arreySpl));
