import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="partner-page" id="partner-page">
      <!-- Hero -->
      <div class="partner-hero">
        <div class="container">
          <div class="hero-content animate-fade-in-up">
            <span class="hero-badge">
              <span class="material-icons-outlined">handshake</span>
              Partner Program
            </span>
            <h1>Grow Your Business<br>With <span class="accent">Airveat</span></h1>
            <p>Join thousands of skilled professionals already earning more with our platform. We provide the clients, you provide the expertise.</p>
          </div>
        </div>
      </div>

      <!-- Benefits -->
      <div class="section benefits-section" id="partner-benefits">
        <div class="container">
          <h2 class="section-title" style="text-align:center">Why Partner With Us?</h2>
          <p class="section-subtitle" style="text-align:center">Everything you need to succeed, all in one place</p>

          <div class="benefits-grid">
            <div class="benefit-card" *ngFor="let benefit of benefits; let i = index"
                 [style.animation-delay]="i * 150 + 'ms'">
              <div class="benefit-icon" [style.background]="benefit.bg">
                <span class="material-icons-outlined" [style.color]="benefit.color">{{ benefit.icon }}</span>
              </div>
              <h3>{{ benefit.title }}</h3>
              <p>{{ benefit.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="stats-strip">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-item" *ngFor="let stat of stats">
              <span class="stat-value">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Download App Section -->
      <div class="section download-section" id="partner-download">
        <div class="container">
          <div class="download-wrapper">

            <div class="download-badge">
              <span class="material-icons-outlined">phone_iphone</span>
              Get Started Today
            </div>

            <h2>Download the <span class="accent">Airveat Partner</span> App</h2>
            <p class="download-subtitle">
              Join as a partner in minutes. Download the app, create your profile, and start receiving
              job requests right away &mdash; no paperwork, no waiting.
            </p>

            <!-- Steps -->
            <div class="steps-row">
              <div class="step-item" *ngFor="let step of steps; let i = index">
                <div class="step-number">{{ i + 1 }}</div>
                <div class="step-content">
                  <span class="material-icons-outlined step-icon">{{ step.icon }}</span>
                  <h4>{{ step.title }}</h4>
                  <p>{{ step.desc }}</p>
                </div>
              </div>
            </div>

            <!-- Store Buttons -->
            <div class="store-buttons">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer"
                 class="store-btn play-store" id="play-store-btn">
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
                 class="store-btn app-store" id="app-store-btn">
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

            <!-- Availability hint -->
            <p class="qr-hint">
              <span class="material-icons-outlined">info_outline</span>
              Available on Android &amp; iOS &mdash; Free to download
            </p>

          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .partner-page {
      background: var(--color-bg-light);
    }

    /* ── Hero ── */
    .partner-hero {
      background: linear-gradient(135deg, var(--color-primary-navy) 0%, #1F2937 50%, var(--color-dark-maroon) 100%);
      padding: 80px 0 100px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .partner-hero::before {
      content: '';
      position: absolute;
      top: -50%; left: -50%;
      width: 200%; height: 200%;
      background: radial-gradient(circle, rgba(185, 28, 28, 0.08) 0%, transparent 70%);
      pointer-events: none;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.15);
      padding: 8px 20px;
      border-radius: var(--radius-full);
      font-size: 13px;
      font-weight: 600;
      color: rgba(255,255,255,0.85);
      margin-bottom: 24px;
    }

    .hero-badge .material-icons-outlined { font-size: 18px; }

    .hero-content h1 {
      font-size: 48px;
      font-weight: 900;
      color: white;
      line-height: 1.15;
      margin-bottom: 20px;
      letter-spacing: -1px;
    }

    .accent { color: var(--color-accent-red); }

    .hero-content p {
      font-size: 17px;
      color: rgba(255,255,255,0.7);
      max-width: 560px;
      margin: 0 auto;
      line-height: 1.7;
    }

    /* ── Benefits ── */
    .benefits-section { background: white; }

    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .benefit-card {
      padding: 32px;
      border-radius: var(--radius-xl);
      background: var(--color-bg-light);
      text-align: center;
      transition: all var(--transition-base);
      animation: fadeInUp 0.5s ease forwards;
      opacity: 0;
    }

    .benefit-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
      background: white;
    }

    .benefit-icon {
      width: 64px; height: 64px;
      border-radius: var(--radius-lg);
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto 20px;
    }

    .benefit-icon .material-icons-outlined { font-size: 32px; }

    .benefit-card h3 {
      font-size: 18px; font-weight: 700;
      color: var(--color-text-primary); margin-bottom: 8px;
    }

    .benefit-card p {
      font-size: 14px;
      color: var(--color-text-secondary);
      line-height: 1.7;
    }

    /* ── Stats ── */
    .stats-strip {
      background: var(--color-primary-navy);
      padding: 40px 0;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
      text-align: center;
    }

    .stat-value {
      font-size: 36px; font-weight: 800;
      color: white; display: block;
    }

    .stat-label {
      font-size: 14px;
      color: rgba(255,255,255,0.6);
      margin-top: 4px; display: block;
    }

    /* ── Download Section ── */
    .download-section {
      background: linear-gradient(160deg, #f0f4ff 0%, #fdf2f2 100%);
    }

    .download-wrapper {
      max-width: 760px;
      margin: 0 auto;
      text-align: center;
    }

    .download-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(185, 28, 28, 0.08);
      border: 1px solid rgba(185, 28, 28, 0.15);
      padding: 8px 20px;
      border-radius: var(--radius-full);
      font-size: 13px;
      font-weight: 600;
      color: var(--color-accent-red);
      margin-bottom: 24px;
    }

    .download-badge .material-icons-outlined { font-size: 18px; }

    .download-wrapper h2 {
      font-size: 38px;
      font-weight: 800;
      color: var(--color-text-primary);
      line-height: 1.2;
      margin-bottom: 16px;
      letter-spacing: -0.5px;
    }

    .download-subtitle {
      font-size: 16px;
      color: var(--color-text-secondary);
      line-height: 1.75;
      max-width: 580px;
      margin: 0 auto 48px;
    }

    /* ── Steps ── */
    .steps-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      margin-bottom: 52px;
    }

    .step-item {
      background: white;
      border-radius: var(--radius-xl);
      padding: 28px 20px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
      position: relative;
    }

    .step-item:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 28px rgba(0,0,0,0.10);
    }

    .step-number {
      position: absolute;
      top: -14px; left: 50%;
      transform: translateX(-50%);
      width: 28px; height: 28px;
      border-radius: 50%;
      background: var(--color-accent-red);
      color: white;
      font-size: 13px; font-weight: 700;
      display: flex; align-items: center; justify-content: center;
    }

    .step-icon {
      font-size: 36px;
      color: var(--color-accent-red);
      margin-bottom: 12px;
      display: block;
    }

    .step-content h4 {
      font-size: 15px; font-weight: 700;
      color: var(--color-text-primary);
      margin-bottom: 6px;
    }

    .step-content p {
      font-size: 13px;
      color: var(--color-text-secondary);
      line-height: 1.6;
    }

    /* ── Store Buttons ── */
    .store-buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 24px;
    }

    .store-btn {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px 28px;
      border-radius: 14px;
      text-decoration: none;
      font-family: inherit;
      transition: transform 0.22s ease, box-shadow 0.22s ease;
      min-width: 200px;
    }

    .store-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 32px rgba(0,0,0,0.18);
    }

    .play-store,
    .app-store {
      background: #1a1a2e;
      color: white;
    }

    .store-icon {
      width: 32px; height: 32px;
      flex-shrink: 0;
    }

    .store-icon svg { width: 100%; height: 100%; }

    .store-text {
      display: flex;
      flex-direction: column;
      text-align: left;
    }

    .store-label {
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.5px;
      opacity: 0.75;
      text-transform: uppercase;
    }

    .store-name {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: -0.3px;
      line-height: 1.1;
    }

    .qr-hint {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      color: var(--color-text-light);
    }

    .qr-hint .material-icons-outlined { font-size: 16px; }

    /* ── Responsive ── */
    @media (max-width: 768px) {
      .hero-content h1 { font-size: 32px; }
      .benefits-grid { grid-template-columns: 1fr; }
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
      .download-wrapper h2 { font-size: 26px; }
      .steps-row { grid-template-columns: 1fr; }
      .store-buttons { flex-direction: column; align-items: center; }
      .store-btn { min-width: 240px; }
    }
  `]
})
export class PartnerComponent {

  benefits = [
    {
      icon: 'trending_up',
      title: 'Steady Workflow',
      desc: 'Get a consistent stream of job requests based on your skills and availability. No more chasing clients.',
      bg: 'rgba(59, 130, 246, 0.1)',
      color: '#3B82F6'
    },
    {
      icon: 'account_balance_wallet',
      title: 'Secure Payments',
      desc: 'Receive guaranteed payments directly to your bank account with transparent fee structure.',
      bg: 'rgba(16, 185, 129, 0.1)',
      color: '#10B981'
    },
    {
      icon: 'campaign',
      title: 'Marketing Support',
      desc: 'We handle customer acquisition so you can focus on delivering excellent service.',
      bg: 'rgba(139, 92, 246, 0.1)',
      color: '#8B5CF6'
    }
  ];

  stats = [
    { value: '2,500+', label: 'Active Partners' },
    { value: '₹20Cr+', label: 'Partner Earnings' },
    { value: '50,000+', label: 'Jobs Completed' },
    { value: '4.8★',   label: 'Average Rating' }
  ];

  steps = [
    {
      icon: 'download',
      title: 'Download the App',
      desc: 'Get the Airveat Partner app free from the Play Store or App Store.'
    },
    {
      icon: 'person_add',
      title: 'Create Your Profile',
      desc: 'Sign up, add your skills and service area in just a few taps.'
    },
    {
      icon: 'work',
      title: 'Start Earning',
      desc: 'Accept job requests and get paid securely — all from the app.'
    }
  ];
}
