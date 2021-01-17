# this repo is me trying to study design patterns in JS

## creational patterns
Creational patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.


* #### constructor pattern
  * A constructor is a special method used to initialize a newly created object once memory has been allocated for it.
  * Object constructors are used to create specific types of objects - both preparing the object for use and accepting arguments which a constructor can use to set the values of member properties and methods when the object is first created.

``` js
let Task = function(name) {
 this.name = name;
 this.completed = false;
}

Task.prototype.completing = function () {
 this.completed = !this.completed;
 console.log(this.name + (this.completed ? ' completed' : ' not completed') );
}

Task.prototype.editTask = function (newName) {
 this.name = newName;
 console.log(this);
}

let task1 = new Task('test');
console.log(task1);
task1.completing();
task1.editTask('task 0')

// with es6 class

class Task{
 constructor(name){
   this.name = name;
   this.completed = false;
 }
 completing() {
   this.completed = !this.completed;
   console.log(this.name + (this.completed ? ' completed' : ' not completed') );
 }
 editTask(newName) {
   this.name = newName;
   console.log(this);
 }
}
let task1 = new Task('test');
console.log(task1);
task1.completing();
task1.editTask('task0')
```
---
* #### module pattern
  * Modules are an integral piece of any robust application's architecture and typically help in keeping the units of code for a project both cleanly separated and organized.
  * Module pattern allows you to make some private variables

``` js
let myTasks = [
 {id: 1, name: 'task1', completed: false},
 {id: 2, name: 'task2', completed: false},
 {id: 3, name: 'task3', completed: false}
]

let Task = (function () {
 let privatVar = 'test';
 let getTask = function (id) {
   return myTasks.find(task => task.id === id) || 'not found'
 }
 let editTask = function (id, newName) {
   myTasks.forEach((item) => {
     if(item.id === id){
       item.name = newName;
     }
   });
 }
 let completing = function (id){
   myTasks.forEach((item) => {
     if(item.id === id){
       item.completed = !this.completed;
     }
   });
 }
 let returnThePrivateVar = ()=>{
   return privatVar;
 }
 return {
   getTask,
   editTask,
   completing,
   privatVar: returnThePrivateVar
 }
})();

Task.editTask(1, 'task 0');
Task.completing(1);
Task.completing(2);
console.log(Task.getTask(1));
console.log(Task.getTask(2));
console.log(Task.privatVar());
```
---
* #### factory pattern
  * The Factory pattern is another creational pattern concerned with the notion of creating objects. Where it differs from the other patterns in its category is that it doesn't explicitly require us to use a constructor. Instead, a Factory can provide a generic interface for creating objects, where we can specify the type of factory object we wish to be created.

```js
function NormalTask(name){
  this.name = name;
  this.type = 'normal'
}

function UrgentTask(name){
  this.name = name;
  this.type = 'urgent';
}

function TaskFactory(){
  this.createTask = (name, type)=>{
    if(type === 'normal'){
      return new NormalTask(name);
    } else if ( type === 'urgent'){
      return new UrgentTask(name);
    }
  }
}

let factory = new TaskFactory();

let normalTask = factory.createTask('task 1', 'normal');
let urgentTask = factory.createTask('task 2', 'urgent');

function logTasks(){
  console.log(`this task is ${this.name} and the type of this task is ${this.type}`);
}

logTasks.call(normalTask);
logTasks.call(urgentTask);
```

---
* #### builder pattern
  * Builder pattern aims to “Separate the construction of a complex object from its representation so that the same construction process can create different representations.” It is used to construct a complex object step by step and the final step will return the object. The process of constructing an object should be generic so that it can be used to create different representations of the same object.


```js
class Address {
  constructor(zip, street) {
    this.zip = zip
    this.street = street
  }
}

class User {
  constructor(name) {
    this.name = name
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name)
  }

  setAge(age) {
    this.user.age = age
    return this
  }

  setPhone(phone) {
    this.user.phone = phone
    return this
  }

  setAddress(address) {
    this.user.address = address
    return this
  }

  build() {
    return this.user
  }
}

const builder = new UserBuilder('Bob')
const user = builder.setAge(24).setAddress(new Address('12345', 'Main St.')).build()

console.log(user);

// another way
// you can use a default value here easily
class Address {
  constructor(zip, street) {
    this.zip = zip
    this.street = street
  }
}

class User {
  constructor(name, { age, phone = 'default phone', address} = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address || {zip: 'default zip', street: 'default stret' };
  }
}

let user = new User('Bob', {age: 24, address: {zip:'000000', street: 'Main st.'}})
console.log(user);

```
---
## Resources

* [Learning JavaScript Design Patterns book by Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
* [Web Dev Simplified playlist](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_CthENcPCM0Dww6a5XYC7f)
* [Practical Design Patterns in JavaScript course](https://app.pluralsight.com/library/courses/javascript-practical-design-patterns)
