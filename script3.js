class Person {
    constructor(name, age, email,mobileno) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.mobileno = mobileno;
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Email: ${this.email}`);
        console.log(`Mobile: ${this.mobileno}`);
    }
}

var person1 = new Person("Aadhish", 23, "aadhishmoorthy@gmail.com","6000070000");

person1.displayInfo();
