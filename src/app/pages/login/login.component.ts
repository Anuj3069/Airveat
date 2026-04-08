import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  isLoading = false;

  constructor(private router: Router) {}

  onSubmit() {
    this.errorMessage = '';
    this.isLoading = true;

    // Simulate network delay for better UX
    setTimeout(() => {
      // Hardcoded credentials as requested
      if (this.username === 'admin' && this.password === 'admin123') {
        // Successful login
        this.router.navigate(['/admin']); // Redirect to admin dashboard
      } else {
        // Failed login
        this.errorMessage = 'Invalid username or password. Try admin/admin123.';
        this.isLoading = false;
      }
    }, 800);
  }
}
