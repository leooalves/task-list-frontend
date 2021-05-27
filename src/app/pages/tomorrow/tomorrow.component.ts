import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-tomorrow',
  templateUrl: './tomorrow.component.html'
})
export class TomorrowComponent implements OnInit {

  public todos: any[] = [];

  constructor(
    private dataService: DataService,
    private angularFireAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.angularFireAuth.idToken.subscribe(token => {
      this.dataService.getTomorrowTodos(token).subscribe((data: any) => {
        this.todos = data;
      })
    })

  }

}
