"use strict";

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}

// let user = new User('Roman');
console.log(user);
user.sayHi();

console.log(typeof (User));

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}

console.log(typeof User);

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}

console.log(typeof User);
console.log(User === User.prototype.constructor);
console.log(User.prototype);
console.log(Object.getOwnPropertyNames(User.prototype));

class User {
  constructor() {}
}

alert(User);

let User = class {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `Hello ${this.name}`;
  }
};

const userGreet = new User('Roman');
console.log(userGreet.sayHi());

function makeClass(phrase) {
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}

let User = makeClass('Hello');

new User().sayHi();

class User {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      alert("Name is really short");
      return;
    }
    return this._name = value;
  }
}

// let user = new User('Roman');
console.log(user.name);

user = new User('');

class User {
  name = "Roman";
  sayHi() {
    alert(`Hello ${this.name}`);
  }
}
new User().sayHi();
class User {
  name = prompt('What is your name?', '');
}
// let user = new User();
console.log(user.name);

class Button {
  constructor(value) {
    this.value = value;
  }
  click() {
    console.log(this.value);
  }
}

// let button = new Button('Hello');
const buttonBinder = Button.bind(button);
setTimeout(buttonBinder.click, 2000);

class Clock {
  constructor({ template }) {
    this.template = template;
  }
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let sec = date.getSeconds();
    if (sec < 10) mins = "0" + sec;

    let output = this.template
      .replace("h", hours)
      .repalce("m", mins)
      .replace("s", sec);

    console.log(output);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

// let clock = new Clock ({template: 'h:m:s'});
clock.start();

class CreateUser {
  constructor(name) {
    this.name = name;
  }
}

// const user = new CreateUser('Roman');
console.log(user);

class CreateUser {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
  userFullName() {
    return `${this.name} ${this.surname}`;
  }
}

const user = new CreateUser("Roman", "Chaban");

console.log(user.userFullName());

user.fullName = "Brad Newman";
console.log(user.userFullName());

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `${this.name}`;
  }
}

console.log(typeof User);
console.log(User === User.prototype.constructor);
console.log(Object.getOwnPropertyNames(User.prototype));

function User(name, age, country) {
  this.name = name;
  this.age = age;
  this.country = country;
}

User.prototype.sayHi = function () {
  return `${this.name}`;
};

const user = new User("Roman", 22, "Ukraine");

console.log(user, typeof user);

for (let key in user) {
  console.log(user[key], key);
}

function MakeClass(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

let User = MakeClass("Hello");

new User().sayHi();

class MakeUser {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      alert("Your name is really short");
      return;
    }
    this._name = value;
  }
}

let user = new MakeUser('Roman');
console.log(user.name);

class User {
  name = 'Roman';
  ["say" + "Hi"]() {
    return `My name is ${this.name} My age is ${100 - 78}`;
  }
}

let userAge = new User();

console.log(userAge.sayHi());

class User {
  name = prompt("What is your name?", "");
}

let user = new User();

console.log(user.name);

class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    alert(this.value);
  };
}

// let button = new Button('Hello');

setTimeout(button.click, 1500);

class CreateUser {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

let user = new CreateUser("Roman", "Chaban");

console.log(user);
console.log(user.name);
console.log(user.surname);

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `Hello ${this.name}`;
  }
}

const user = new User("Roman");
console.log(user.sayHi());

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    `Hello, my name is ${this.name}`;
  }
}

console.log(typeof User);

class CreateUser {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  userInformation() {
    return `User name is ${this.name}, User surname is ${this.surname}`;
  }
}

const user = new CreateUser('Roman', 'Chaban');

console.log(user.userInformation());

console.log(typeof CreateUser);
console.log(CreateUser === CreateUser.prototype.constructor);
console.log(Object.getOwnPropertyNames(CreateUser.prototype));

function User(name, surname) {
  this.name = name;
  this.surname = surname;
}

User.prototype.sayHi = function () {
  console.log(this.name);
}
let user = new User('Roman');
user.sayHi();
let User = class UserGreeting {
  sayHi() {
    return `Hello world!`;
  }
};
let user = new User();
console.log(user.sayHi());
alert(UserGreeting);

function MakeClass(phrase) {
  return class {
    sayHi() {
      return console.log(`Hello ${phrase}`);
    }
  };
}

let User = MakeClass("Java Script!");

new User().sayHi();

class User {
  constructor(name) {
    this.name = name;
  }
  get userFullInformation() {
    return this._name;
  }
  set userFullInformation(value) {
    if (value.length < 4) {
      alert("Your name is really short!");
      return;
    }
    this._name = value;
  }
}

let user = new User("Roman");
console.log(user.name);

class User {
  ["say" + "Hi"]() {
    alert("Hello");
  }
}

const user = new User();
console.log()

class User {
  name = "Roman";
  userName() {
    return alert(`Hello ${this.name}`);
  }
}

const user = new User();

user.userName();
console.log(User.prototype.name);

class User {
  name = prompt('What is your name?', '');
}
let user = new User();
console.log(user.name);
class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    alert(this.value);
  }
}
// let button = new Button('Hello');
setTimeout(button.click, 1000);

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}

let user = new User('Roman');

user.sayHi();
console.log(user);

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(`Hello ${this.name}`);
  }
  greet() {
    console.log(`${this.name} likes to learn JavaScript`);
  }
}

console.log(User === User.prototype.constructor);
console.log(typeof User);
console.log(Object.getOwnPropertyNames(User.prototype));

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  return `Hello, my name is ${this.name},
  and i have a ${this.age} years old`;
};

const user = new User('Roman', 22);

console.log(user.sayHi());

class User {
  constructor(name) {
    this.name = name;
  }
}

console.log(typeof User);

const User = class {
  sayHi() {
    return "Hello";
  }
};

const makeUser = new User();
console.log(makeUser.sayHi());

function MakeClass(phrase) {
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}

let User = MakeClass('Hello');

new User().sayHi();

class CreateNewUser {
  constructor(name) {
    this.name = name;
  }
  get userName() {
    this._name;
  }
  set userName(value) {
    if (value.length < 4) {
      alert("Your name is very small, try to long name");
      return;
    }
    this._name = value;
  }
}
let user = new CreateNewUser('Roman');
console.log(user.name);
user.name = '';
console.log(user.name);

class Animal {
  constructor(name) {
    this.name = name;
  }
  age = 3;
  ["animal" + "Say"]() {
    return `${this.name} say Gav-Gav`;
  }
  ["animal" + "Age"]() {
    return `dog age is ${this.age} years`;
  }
  animalName() {
    return `Dog name is ${this.name}`;
  }
}

let dog = new Animal("Bobby");

console.log(dog.animalSay());

const dogAge = dog.animalAge();
console.log(dogAge);

console.log(dog.animalName());

class User {
  name = prompt('What is your name?', '');
}

const user = new User();

console.log(user.name);

class Button {
  constructor(value) {
    this.value = value;
  }
  click() {
    alert(this.value);
  }
}

let button = new Button('Hello');

let bindContext = button.click.bind(button);

setTimeout(bindContext, 1000);

class Clock {
  constructor({ template }) {
    this.template = template;
  }
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let sec = date.getSeconds();
    if (sec < 10) sec = "0" + sec;

    let output = this.template
    .replace('h', hours)
    .replace('m', mins)
    .replace('s', sec);
    console.log(output);
  };
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render, 1000);
  }
}

let clock = new Clock({template: 'h:m:s'});
clock.start();
