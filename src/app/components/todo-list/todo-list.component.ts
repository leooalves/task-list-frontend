import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: any = null;

  constructor(private dataService: DataService, private angularFireAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  markAsDone(todo: any) {
    this.angularFireAuth.idToken.subscribe(token => {
      const data = { id: todo.id };
      this.dataService.markAsDone(data, token).subscribe(res => { todo.done = true });
    });
  }


  markAsUndone(todo: any) {
    this.angularFireAuth.idToken.subscribe(token => {
      const data = { id: todo.id };
      this.dataService.markAsUndone(data, token).subscribe(res => { todo.done = false });
    });
  }




}
