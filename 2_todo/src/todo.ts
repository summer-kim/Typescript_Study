/* eslint-disable @typescript-eslint/no-unused-vars */
let todoItems: { id: number; title: string; done: boolean }[];

function fetchTodoItems(): { id: number; title: string; done: boolean }[] {
  const todos = [
    { id: 1, title: 'work out', done: false },
    { id: 2, title: 'dinner', done: false },
    { id: 3, title: 'playing tennis', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): { id: number; title: string; done: boolean }[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: { id: number; title: string; done: boolean }): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(
  index: number,
  todo: { id: number; title: string; done: boolean }
): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): { id: number; title: string; done: boolean } {
  return todoItems[0];
}

function showCompleted(): { id: number; title: string; done: boolean }[] {
  return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  [
    { id: 4, title: 'hungry', done: false },
    { id: 5, title: 'tennis', done: false },
  ].forEach(todo => addTodo(todo));
}

// util function
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
