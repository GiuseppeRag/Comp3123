import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin: boolean

  login(){
    if (this.isLogin) {
      this.isLogin = false;
      console.log('Logged Out')
    }
    else {
      this.isLogin = true;
      console.log('Logged In')
    }
  }

  constructor() { 
    this.isLogin = true;
  }
}
