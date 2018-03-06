class People {
  constructor() {
    this.no = round(random(1, 3));
    this.persons = [];
    for (let i = 0; i <= this.no; i++) {
      this.persons.push(new Person(round(random(-10, 5)), 0));
    }
  }

  show(degs, dy) {
    for (let i = 0; i <= this.no; i++) {
      this.persons[i].show(degs, dy);
    }
  }

  fall() {
    for (let i = 0; i <= this.no; i++) {
      this.persons[i].fall();
    }   
  }
}