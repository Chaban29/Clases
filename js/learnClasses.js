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

let button = new Button('Hello');
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

let clock = new Clock ({template: 'h:m:s'});
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


