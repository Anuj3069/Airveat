import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <footer class="footer">
      <!-- Main Footer Content -->
      <div class="footer-main">
        <div class="container content-grid">
          <!-- Column 1: Brand -->
          <div class="brand-col">
            <a routerLink="/" class="footer-logo">
              <div class="logo-box">
                <img src="assets/logo.png" alt="Airveat Logo" class="logo-img">
              </div>
              <span class="logo-text">Airveat</span>
            </a>
            <p class="brand-desc">
              Simplifying home services through technology and trust. We connect you with verified professionals in 15+ categories.
            </p>
            <div class="social-links">
              <a href="#" class="social-btn" aria-label="Facebook">
                <span class="material-icons-outlined">public</span>
              </a>
              <a href="#" class="social-btn" aria-label="Twitter">
                <span class="material-icons-outlined">tag</span>
              </a>
              <a href="#" class="social-btn" aria-label="LinkedIn">
                <span class="material-icons-outlined">work</span>
              </a>
              <a href="#" class="social-btn" aria-label="Instagram">
                <span class="material-icons-outlined">photo_camera</span>
              </a>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div class="link-col">
            <h4 class="col-title">Company</h4>
            <nav class="footer-nav">
              <a routerLink="/about-us">About Us</a>
              <a routerLink="/how-it-works">How It Works</a>
              <a routerLink="/services">Our Services</a>
              <a href="#">Career <span class="badge">Hiring</span></a>
              <a routerLink="/contact-us">Contact Us</a>
            </nav>
          </div>

          <!-- Column 3: Services -->
          <div class="link-col">
            <h4 class="col-title">Services</h4>
            <nav class="footer-nav">
              <a routerLink="/services">Home Cleaning</a>
              <a routerLink="/services">Plumbing & Leakage</a>
              <a routerLink="/services">Electrician</a>
              <a routerLink="/services">AC Maintenance</a>
              <a routerLink="/services">Painting & Decor</a>
            </nav>
          </div>

          <!-- Column 4: Contact/App -->
          <div class="link-col">
            <h4 class="col-title">App & Support</h4>
            <div class="contact-info">
              <div class="contact-item">
                <span class="material-icons-outlined icon">call</span>
                <div class="details">
                  <span class="label">Call us</span>
                  <a href="tel:08001234567" class="val">+91 800-123-4567</a>
                </div>
              </div>
              <div class="contact-item">
                <span class="material-icons-outlined icon">mail</span>
                <div class="details">
                  <span class="label">Email us</span>
                  <a href="mailto:support@airveat.com" class="val">support&#64;airveat.com</a>
                </div>
              </div>
            </div>
            <div class="app-badges">
              <div class="app-btn">
                <span class="material-icons-outlined">pest_control_rodent</span>
                <div class="btn-text">
                  <span class="top">Download on</span>
                  <span class="main">App Store</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="container bottom-inner">
          <div class="copyright">
            &copy; 2026 Airveat Inc. All rights reserved.
          </div>
          <div class="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
            <div class="region-selector">
              <span class="material-icons-outlined">language</span>
              India (EN)
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      --bg: #0f172a;
      --card-bg: #1e293b;
      --accent: #B91C1C;
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --border: rgba(255,255,255,0.06);
      --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .footer {
      background: var(--bg);
      color: var(--text);
      font-family: 'Inter', sans-serif;
    }

    /* --- Main Footer --- */
    .footer-main {
      padding: 60px 0 80px;
      border-bottom: 1px solid var(--border);
    }

    .content-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: 60px;
    }

    .footer-logo {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      margin-bottom: 24px;
    }

    .logo-box {
      width: 40px;
      height: 40px;
      background: white;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .logo-img {
      width: 28px;
      height: 28px;
      object-fit: contain;
    }

    .logo-text {
      font-size: 24px;
      font-weight: 800;
      color: white;
      letter-spacing: -0.5px;
    }

    .brand-desc {
      color: var(--text-muted);
      font-size: 14px;
      line-height: 1.6;
      margin-bottom: 24px;
    }

    .social-links {
      display: flex;
      gap: 12px;
    }

    .social-btn {
      width: 38px;
      height: 38px;
      background: rgba(255,255,255,0.03);
      border: 1px solid var(--border);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-muted);
      text-decoration: none;
      transition: var(--transition);
    }

    .social-btn:hover {
      background: var(--accent);
      color: white;
      border-color: var(--accent);
      transform: translateY(-3px);
    }

    .col-title {
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 24px;
      color: white;
    }

    .footer-nav {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .footer-nav a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 14px;
      transition: var(--transition);
    }

    .footer-nav a:hover {
      color: white;
      padding-left: 4px;
    }

    .badge {
      background: rgba(185, 28, 28, 0.1);
      color: var(--accent);
      font-size: 10px;
      padding: 2px 8px;
      border-radius: 20px;
      margin-left: 6px;
      font-weight: 700;
      border: 1px solid rgba(185, 28, 28, 0.2);
    }

    /* --- Contact & App --- */
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 30px;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .contact-item .icon {
      color: var(--accent);
      background: rgba(185, 28, 28, 0.1);
      padding: 8px;
      border-radius: 8px;
      font-size: 18px;
    }

    .contact-item .label {
      display: block;
      font-size: 11px;
      color: var(--text-muted);
      text-transform: uppercase;
      font-weight: 700;
    }

    .contact-item .val {
      color: white;
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;
    }

    .app-btn {
      display: flex;
      align-items: center;
      gap: 12px;
      background: white;
      color: black;
      padding: 10px 20px;
      border-radius: 12px;
      cursor: pointer;
      transition: var(--transition);
    }

    .app-btn:hover {
      transform: scale(1.02);
      box-shadow: 0 10px 20px rgba(255,255,255,0.1);
    }

    .btn-text {
      display: flex;
      flex-direction: column;
    }

    .btn-text .top { font-size: 9px; text-transform: uppercase; font-weight: 600; }
    .btn-text .main { font-size: 15px; font-weight: 800; }

    /* --- Bottom Bar --- */
    .footer-bottom {
      padding: 30px 0;
    }

    .bottom-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
      color: var(--text-muted);
    }

    .bottom-inner.center {
      justify-content: center;
    }

    .bottom-links {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .bottom-links a {
      color: var(--text-muted);
      text-decoration: none;
      transition: var(--transition);
    }

    .bottom-links a:hover { color: white; }

    .region-selector {
      display: flex;
      align-items: center;
      gap: 8px;
      background: rgba(255,255,255,0.03);
      padding: 6px 14px;
      border-radius: 20px;
      border: 1px solid var(--border);
      cursor: pointer;
    }

    .region-selector span { font-size: 16px; }

    /* --- Responsive --- */
    @media (max-width: 1024px) {
      .content-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
    }

    @media (max-width: 640px) {
      .content-grid { grid-template-columns: 1fr; }
      .bottom-inner { flex-direction: column; gap: 20px; text-align: center; }
      .bottom-links { flex-direction: column; gap: 12px; }
    }
  `]
})
export class FooterComponent { }
