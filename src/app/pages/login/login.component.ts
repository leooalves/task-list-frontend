import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private angularfireAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  login() {
    this.angularfireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

  }
}