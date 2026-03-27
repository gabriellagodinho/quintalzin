import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  email = '';
  senha = '';

  constructor(private router: Router) {}

  login() {

    console.log(this.email, this.senha);

    this.router.navigate(['/produtos']);

  }

}