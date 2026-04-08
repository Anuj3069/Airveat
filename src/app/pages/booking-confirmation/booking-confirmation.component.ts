import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServiceDataService, Booking } from '../../services/service-data.service';

@Component({
  selector: 'app-booking-confirmation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="confirmation-page" id="booking-confirmation-page">
      <div class="container">
        <div class="confirmation-card animate-scale-in">
          <!-- Success Icon -->
          <div class="success-icon-wrap">
            <div class="success-circle">
              <span class="material-icons-outlined success-check">check</span>
            </div>
            <div class="success-ripple"></div>
          </div>

          <h1 class="conf-title">Booking Confirmed!</h1>
          <p class="conf-subtitle">Your service has been successfully booked. We'll send you a confirmation email shortly.</p>

          <!-- Booking Reference -->
          <div class="ref-badge" *ngIf="booking">
            <span class="ref-label">Reference:</span>
            <span class="ref-code">{{ booking.id }}</span>
          </div>

          <!-- Appointment Summary -->
          <div class="summary-card" *ngIf="booking">
            <h3>Appointment Summary</h3>
            <div class="summary-grid">
              <div class="summary-item">
                <span class="material-icons-outlined">home_repair_service</span>
                <div>
                  <span class="item-label">Service</span>
                  <strong>{{ booking.serviceName }}</strong>
                </div>
              </div>
              <div class="summary-item">
                <span class="material-icons-outlined">calendar_today</span>
                <div>
                  <span class="item-label">Date</span>
                  <strong>{{ formatDate(booking.date) }}</strong>
                </div>
              </div>
              <div class="summary-item">
                <span class="material-icons-outlined">schedule</span>
                <div>
                  <span class="item-label">Time</span>
                  <strong>{{ booking.time }}</strong>
                </div>
              </div>
              <div class="summary-item">
                <span class="material-icons-outlined">location_on</span>
                <div>
                  <span class="item-label">Address</span>
                  <strong>{{ booking.address }}</strong>
                </div>
              </div>
              <div class="summary-item">
                <span class="material-icons-outlined">person</span>
                <div>
                  <span class="item-label">Professional</span>
                  <strong>{{ booking.professional }}</strong>
                </div>
              </div>
              <div class="summary-item">
                <span class="material-icons-outlined">paid</span>
                <div>
                  <span class="item-label">Price</span>
                  <strong>{{ booking.price }}+</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- No booking fallback -->
          <div class="no-booking" *ngIf="!booking">
            <span class="material-icons-outlined" style="font-size:48px; color: var(--color-text-light);">receipt_long</span>
            <p>No recent booking found. Please book a service first.</p>
          </div>

          <!-- Actions -->
          <div class="conf-actions">
            <a routerLink="/services" class="btn btn-outline btn-lg" id="view-details-btn">
              <span class="material-icons-outlined">visibility</span>
              Browse More Services
            </a>
            <a routerLink="/" class="btn btn-primary btn-lg" id="back-home-btn">
              <span class="material-icons-outlined">home</span>
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .confirmation-page {
      background: var(--color-bg-light);
      min-height: calc(100vh - var(--header-height));
      display: flex;
      align-items: center;
      padding: 60px 0;
    }

    .confirmation-card {
      max-width: 640px;
      margin: 0 auto;
      background: white;
      border-radius: var(--radius-xl);
      padding: 56px 48px;
      text-align: center;
      box-shadow: var(--shadow-xl);
    }

    .success-icon-wrap {
      position: relative;
      width: 96px;
      height: 96px;
      margin: 0 auto 28px;
    }

    .success-circle {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--color-success) 0%, #34D399 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 2;
      animation: scaleIn 0.5s ease forwards;
    }

    .success-check {
      font-size: 48px;
      color: white;
    }

    .success-ripple {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 96px;
      height: 96px;
      border-radius: 50%;
      background: rgba(5, 150, 105, 0.15);
      transform: translate(-50%, -50%);
      animation: pulse 2s infinite;
      z-index: 1;
    }

    .conf-title {
      font-size: 32px;
      font-weight: 800;
      color: var(--color-text-primary);
      margin-bottom: 12px;
    }

    .conf-subtitle {
      font-size: 15px;
      color: var(--color-text-secondary);
      line-height: 1.7;
      margin-bottom: 24px;
      max-width: 440px;
      margin-left: auto;
      margin-right: auto;
    }

    .ref-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 20px;
      background: var(--color-bg-light);
      border-radius: var(--radius-full);
      margin-bottom: 32px;
    }

    .ref-label {
      font-size: 13px;
      color: var(--color-text-secondary);
    }

    .ref-code {
      font-size: 14px;
      font-weight: 700;
      color: var(--color-text-primary);
      font-family: monospace;
    }

    .summary-card {
      background: var(--color-bg-light);
      border-radius: var(--radius-lg);
      padding: 28px;
      margin-bottom: 32px;
      text-align: left;
    }

    .summary-card h3 {
      font-size: 17px;
      font-weight: 700;
      margin-bottom: 20px;
      text-align: center;
      color: var(--color-text-primary);
    }

    .summary-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .summary-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 12px;
      background: white;
      border-radius: var(--radius-md);
    }

    .summary-item .material-icons-outlined {
      font-size: 22px;
      color: var(--color-accent-red);
      margin-top: 2px;
    }

    .summary-item div {
      display: flex;
      flex-direction: column;
    }

    .item-label {
      font-size: 12px;
      color: var(--color-text-secondary);
      margin-bottom: 2px;
    }

    .summary-item strong {
      font-size: 14px;
    }

    .no-booking {
      padding: 40px;
      color: var(--color-text-secondary);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }

    .conf-actions {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    @media (max-width: 640px) {
      .confirmation-card {
        padding: 36px 24px;
      }

      .summary-grid {
        grid-template-columns: 1fr;
      }

      .conf-actions {
        flex-direction: column;
      }

      .conf-actions .btn {
        width: 100%;
      }
    }
  `]
})
export class BookingConfirmationComponent implements OnInit {
  booking: Booking | undefined;

  constructor(private serviceData: ServiceDataService) {}

  ngOnInit(): void {
    this.booking = this.serviceData.getLatestBooking();
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
