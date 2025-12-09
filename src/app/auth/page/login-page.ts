import { Component } from '@angular/core';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login-page',
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './login-page.html',
})
export class LoginPage {}
