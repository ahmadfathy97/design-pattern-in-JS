/**************************
*** creational patterns ***
**************************/

// 1. constructor pattern //

// new keyword
// create a new object
// links the object to object prototype
// binds 'this' to the new object scope
// returns 'this'

// ********************* //

// let Task = function(name) {
//   this.name = name;
//   this.completed = false;
// }
//
// Task.prototype.completing = function () {
//   this.completed = !this.completed;
//   console.log(this.name + (this.completed ? ' completed' : ' not completed') );
// }
// Task.prototype.editTask = function (newName) {
//   this.name = newName;
//   console.log(this);
// }
//
// let task1 = new Task('test');
// console.log(task1);
// task1.completing();
// task1.editTask('task0')

// *********** with classes *************//

// class Task{
//   constructor(name){
//     this.name = name;
//     this.completed = false;
//   }
//   completing() {
//     this.completed = !this.completed;
//     console.log(this.name + (this.completed ? ' completed' : ' not completed') );
//   }
//   editTask(newName) {
//     this.name = newName;
//     console.log(this);
//   }
// }
//
// let task1 = new Task('test');
// console.log(task1);
// task1.completing();
// task1.editTask('task0')


// 2. module pattern //

// let myTasks = [
//  {id: 1, name: 'task1', completed: false},
//  {id: 2, name: 'task2', completed: false},
//  {id: 3, name: 'task3', completed: false}
// ]
//
// let Task = (function () {
//  let privatVar = 'test';
//  let getTask = function (id) {
//    return myTasks.find(task => task.id === id) || 'not found'
//  }
//  let editTask = function (id, newName) {
//    myTasks.forEach((item) => {
//      if(item.id === id){
//        item.name = newName;
//      }
//    });
//  }
//  let completing = function (id){
//    myTasks.forEach((item) => {
//      if(item.id === id){
//        item.completed = !this.completed;
//      }
//    });
//  }
//  let returnThePrivateVar = ()=>{
//    return privatVar;
//  }
//  return {
//    getTask,
//    editTask,
//    completing,
//    privatVar: returnThePrivateVar
//  }
// })();
//
// Task.editTask(1, 'task 0');
// Task.completing(1);
// Task.completing(2);
// console.log(Task.getTask(1));
// console.log(Task.getTask(2));
// console.log(Task.privatVar());


// factory

// function NormalTask(name){
//   this.name = name;
//   this.type = 'normal'
// }
//
// function UrgentTask(name){
//   this.name = name;
//   this.type = 'urgent';
// }
//
// function TaskFactory(){
//   this.createTask = (name, type)=>{
//     if(type === 'normal'){
//       return new NormalTask(name);
//     } else if ( type === 'urgent'){
//       return new UrgentTask(name);
//     }
//   }
// }
//
// let factory = new TaskFactory();
//
// let normalTask = factory.createTask('task 1', 'normal');
// let urgentTask = factory.createTask('task 2', 'urgent');
// function logTasks(){
//   console.log(`this task is ${this.name} and the type of this task is ${this.type}`);
// }
//
// logTasks.call(normalTask);
// logTasks.call(urgentTask);

// builder pattern

// class Address {
//   constructor(zip, street) {
//     this.zip = zip
//     this.street = street
//   }
// }
//
// class User {
//   constructor(name) {
//     this.name = name
//   }
// }
//
// class UserBuilder {
//   constructor(name) {
//     this.user = new User(name)
//   }
//
//   setAge(age) {
//     this.user.age = age
//     return this
//   }
//
//   setPhone(phone) {
//     this.user.phone = phone
//     return this
//   }
//
//   setAddress(address) {
//     this.user.address = address
//     return this
//   }
//
//   build() {
//     return this.user
//   }
// }
//
// const builder = new UserBuilder('Bob')
// const user = builder.setAge(24).setAddress(new Address('12345', 'Main St.')).build()
//
// console.log(user);

// another way

// you can use a default value here easly
// class Address {
//   constructor(zip, street) {
//     this.zip = zip
//     this.street = street
//   }
// }
//
// class User {
//   constructor(name, { age, phone = 'default phone', address} = {}) {
//     this.name = name;
//     this.age = age;
//     this.phone = phone;
//     this.address = address || {zip: 'default zip', street: 'default stret' };
//   }
// }
//
// let user = new User('Bob', {age: 24, address: {zip:'000000', street: 'Main st.'}})
// console.log(user);
