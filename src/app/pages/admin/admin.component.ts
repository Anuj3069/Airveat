import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceDataService, ApiService } from '../../services/service-data.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  serviceName = '';
  category = 'home-cleaning';
  price = '';
  priceType = 'starts';
  description = '';
  badge = '';

  isSubmitting = false;
  successMessage = '';

  // API Services
  apiServices: ApiService[] = [];
  isLoadingApi = false;
  apiError = '';

  constructor(private serviceData: ServiceDataService) {}

  ngOnInit() {
    this.fetchApiServices();
  }

  fetchApiServices() {
    this.isLoadingApi = true;
    this.apiError = '';
    this.serviceData.getApiServices().subscribe({
      next: (data) => {
        this.apiServices = data;
        this.isLoadingApi = false;
      },
      error: (err) => {
        console.error('Error fetching services:', err);
        this.apiError = 'Failed to load live services. Please try again later.';
        this.isLoadingApi = false;
      }
    });
  }

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
