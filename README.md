# this repo is me trying to study design patterns in JS

## creational patterns

* #### constructor pattern

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


* #### module pattern

``` js
let myTasks = [
 {id: 1, name: 'task1', completed: false},
 {id: 2, name: 'task2', completed: false},
 {id: 3, name: 'task3', completed: false}
]

let Task = (function () {
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
 return {
   getTask,
   editTask,
   completing
 }
})();

Task.editTask(1, 'task 0');
Task.completing(1);
Task.completing(2);
console.log(Task.getTask(1));
console.log(Task.getTask(2));
```

* #### factory pattern

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
