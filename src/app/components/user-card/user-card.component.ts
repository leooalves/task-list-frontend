import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  public user: any = {
    name: "",
    picture: "https://via.placeholder.com/200"
  }

  constructor(private angularFireAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.angularFireAuth.user.subscribe((data) => {
      this.user.name = data?.displayName;
      this.user.picture = data?.photoURL;
    })
  }

  logout() {
    this.angularFireAuth.signOut();
  }

}
