
//Interface of variables
interface Todo {
    id: number;
    title: string;
    done: boolean;
  }
  let todoItems: Todo[];

//Applyting interface to function parameter
function addTodo(todo: Todo): void {
todoItems.push(todo);
}

//Applyting interface to function return type
function fetchTodos(): Todo[] {
    const todos = [{
        id: 3,
        title: 'dolce',
        done: true
    }]
    return todos;
  }

//Interface of structure of function
interface sumFunction{
    (a:number, b:number): number
}
let add1: sumFunction;
add1 = function (a:number, b:number){
    return a + b
}

//Interface of indexing
interface stringArray{
  [index:number]: string
}
let arr1:stringArray
arr1[0] = 'coffee'

//Interface of dictionary
interface stringRegaxDictionary{
  [key:string]: RegExp
}
let obj1:stringRegaxDictionary = {
  css: /\.css$/,
  js: /\.js$/,
}
//obj1['css'] = 2


//interface Expansion
//Type can not be expanded
interface Person {
  name:string,
  age:number
}

interface Developer extends Person{
  language: string
}

const junior:Developer = {
  language : 'javascript',
  name : 'summer',
  age : 100
}