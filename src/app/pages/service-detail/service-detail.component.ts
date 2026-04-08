import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { ServiceDataService, Service } from '../../services/service-data.service';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="detail-page" *ngIf="service" id="service-detail-page">
      <div class="container">
        <!-- Breadcrumb -->
        <nav class="breadcrumb animate-fade-in" id="breadcrumb">
          <a routerLink="/">Home</a>
          <span class="material-icons-outlined">chevron_right</span>
          <a routerLink="/services">Services</a>
          <span class="material-icons-outlined">chevron_right</span>
          <span class="current">{{ service.name }}</span>
        </nav>

        <div class="detail-grid">
          <!-- Left Content -->
          <div class="detail-content animate-fade-in-up">
            <!-- Hero Image -->
            <div class="detail-hero" [style.background]="getGradient(service.id)">
              <span class="material-icons-outlined" style="font-size:80px; color:rgba(255,255,255,0.85)">
                {{ getCategoryIcon(service.category) }}
              </span>
              <span class="detail-badge" *ngIf="service.badge">{{ service.badge }}</span>
            </div>

            <!-- Title & Rating -->
            <div class="detail-header">
              <div>
                <h1 class="detail-title">{{ service.name }}</h1>
                <div class="detail-meta">
                  <div class="rating">
                    <span class="stars">
                      <span class="material-icons-outlined star-filled" *ngFor="let s of getStars(service.rating || 0)">star</span>
                      <span class="material-icons-outlined star-empty" *ngIf="(service.rating || 0) < 5">star_half</span>
                    </span>
                    <span class="rating-text">{{ service.rating }} ({{ service.reviewCount }} reviews)</span>
                  </div>
                  <span class="verified-badge">
                    <span class="material-icons-outlined">verified</span>
                    Verified Service
                  </span>
                </div>
              </div>
              <div class="detail-price-tag">
                {{ service.price }}
                <span class="price-type" *ngIf="service.priceType === 'hourly'">/ hour</span>
                <span class="price-type" *ngIf="service.priceType === 'starts'">onwards</span>
              </div>
            </div>

            <p class="detail-description">{{ service.description }}</p>

            <!-- What's Included -->
            <div class="included-section">
              <h2>What's Included</h2>
              <div class="included-grid">
                <div class="included-item" *ngFor="let item of service.included">
                  <span class="material-icons-outlined check-icon">check_circle</span>
                  <span>{{ item }}</span>
                </div>
              </div>
            </div>

            <!-- Duration -->
            <div class="info-cards">
              <div class="info-card">
                <span class="material-icons-outlined">schedule</span>
                <div>
                  <strong>Duration</strong>
                  <span>{{ service.duration }}</span>
                </div>
              </div>
              <div class="info-card">
                <span class="material-icons-outlined">workspace_premium</span>
                <div>
                  <strong>Warranty</strong>
                  <span>30-day service guarantee</span>
                </div>
              </div>
              <div class="info-card">
                <span class="material-icons-outlined">support_agent</span>
                <div>
                  <strong>Support</strong>
                  <span>24/7 customer support</span>
                </div>
              </div>
            </div>

            <!-- Reviews -->
            <div class="reviews-section">
              <h2>Customer Reviews</h2>
              <div class="review-card" *ngFor="let review of reviews">
                <div class="review-header">
                  <div class="review-avatar" [style.background]="review.color">{{ review.initials }}</div>
                  <div>
                    <strong>{{ review.name }}</strong>
                    <div class="review-stars">
                      <span class="material-icons-outlined star-filled" *ngFor="let s of getStars(review.rating)">star</span>
                    </div>
                  </div>
                  <span class="review-date">{{ review.date }}</span>
                </div>
                <p class="review-text">{{ review.text }}</p>
              </div>
            </div>
          </div>

          <!-- Right Sidebar — Book via App Widget -->
          <div class="booking-widget animate-slide-in" id="booking-widget">
            <div class="widget-card">

              <!-- Price Summary -->
              <div class="widget-summary">
                <div class="summary-row">
                  <span>Service</span>
                  <strong>{{ service.name }}</strong>
                </div>
                <div class="summary-row">
                  <span>Price</span>
                  <strong>{{ service.price }}{{ service.priceType === 'hourly' ? '/hr' : '+' }}</strong>
                </div>
              </div>

              <!-- App Download CTA -->
              <div class="app-cta">
                <div class="app-cta-icon">
                  <span class="material-icons-outlined">phone_iphone</span>
                </div>
                <h3>Book via the App</h3>
                <p class="widget-subtitle">
                  Download the Airveat app to book this service, track your professional in real-time, and pay securely.
                </p>

                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer"
                   class="store-btn play-store" id="widget-play-store-btn">
                  <div class="store-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.18 23.76c.42.24.9.24 1.32 0l10.68-6.18-2.4-2.4-9.6 8.58zm15.78-12.78L16.5 9.54l-2.82 2.46 2.82 2.46 2.52-1.44c.72-.42.72-1.44-.06-2.04zM2.1.24C1.8.48 1.62.84 1.62 1.32v21.36c0 .48.18.84.48 1.08L13.5 12 2.1.24zm10.08 10.44L3.18.24c-.42-.24-.9-.24-1.32 0L13.5 12l-1.32-1.32z"/>
                    </svg>
                  </div>
                  <div class="store-text">
                    <span class="store-label">GET IT ON</span>
                    <span class="store-name">Google Play</span>
                  </div>
                </a>

                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                   class="store-btn app-store" id="widget-app-store-btn">
                  <div class="store-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <div class="store-text">
                    <span class="store-label">Download on the</span>
                    <span class="store-name">App Store</span>
                  </div>
                </a>
              </div>

              <!-- Trust badges -->
              <div class="trust-badges">
                <div class="trust-item">
                  <span class="material-icons-outlined">verified_user</span>
                  <span>Secure Booking</span>
                </div>
                <div class="trust-item">
                  <span class="material-icons-outlined">replay</span>
                  <span>Free Cancellation</span>
                </div>
                <div class="trust-item">
                  <span class="material-icons-outlined">support_agent</span>
                  <span>24/7 Support</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .detail-page {
      background: var(--color-bg-light);
      padding: 24px 0 80px;
    }

    .breadcrumb {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 24px;
      font-size: 14px;
      color: var(--color-text-secondary);
    }

    .breadcrumb a:hover {
      color: var(--color-accent-red);
    }

    .breadcrumb .current {
      color: var(--color-text-primary);
      font-weight: 600;
    }

    .breadcrumb .material-icons-outlined {
      font-size: 16px;
      color: var(--color-text-light);
    }

    .detail-grid {
      display: grid;
      grid-template-columns: 1fr 380px;
      gap: 32px;
      align-items: flex-start;
    }

    /* Content */
    .detail-hero {
      width: 100%;
      aspect-ratio: 2/1;
      border-radius: var(--radius-xl);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin-bottom: 24px;
    }

    .detail-badge {
      position: absolute;
      top: 16px;
      left: 16px;
      background: var(--color-accent-red);
      color: white;
      font-size: 12px;
      font-weight: 700;
      padding: 6px 14px;
      border-radius: var(--radius-sm);
      text-transform: uppercase;
    }

    .detail-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 16px;
      gap: 16px;
    }

    .detail-title {
      font-size: 28px;
      font-weight: 800;
      color: var(--color-text-primary);
      margin-bottom: 8px;
    }

    .detail-meta {
      display: flex;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .stars {
      display: flex;
    }

    .star-filled {
      font-size: 18px;
      color: #F59E0B;
    }

    .star-empty {
      font-size: 18px;
      color: #D1D5DB;
    }

    .rating-text {
      font-size: 14px;
      color: var(--color-text-secondary);
    }

    .verified-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 13px;
      font-weight: 600;
      color: var(--color-success);
      background: var(--color-success-light);
      padding: 4px 12px;
      border-radius: var(--radius-full);
    }

    .verified-badge .material-icons-outlined {
      font-size: 16px;
    }

    .detail-price-tag {
      font-size: 32px;
      font-weight: 800;
      color: var(--color-text-primary);
      flex-shrink: 0;
    }

    .price-type {
      font-size: 14px;
      font-weight: 500;
      color: var(--color-text-secondary);
    }

    .detail-description {
      font-size: 15px;
      color: var(--color-text-secondary);
      line-height: 1.8;
      margin-bottom: 36px;
    }

    /* What's Included */
    .included-section {
      margin-bottom: 36px;
    }

    .included-section h2 {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .included-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .included-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 16px;
      background: white;
      border-radius: var(--radius-md);
      font-size: 14px;
      color: var(--color-text-primary);
    }

    .check-icon {
      font-size: 20px;
      color: var(--color-success);
      flex-shrink: 0;
    }

    /* Info Cards */
    .info-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-bottom: 36px;
    }

    .info-card {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      background: white;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
    }

    .info-card .material-icons-outlined {
      font-size: 28px;
      color: var(--color-accent-red);
    }

    .info-card div {
      display: flex;
      flex-direction: column;
    }

    .info-card strong {
      font-size: 14px;
      font-weight: 700;
    }

    .info-card span {
      font-size: 12px;
      color: var(--color-text-secondary);
    }

    /* Reviews */
    .reviews-section h2 {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .review-card {
      background: white;
      border-radius: var(--radius-lg);
      padding: 20px;
      margin-bottom: 16px;
      box-shadow: var(--shadow-sm);
    }

    .review-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
    }

    .review-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 700;
      color: white;
    }

    .review-header strong {
      font-size: 15px;
    }

    .review-stars {
      display: flex;
      gap: 2px;
    }

    .review-stars .star-filled {
      font-size: 14px;
    }

    .review-date {
      margin-left: auto;
      font-size: 13px;
      color: var(--color-text-light);
    }

    .review-text {
      font-size: 14px;
      color: var(--color-text-secondary);
      line-height: 1.7;
    }

    /* ── Booking Widget ── */
    .booking-widget {
      position: sticky;
      top: calc(var(--header-height) + 24px);
    }

    .animate-slide-in {
      animation: slideInRight 0.5s ease forwards;
    }

    .widget-card {
      background: white;
      border-radius: var(--radius-xl);
      padding: 28px;
      box-shadow: var(--shadow-lg);
      border: 1px solid var(--color-border);
    }

    .widget-subtitle {
      font-size: 13px;
      color: var(--color-text-secondary);
      margin-bottom: 20px;
      line-height: 1.6;
    }

    .widget-summary {
      background: var(--color-bg-light);
      border-radius: var(--radius-md);
      padding: 16px;
      margin-bottom: 24px;
    }

    .summary-row {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      margin-bottom: 8px;
    }

    .summary-row:last-child { margin-bottom: 0; }

    .summary-row span { color: var(--color-text-secondary); }

    /* App CTA */
    .app-cta {
      text-align: center;
    }

    .app-cta-icon {
      width: 60px;
      height: 60px;
      border-radius: 16px;
      background: linear-gradient(135deg, var(--color-accent-red) 0%, #7c3aed 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 16px;
      box-shadow: 0 6px 20px rgba(185,28,28,0.3);
    }

    .app-cta-icon .material-icons-outlined {
      font-size: 32px;
      color: white;
    }

    .app-cta h3 {
      font-size: 18px;
      font-weight: 800;
      color: var(--color-text-primary);
      margin-bottom: 8px;
    }

    /* Store Buttons */
    .store-btn {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 20px;
      border-radius: 12px;
      text-decoration: none;
      font-family: inherit;
      transition: transform 0.22s ease, box-shadow 0.22s ease;
      width: 100%;
      margin-bottom: 10px;
      background: #1a1a2e;
      color: white;
    }

    .store-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    }

    .store-icon {
      width: 26px;
      height: 26px;
      flex-shrink: 0;
    }

    .store-icon svg { width: 100%; height: 100%; }

    .store-text {
      display: flex;
      flex-direction: column;
      text-align: left;
    }

    .store-label {
      font-size: 9px;
      font-weight: 500;
      letter-spacing: 0.5px;
      opacity: 0.7;
      text-transform: uppercase;
    }

    .store-name {
      font-size: 17px;
      font-weight: 700;
      letter-spacing: -0.2px;
      line-height: 1.1;
    }

    /* Trust Badges */
    .trust-badges {
      display: flex;
      justify-content: space-around;
      border-top: 1px solid var(--color-border);
      padding-top: 16px;
      margin-top: 8px;
    }

    .trust-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      font-size: 11px;
      color: var(--color-text-secondary);
      text-align: center;
    }

    .trust-item .material-icons-outlined {
      font-size: 20px;
      color: var(--color-success);
    }

    /* Responsive */
    @media (max-width: 1024px) {
      .detail-grid {
        grid-template-columns: 1fr;
      }

      .booking-widget {
        position: static;
      }
    }

    @media (max-width: 768px) {
      .included-grid {
        grid-template-columns: 1fr;
      }

      .info-cards {
        grid-template-columns: 1fr;
      }

      .detail-header {
        flex-direction: column;
      }
    }
  `]
})
export class ServiceDetailComponent implements OnInit {
  service: Service | undefined;

  reviews = [
    {
      name: 'Sarah Johnson',
      initials: 'SJ',
      rating: 5,
      date: '2 days ago',
      text: 'Absolutely fantastic service! The professional was punctual, thorough, and extremely courteous. My house has never looked this clean. Will definitely book again.',
      color: '#3B82F6'
    },
    {
      name: 'Michael Chen',
      initials: 'MC',
      rating: 5,
      date: '1 week ago',
      text: 'Great experience from booking to completion. The app made it super easy to schedule and the service quality exceeded my expectations. Highly recommended!',
      color: '#8B5CF6'
    },
    {
      name: 'Priya Patel',
      initials: 'PP',
      rating: 4,
      date: '2 weeks ago',
      text: 'Very professional service. The team arrived on time and did a thorough job. Only minor issue was they ran about 30 minutes over the estimated time, but the quality was excellent.',
      color: '#EC4899'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceData: ServiceDataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service = this.serviceData.getServiceById(params['id']);
      if (!this.service) {
        this.router.navigate(['/services']);
      }
    });
  }

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  getGradient(id: string): string {
    const gradients: Record<string, string> = {
      'full-house-deep-cleaning': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'sofa-carpet-shampoo': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'kitchen-degreasing': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'emergency-electrical-repair': 'linear-gradient(135deg, #1e3a5f 0%, #2d5f8a 100%)',
      'leaking-pipe-fix': 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      'appliance-installation': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      'interior-wall-painting': 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
      'waterproofing': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'door-window-repair': 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      'haircut-styling': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'facial-treatment': 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      'ac-service': 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
      'ac-installation': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    };
    return gradients[id] || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  }

  getCategoryIcon(category: string): string {
    const icons: Record<string, string> = {
      'Home Cleaning': 'cleaning_services',
      'Electrical & Plumbing': 'electrical_services',
      'Painting & Renovation': 'format_paint',
      'Salon at Home': 'spa',
      'AC Repair & Service': 'ac_unit'
    };
    return icons[category] || 'home_repair_service';
  }

}

