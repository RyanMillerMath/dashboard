import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'login-register-form',
  templateUrl: './login-register-form.component.html',
  styleUrls: ['./login-register-form.component.css']
})
export class LoginRegisterFormComponent implements OnInit {
  @Output() onHandleUser: EventEmitter<User> = new EventEmitter();
  user: User = {
    email: '',
    password: ''
  };
  
  constructor() {}

  ngOnInit(): void {}
  
  handleClick(user: User): void {
    this.onHandleUser.emit(user);
  }
}
