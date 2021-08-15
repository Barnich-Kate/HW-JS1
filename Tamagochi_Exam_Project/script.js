let sleepButton = document.querySelector('#button_sleep');
let eatButton = document.querySelector('#button_eat');
let peeButton = document.querySelector('#button_pee');

let sleepProgress = document.querySelector('#progress_sleep');
let eatProgress = document.querySelector('#progress_eat');
let peeProgress = document.querySelector('#progress_pee');

let eatCount = document.querySelector('#counter_eat');
let sleepCount = document.querySelector('#counter_sleep');
let peeCount = document.querySelector('#counter_pee');

let pet = new Pet (); //нам нужно в начале игры создавать нового питомца объект, у которого будут храниться показатели, функции

sleepButton.onclick = function () {
    pet.increase_sleep (); //чтобы увеличить показатель сна
    sleepProgress.style.width = pet.sleep + "%"; //меняем ширину прогресс бара, визуализируем изменения
    sleepCount.innerHTML = pet.sleep + "%";
}

eatButton.onclick = function () {
    pet.increase_eat (); //поэтапно вызываем методы
    eatProgress.style.width = pet.eat + "%";
    eatCount.innerHTML = pet.eat + "%"; 
}

peeButton.onclick = function () {
    pet.increase_pee ();
    peeProgress.style.width = pet.pee + "%";
    peeCount.innerHTML = pet.pee + "%";
}

let sleepTimeout = setInterval (function() {
    pet.decrease_sleep ();
    sleepProgress.style.width = pet.sleep + "%"; //меняем ширину прогресс бара, визуализируем изменения
    sleepCount.innerHTML = pet.sleep + "%";
    }, 500);

let eatTimeout = setInterval (function() {
    pet.decrease_eat ();
    eatProgress.style.width = pet.eat + "%"; //меняем ширину прогресс бара, визуализируем изменения, % величина в которой мы измеряем ширину
    eatCount.innerHTML = pet.eat + "%";
    }, 1000);

let peeTimeout = setInterval (function() {
    pet.decrease_pee ();
    peeProgress.style.width = pet.pee + "%"; //меняем ширину прогресс бара, визуализируем изменения
    peeCount.innerHTML = pet.pee + "%"; 
    }, 1200);



