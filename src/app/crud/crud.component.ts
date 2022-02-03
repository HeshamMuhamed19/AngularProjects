import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nextId = 4;
  todos = [
    {
      id: 1,
      label: 'Bring Milk',
      done: false
    },
    {
      id: 2,
      label: 'Pay mobile bill',
      done: false
    },
    {
      id: 3,
      label: 'Bring Milk',
      done: true
    },
  ];

  // Delete Todo
  delete(todo : any) {
    // this.todos = this.todos.filter(t => t.id !== todo.id);
    const Id = this.todos.indexOf(todo);
    this.todos.splice(Id , 1);
  }

  // Add Todo
  add(newTodoLabel: any) {
    let newTodo = {
      id: this.nextId,
      label: newTodoLabel,
      done: false
    };
    this.todos.push(newTodo);
    this.nextId++;
  }

  // Completed
  toggle(todo: { done: boolean; }) {
    todo.done = !todo.done;
  }

}
