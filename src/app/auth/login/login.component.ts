import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { User } from '../shared/User';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void { }

  handleLogin(user: User): void {
    this.authService.login(user.email, user.password);
  }
}
