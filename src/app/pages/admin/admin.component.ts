import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  serviceName = '';
  category = 'home-cleaning';
  price = '';
  priceType = 'starts';
  description = '';
  badge = '';

  isSubmitting = false;
  successMessage = '';

  onSubmit() {
    this.isSubmitting = true;
    this.successMessage = '';

    // Simulate API call to save service
    setTimeout(() => {
      this.isSubmitting = false;
      this.successMessage = `Service "${this.serviceName}" added successfully!`;
      
      // Reset form
      this.serviceName = '';
      this.category = 'home-cleaning';
      this.price = '';
      this.priceType = 'starts';
      this.description = '';
      this.badge = '';
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    }, 1000);
  }
}
