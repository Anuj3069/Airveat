import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="hero" id="hero-section">
      <div class="container hero-inner">
        <div class="hero-content animate-fade-in-up">
          <h1 class="hero-title">
             Services,<br>
            <span class="hero-accent">On Demand</span>
          </h1>
          <p class="hero-subtitle">Book trusted professionals in just 12 minutes. Quality service guaranteed for all your home needs.</p>

          <div class="hero-search" id="hero-search">
            <div class="search-field">
              <span class="material-icons-outlined search-icon">search</span>
              <input type="text" placeholder="What service do you need?" class="search-input" id="search-service-input">
            </div>
            <div class="search-divider"></div>
            <div class="search-field">
              <span class="material-icons-outlined search-icon">location_on</span>
              <input type="text" placeholder="Select City" class="search-input" id="search-city-input">
            </div>
            <button class="btn btn-primary search-btn" id="search-btn" (click)="goToServices()">Search</button>
          </div>

          <div class="social-proof">
            <div class="avatars">
              <div class="avatar" style="background: #3B82F6;">JK</div>
              <div class="avatar" style="background: #8B5CF6;">SP</div>
              <div class="avatar" style="background: #EC4899;">MR</div>
            </div>
            <span class="proof-text">Joined by <strong>15,000+</strong> happy homeowners</span>
          </div>

          <div class="value-badges">
            <div class="value-badge" *ngFor="let badge of valueBadges">
              <div class="badge-icon" [style.background]="badge.bgColor">
                <span class="material-icons-outlined" [style.color]="badge.iconColor">{{ badge.icon }}</span>
              </div>
              <div class="badge-text">
                <strong>{{ badge.title }}</strong>
                <span>{{ badge.desc }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-image animate-fade-in">
          <div class="hero-img-wrapper">
            <div class="hero-img-placeholder">
              <span class="material-icons-outlined" style="font-size:80px; color: white;">groups</span>
              <p>Trusted Professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Services -->
    <section class="section popular-services" id="popular-services">
      <div class="container">
        <div class="section-header">
          <div>
            <h2 class="section-title">Popular Services</h2>
            <p class="section-subtitle">Most booked services by your neighbors</p>
          </div>
          <a routerLink="/services" class="view-all-link" id="view-all-services-link">
            View All Services
            <span class="material-icons-outlined">arrow_forward</span>
          </a>
        </div>

        <div class="popular-grid">
          <div class="popular-card" *ngFor="let service of popularServices; let i = index"
               [routerLink]="['/services']"
               [style.animation-delay]="i * 100 + 'ms'">
            <div class="popular-card-content">
              <h3>{{ service.name }}</h3>
              <p class="popular-tags">{{ service.tags }}</p>
            </div>
            <div class="popular-card-arrow">
              <span class="material-icons-outlined">arrow_forward</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="section how-it-works" id="how-it-works">
      <div class="container">
        <h2 class="section-title" style="text-align:center">How It Works</h2>
        <p class="section-subtitle" style="text-align:center">Getting started is easy — just follow these steps</p>

        <div class="steps-grid">
          <div class="step-card" *ngFor="let step of steps; let i = index">
            <div class="step-circle">
              <span class="material-icons-outlined step-icon">{{ step.icon }}</span>
            </div>
            <div class="step-connector" *ngIf="i < steps.length - 1"></div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-desc">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section why-choose" id="why-choose">
      <div class="container">
        <div class="why-inner">
          <div class="why-content">
            <h2 class="why-title">Why Choose Airveat?</h2>
            <div class="why-features">
              <div class="why-feature" *ngFor="let feature of whyFeatures">
                <div class="feature-icon-wrap" [style.background]="feature.bgColor">
                  <span class="material-icons-outlined" [style.color]="feature.iconColor">{{ feature.icon }}</span>
                </div>
                <div>
                  <h4>{{ feature.title }}</h4>
                  <p>{{ feature.desc }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="why-images">
            <div class="why-img-card">
              <span class="material-icons-outlined" style="font-size:48px; color: rgba(255,255,255,0.8);">electrical_services</span>
              <span>Expert Electricians</span>
            </div>
            <div class="why-img-card">
              <span class="material-icons-outlined" style="font-size:48px; color: rgba(255,255,255,0.8);">kitchen</span>
              <span>Kitchen Specialists</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Earn With Us CTA -->
    <section class="section earn-section" id="earn-with-us">
      <div class="container">
        <div class="earn-card">
          <div class="earn-content">
            <h2>Earn With Airveat</h2>
            <p>Are you a skilled professional? Join our platform to get a steady stream of clients and grow your business.</p>
            <a routerLink="/partner" class="btn btn-primary btn-lg" id="join-partner-btn">
              <span class="material-icons-outlined">handshake</span>
              Join as a Partner
            </a>
          </div>
          <div class="earn-stats">
            <div class="earn-stat">
              <span class="stat-number">2,500+</span>
              <span class="stat-label">Active Professionals</span>
            </div>
            <div class="earn-stat">
              <span class="stat-number">50K+</span>
              <span class="stat-label">Jobs Completed</span>
            </div>
            <div class="earn-stat">
              <span class="stat-number">4.8★</span>
              <span class="stat-label">Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Coming Soon Banner -->
    <section class="section coming-soon-section" id="coming-soon-section">
      <div class="container">
        <div class="coming-soon-card">
          <div class="banner-inner">
            <div class="banner-text">
              <h3>Services Coming Soon</h3>
              <p>We are expanding! Be the first to know when we launch in your area.</p>
            </div>
            <div class="banner-form">
              <input type="text" placeholder="Email or Phone" class="banner-input" id="notify-input">
              <button class="btn notify-btn" id="notify-btn">Notify Me</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* === Hero === */
    .hero {
      background: linear-gradient(135deg, #FAFBFC 0%, #F0F2F5 100%);
      padding: 60px 0 80px;
      overflow: hidden;
    }

    .hero-inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 48px;
      align-items: center;
    }

    .hero-title {
      font-size: 52px;
      font-weight: 900;
      line-height: 1.1;
      color: var(--color-primary-navy);
      margin-bottom: 20px;
      letter-spacing: -1px;
    }

    .hero-accent {
      color: var(--color-accent-red);
    }

    .hero-subtitle {
      font-size: 17px;
      color: var(--color-text-secondary);
      line-height: 1.7;
      margin-bottom: 32px;
      max-width: 480px;
    }

    .hero-search {
      display: flex;
      align-items: center;
      background: white;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
      padding: 6px;
      margin-bottom: 24px;
      max-width: 540px;
    }

    .search-field {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      flex: 1;
    }

    .search-icon {
      color: var(--color-text-light);
      font-size: 20px;
    }

    .search-input {
      width: 100%;
      background: transparent;
      font-size: 14px;
      color: var(--color-text-primary);
    }

    .search-input::placeholder {
      color: var(--color-text-light);
    }

    .search-divider {
      width: 1px;
      height: 32px;
      background: var(--color-border);
      flex-shrink: 0;
    }

    .search-btn {
      border-radius: var(--radius-md);
      padding: 12px 28px;
      flex-shrink: 0;
    }

    .social-proof {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 32px;
    }

    .avatars {
      display: flex;
    }

    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 700;
      color: white;
      border: 2px solid white;
      margin-right: -8px;
    }

    .proof-text {
      font-size: 14px;
      color: var(--color-text-secondary);
      margin-left: 8px;
    }

    .proof-text strong {
      color: var(--color-text-primary);
    }

    .value-badges {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
    }

    .value-badge {
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }

    .badge-icon {
      width: 40px;
      height: 40px;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .badge-icon .material-icons-outlined {
      font-size: 20px;
    }

    .badge-text {
      display: flex;
      flex-direction: column;
    }

    .badge-text strong {
      font-size: 13px;
      font-weight: 700;
      color: var(--color-text-primary);
    }

    .badge-text span {
      font-size: 12px;
      color: var(--color-text-secondary);
      line-height: 1.4;
      max-width: 160px;
    }

    .hero-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .hero-img-wrapper {
      width: 100%;
      max-width: 500px;
    }

    .hero-img-placeholder {
      width: 100%;
      aspect-ratio: 4/3;
      border-radius: var(--radius-xl);
      background: linear-gradient(135deg, #1E3A5F 0%, #2D5F8A 50%, #1E3A5F 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      color: white;
      font-size: 18px;
      font-weight: 600;
      box-shadow: var(--shadow-xl);
    }

    /* === Popular Services === */
    .popular-services {
      background: var(--color-bg-white);
    }

    .section-header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 32px;
    }

    .view-all-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 14px;
      font-weight: 600;
      color: var(--color-accent-red);
      transition: gap var(--transition-fast);
    }

    .view-all-link:hover {
      gap: 10px;
    }

    .view-all-link .material-icons-outlined {
      font-size: 18px;
    }

    .popular-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }

    .popular-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      background: var(--color-bg-light);
      border-radius: var(--radius-lg);
      cursor: pointer;
      transition: all var(--transition-base);
      animation: fadeInUp 0.5s ease forwards;
      opacity: 0;
    }

    .popular-card:hover {
      background: white;
      box-shadow: var(--shadow-md);
      transform: translateY(-2px);
    }

    .popular-card-content h3 {
      font-size: 15px;
      font-weight: 700;
      color: var(--color-text-primary);
      margin-bottom: 4px;
    }

    .popular-tags {
      font-size: 12px;
      color: var(--color-text-secondary);
    }

    .popular-card-arrow {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--color-accent-red);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: transform var(--transition-fast);
    }

    .popular-card-arrow .material-icons-outlined {
      font-size: 18px;
      color: white;
    }

    .popular-card:hover .popular-card-arrow {
      transform: translateX(4px);
    }

    /* === How It Works === */
    .how-it-works {
      background: var(--color-bg-light);
    }

    .steps-grid {
      display: flex;
      justify-content: center;
      gap: 48px;
      margin-top: 48px;
      position: relative;
    }

    .step-card {
      text-align: center;
      position: relative;
      flex: 1;
      max-width: 280px;
    }

    .step-circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: linear-gradient(135deg, #E8EDF2 0%, #D1D9E2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      position: relative;
      overflow: hidden;
      transition: transform var(--transition-base);
    }

    .step-card:hover .step-circle {
      transform: scale(1.05);
    }

    .step-icon {
      font-size: 40px;
      color: var(--color-primary-navy);
    }

    .step-connector {
      position: absolute;
      top: 50px;
      right: -56px;
      width: 60px;
      height: 2px;
      background: var(--color-border);
    }

    .step-title {
      font-size: 17px;
      font-weight: 700;
      color: var(--color-text-primary);
      margin-bottom: 8px;
    }

    .step-desc {
      font-size: 14px;
      color: var(--color-text-secondary);
      line-height: 1.6;
    }

    /* === Why Choose === */
    .why-choose {
      background: var(--color-primary-navy);
      border-radius: var(--radius-xl);
      margin: 0 24px;
    }

    .why-inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 48px;
      align-items: center;
    }

    .why-title {
      font-size: 32px;
      font-weight: 800;
      color: white;
      margin-bottom: 36px;
    }

    .why-features {
      display: flex;
      flex-direction: column;
      gap: 28px;
    }

    .why-feature {
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }

    .feature-icon-wrap {
      width: 44px;
      height: 44px;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .feature-icon-wrap .material-icons-outlined {
      font-size: 22px;
    }

    .why-feature h4 {
      font-size: 16px;
      font-weight: 700;
      color: white;
      margin-bottom: 4px;
    }

    .why-feature p {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
    }

    .why-images {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .why-img-card {
      aspect-ratio: 1;
      border-radius: var(--radius-lg);
      background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
      border: 1px solid rgba(255,255,255,0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      color: rgba(255,255,255,0.7);
      font-size: 13px;
      font-weight: 500;
      transition: all var(--transition-base);
    }

    .why-img-card:hover {
      background: rgba(255,255,255,0.15);
      transform: translateY(-4px);
    }

    /* === Earn Section === */
    .earn-section {
      background: var(--color-bg-light);
    }

    .earn-card {
      background: white;
      border-radius: var(--radius-xl);
      padding: 56px;
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 48px;
      align-items: center;
      box-shadow: var(--shadow-md);
    }

    .earn-content h2 {
      font-size: 32px;
      font-weight: 800;
      color: var(--color-text-primary);
      margin-bottom: 16px;
    }

    .earn-content p {
      font-size: 15px;
      color: var(--color-text-secondary);
      line-height: 1.7;
      margin-bottom: 28px;
    }

    .earn-stats {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .earn-stat {
      display: flex;
      flex-direction: column;
      padding: 20px 24px;
      background: var(--color-bg-light);
      border-radius: var(--radius-lg);
      border-left: 4px solid var(--color-accent-red);
    }

    .stat-number {
      font-size: 28px;
      font-weight: 800;
      color: var(--color-text-primary);
    }

    .stat-label {
      font-size: 13px;
      color: var(--color-text-secondary);
      margin-top: 4px;
    }

    /* === Coming Soon Section === */
    .coming-soon-section {
      background: var(--color-bg-white);
    }

    .coming-soon-card {
      background: linear-gradient(135deg, var(--color-accent-red) 0%, var(--color-dark-maroon) 100%);
      padding: 48px 56px;
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-lg);
    }

    .banner-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 32px;
      flex-wrap: wrap;
    }

    .banner-text h3 {
      font-size: 24px;
      font-weight: 800;
      color: white;
      margin-bottom: 4px;
    }

    .banner-text p {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.85);
    }

    .banner-form {
      display: flex;
      gap: 12px;
      flex-shrink: 0;
    }

    .banner-input {
      padding: 12px 20px;
      border-radius: var(--radius-md);
      background: rgba(255, 255, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: white;
      width: 260px;
      font-size: 14px;
      transition: all var(--transition-fast);
    }

    .banner-input::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    .banner-input:focus {
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.6);
    }

    .notify-btn {
      background: white;
      color: var(--color-accent-red);
      padding: 12px 24px;
      border-radius: var(--radius-md);
      font-weight: 700;
      font-size: 14px;
      transition: all var(--transition-base);
    }

    .notify-btn:hover {
      background: var(--color-bg-light);
      transform: translateY(-1px);
    }

    /* === Responsive === */
    @media (max-width: 1024px) {
      .hero-inner {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .hero-subtitle {
        max-width: 100%;
      }

      .hero-search {
        max-width: 100%;
      }

      .hero-image {
        display: none;
      }

      .social-proof {
        justify-content: center;
      }

      .value-badges {
        justify-content: center;
      }

      .popular-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .why-inner {
        grid-template-columns: 1fr;
      }

      .why-choose {
        margin: 0;
        border-radius: 0;
      }

      .earn-card {
        grid-template-columns: 1fr;
        padding: 40px;
      }
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 36px;
      }

      .hero-search {
        flex-direction: column;
        gap: 0;
      }

      .search-divider {
        width: 100%;
        height: 1px;
      }

      .search-btn {
        width: 100%;
        margin-top: 4px;
      }

      .steps-grid {
        flex-direction: column;
        align-items: center;
        gap: 32px;
      }

      .step-connector {
        display: none;
      }

      .why-images {
        grid-template-columns: 1fr;
      }

      .coming-soon-card {
        padding: 40px 24px;
      }
      
      .banner-inner {
        flex-direction: column;
        text-align: center;
      }

      .banner-form {
        flex-direction: column;
        width: 100%;
      }

      .banner-input {
        width: 100%;
      }
    }

    @media (max-width: 480px) {
      .popular-grid {
        grid-template-columns: 1fr;
      }

      .hero-title {
        font-size: 30px;
      }

      .earn-card {
        padding: 24px;
      }
    }
  `]
})
export class HomeComponent {
  popularServices = [
    { name: 'Salon at Home', tags: 'Haircut • Makeup • Spa' },
    { name: 'Electrician', tags: 'Wiring • Carpentry • Painting' },
    { name: 'Cleaning', tags: 'Full Home • Kitchen • Bathroom' },
    { name: 'AC Repair', tags: 'Service • Installation • Gas Refill' }
  ];

  valueBadges = [
    {
      icon: 'verified_user',
      title: 'Verified Professionals',
      desc: 'Background-checked and trusted experts.',
      bgColor: 'rgba(185, 28, 28, 0.08)',
      iconColor: '#B91C1C'
    },
    {
      icon: 'bolt',
      title: 'Instant Booking',
      desc: 'Book services quickly in minutes.',
      bgColor: 'rgba(185, 28, 28, 0.08)',
      iconColor: '#B91C1C'
    },
    {
      icon: 'paid',
      title: 'Affordable Pricing',
      desc: 'Transparent and budget-friendly rates.',
      bgColor: 'rgba(185, 28, 28, 0.08)',
      iconColor: '#B91C1C'
    }
  ];

  steps = [
    {
      icon: 'calendar_month',
      title: 'Book Your Service',
      desc: 'Select your service, date, and preferred time slot online.'
    },
    {
      icon: 'engineering',
      title: 'Professional Arrives',
      desc: 'Our background-checked expert reaches your doorstep.'
    },
    {
      icon: 'sentiment_very_satisfied',
      title: 'Relax & Enjoy',
      desc: 'Enjoy your high-quality service and pay securely.'
    }
  ];

  whyFeatures = [
    {
      icon: 'verified_user',
      title: 'Vetted Professionals',
      desc: 'Every pro undergoes rigorous background checks and skill assessments.',
      bgColor: 'rgba(185, 28, 28, 0.15)',
      iconColor: '#EF4444'
    },
    {
      icon: 'paid',
      title: 'Affordable Pricing',
      desc: 'Upfront pricing with no hidden costs. Pay only for the quality you get.',
      bgColor: 'rgba(185, 28, 28, 0.15)',
      iconColor: '#EF4444'
    },
    {
      icon: 'thumb_up',
      title: '100% Satisfaction',
      desc: "Not happy? We will make it right. Your peace of mind is our priority.",
      bgColor: 'rgba(185, 28, 28, 0.15)',
      iconColor: '#EF4444'
    }
  ];

  constructor(private router: Router) { }

  goToServices(): void {
    this.router.navigate(['/services']);
  }
}
