import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html'
})
export class TodayComponent implements OnInit {
  public todos: any[] = [];

  constructor(
    private dataService: DataService,
    private angularFireAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.angularFireAuth.idToken.subscribe(token => {
      this.dataService.getTodayTodos(token).subscribe((data: any) => {
        this.todos = data;
      })
    })

  }
}
