import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html'
})
export class AllComponent implements OnInit {
  public todos: any[] = [];

  constructor(
    private dataService: DataService,
    private angularFireAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.angularFireAuth.idToken.subscribe(token => {
      this.dataService.getAllTodos(token).subscribe((data: any) => {
        this.todos = data;
      })
    })

  }

}
