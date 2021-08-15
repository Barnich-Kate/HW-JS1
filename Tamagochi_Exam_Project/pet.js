//Класс, который отвечает за тамагочи для каждого класса нужно прописывать конструктор, функция вызывается при создании нового объекта класса
//поля хранятся внутри класса конструктора

class Pet {
  constructor() {
      this.eat = 100;
      this.sleep = 100;
      this.pee = 100;
  }
  
increase_eat () {
    this.eat += 10; 
    if (this.eat > 100) {
        this.eat = 100;
    }
}
  
increase_sleep () {
    this.sleep += 10;
    if (this.sleep > 100) {
        this.sleep = 100;
    }
}
   
increase_pee () {
    this.pee += 10;
    if (this.pee > 100) {
        this.pee = 100;
    }
}

decrease_eat () {
    this.eat -= 5;
    if (this.eat <= 0) {
      this.kill();  
    }
}

decrease_sleep () {
    this.sleep -= 5;
    if (this.sleep <= 0) {
        this.kill();  
      }
}

decrease_pee () {
    this.pee -= 5;
    if (this.pee <= 0) {
        this.kill();  
      }
}

kill () {
    alert ("It's ok! I'm just dead! Try to kill me again!");
    this.eat = 100;
    this.sleep = 100;
    this.pee = 100;
}
}


