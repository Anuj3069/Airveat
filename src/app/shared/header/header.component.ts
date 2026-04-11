import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <!-- Top Info Bar -->
    <div class="top-bar">
      <div class="container top-bar-inner">
        <div class="top-info">
          <a href="mailto:support@airveat.com" class="top-item">
            <span class="material-icons-outlined">mail</span>
            support&#64;airveat.com
          </a>
          <div class="top-divider"></div>
          <span class="top-item">
            <span class="material-icons-outlined">schedule</span>
            24/7 Service Support
          </span>
        </div>
        <div class="top-links">
          <span class="top-item location">
            <span class="material-icons-outlined">place</span>
            Bangalore, India
          </span>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <header class="header" [class.scrolled]="isScrolled" id="main-header">
      <div class="container header-inner">

        <!-- Logo Section -->
        <a routerLink="/" class="logo" id="logo-link">
          <div class="logo-box">
            <div class="logo-shimmer"></div>
            <img src="assets/logo.png" alt="Airveat Logo" class="logo-img">
          </div>
          <div class="logo-text-group">
            <span class="logo-brand">Airveat</span>
            <span class="logo-tagline">Premium Services</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="nav-menu" id="main-nav">
          <div class="nav-item-wrap">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">Home</a>
            <div class="nav-dot"></div>
          </div>
          <div class="nav-item-wrap">
            <a routerLink="/services" routerLinkActive="active" class="nav-link">Services</a>
            <div class="nav-dot"></div>
          </div>
          <div class="nav-item-wrap">
            <a routerLink="/how-it-works" routerLinkActive="active" class="nav-link">Process</a>
            <div class="nav-dot"></div>
          </div>
          <div class="nav-item-wrap">
            <a routerLink="/about-us" routerLinkActive="active" class="nav-link">About Us</a>
            <div class="nav-dot"></div>
          </div>
          <div class="nav-item-wrap">
            <a routerLink="/why-choose-us" routerLinkActive="active" class="nav-link">Why Choice Us</a>
            <div class="nav-dot"></div>
          </div>
          <div class="nav-item-wrap">
            <a routerLink="/contact-us" routerLinkActive="active" class="nav-link">Contact</a>
            <div class="nav-dot"></div>
          </div>
        </nav>

        <!-- Action Items -->
        <div class="header-actions">
          <a routerLink="/login" class="cta-login">
            <div class="cta-icon">
              <span class="material-icons-outlined">lock</span>
            </div>
            <span>Login</span>
          </a>

          <!-- Mobile Menu Toggle -->
          <button class="mobile-toggle" (click)="toggleMenu()" [class.active]="menuOpen">
            <div class="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="mobile-drawer" [class.open]="menuOpen">
        <div class="drawer-header">
          <span class="drawer-title">Menu</span>
          <button class="close-drawer" (click)="closeMenu()">
            <span class="material-icons-outlined">close</span>
          </button>
        </div>
        <nav class="mobile-links">
          <a routerLink="/" (click)="closeMenu()" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
            <span class="material-icons-outlined">home</span> Home
          </a>
          <a routerLink="/services" (click)="closeMenu()" routerLinkActive="active">
            <span class="material-icons-outlined">build</span> Our Services
          </a>
          <a routerLink="/how-it-works" (click)="closeMenu()" routerLinkActive="active">
            <span class="material-icons-outlined">auto_awesome</span> How It Works
          </a>
          <a routerLink="/about-us" (click)="closeMenu()" routerLinkActive="active">
            <span class="material-icons-outlined">info</span> About Us
          </a>
          <a routerLink="/why-choose-us" (click)="closeMenu()" routerLinkActive="active">
            <span class="material-icons-outlined">verified</span> Why Us
          </a>
          <a routerLink="/contact-us" (click)="closeMenu()" routerLinkActive="active">
            <span class="material-icons-outlined">chat_bubble</span> Contact Us
          </a>
          <div class="mobile-footer">
            <a routerLink="/login" (click)="closeMenu()" class="mobile-btn">Login to Account</a>
          </div>
        </nav>
      </div>
      <div class="mobile-overlay" (click)="closeMenu()" [class.visible]="menuOpen"></div>
    </header>
  `,
  styles: [`
    :host {
      --header-bg: rgba(255, 255, 255, 0.85);
      --header-blur: 15px;
      --accent: #B91C1C;
      --primary: #111827;
      --text-muted: #6B7280;
      --radius: 16px;
      --transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    /* --- Top Bar --- */
    .top-bar {
      height: 40px;
      background: var(--primary);
      color: white;
      font-size: 12px;
      display: flex;
      align-items: center;
      transition: var(--transition);
      z-index: 1001;
      position: relative;
    }

    .top-bar-inner {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .top-info, .top-links {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .top-item {
      display: flex;
      align-items: center;
      gap: 6px;
      color: rgba(255,255,255,0.7);
      text-decoration: none;
      transition: color 0.3s;
    }

    .top-item:hover { color: #fff; }
    .top-item .material-icons-outlined { font-size: 14px; color: var(--accent); }
    .top-divider { width: 1px; height: 12px; background: rgba(255,255,255,0.2); }

    /* --- Header Shell --- */
    .header {
      position: sticky;
      top: 0;
      width: 100%;
      height: 80px;
      background: var(--header-bg);
      backdrop-filter: blur(var(--header-blur));
      border-bottom: 1px solid rgba(0,0,0,0.05);
      z-index: 1000;
      display: flex;
      align-items: center;
      transition: var(--transition);
    }

    /* Floating Header State */
    .header.scrolled {
      height: 70px;
      top: 15px;
      left: 20px;
      right: 20px;
      width: calc(100% - 40px);
      margin: 0 auto;
      border-radius: var(--radius);
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      border: 1px solid rgba(255,255,255,0.4);
      background: rgba(255, 255, 255, 0.95);
    }

    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    /* --- Logo Section --- */
    .logo {
      display: flex;
      align-items: center;
      gap: 14px;
      text-decoration: none;
    }

    .logo-box {
      width: 48px;
      height: 48px;
      background: #f9fafb;
      border: 1px solid rgba(0,0,0,0.05);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
      transition: var(--transition);
    }

    .logo:hover .logo-box {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      border-color: var(--accent);
    }

    .logo-shimmer {
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        45deg,
        transparent 0%,
        rgba(255,255,255,0.3) 45%,
        rgba(255,255,255,0.6) 50%,
        rgba(255,255,255,0.3) 55%,
        transparent 100%
      );
      transition: 0.6s;
    }

    .logo:hover .logo-shimmer {
      left: 100%;
      top: 100%;
    }

    .logo-img {
      width: 36px;
      height: 36px;
      object-fit: contain;
    }

    .logo-text-group {
      display: flex;
      flex-direction: column;
    }

    .logo-brand {
      font-size: 22px;
      font-weight: 800;
      color: var(--primary);
      letter-spacing: -0.5px;
      line-height: 1;
    }

    .logo-tagline {
      font-size: 10px;
      font-weight: 600;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    /* --- Navigation --- */
    .nav-menu {
      display: flex;
      align-items: center;
      gap: 32px;
    }

    .nav-item-wrap {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .nav-link {
      color: var(--text-muted);
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      transition: var(--transition);
    }

    .nav-link:hover, .nav-link.active {
      color: var(--primary);
    }

    .nav-dot {
      width: 4px;
      height: 4px;
      background: var(--accent);
      border-radius: 50%;
      position: absolute;
      bottom: -8px;
      opacity: 0;
      transform: translateY(10px);
      transition: var(--transition);
    }

    .nav-link.active + .nav-dot {
      opacity: 1;
      transform: translateY(0);
    }

    /* --- Header Actions --- */
    .header-actions {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .cta-login {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 24px;
      background: var(--primary);
      color: white;
      border-radius: 99px;
      font-size: 14px;
      font-weight: 700;
      text-decoration: none;
      transition: var(--transition);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .cta-login:hover {
      background: var(--accent);
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(185, 28, 28, 0.3);
    }

    .cta-icon {
      width: 24px;
      height: 24px;
      background: rgba(255,255,255,0.15);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .cta-icon span { font-size: 14px; }

    /* --- Mobile Toggle --- */
    .mobile-toggle {
      display: none;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 10px;
    }

    .hamburger {
      width: 24px;
      height: 18px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .hamburger span {
      width: 100%;
      height: 2px;
      background: var(--primary);
      border-radius: 2px;
      transition: var(--transition);
    }

    .mobile-toggle.active .hamburger span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
    .mobile-toggle.active .hamburger span:nth-child(2) { opacity: 0; }
    .mobile-toggle.active .hamburger span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

    /* --- Responsive --- */
    @media (max-width: 1024px) {
      .nav-menu, .top-bar { display: none; }
      .mobile-toggle { display: block; }
      .header { height: 70px; }
      .header.scrolled { top: 0; left: 0; right: 0; width: 100%; border-radius: 0; }
    }

    /* --- Mobile Drawer --- */
    .mobile-drawer {
      position: fixed;
      top: 0;
      right: -100%;
      width: 80%;
      max-width: 320px;
      height: 100vh;
      background: white;
      z-index: 2000;
      transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      padding: 30px;
      display: flex;
      flex-direction: column;
      box-shadow: -20px 0 60px rgba(0,0,0,0.1);
    }

    .mobile-drawer.open { right: 0; }

    .drawer-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
    }

    .drawer-title { font-size: 20px; font-weight: 800; color: var(--primary); }
    .close-drawer { background: #f3f4f6; border: none; padding: 10px; border-radius: 12px; }

    .mobile-links {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .mobile-links a {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 16px;
      border-radius: 16px;
      text-decoration: none;
      color: var(--text-muted);
      font-weight: 600;
      transition: 0.3s;
    }

    .mobile-links a.active, .mobile-links a:hover {
      background: #fff1f2;
      color: var(--accent);
    }

    .mobile-footer { margin-top: auto; padding-top: 30px; }
    .mobile-btn {
      width: 100%;
      padding: 16px;
      background: var(--primary);
      color: white;
      text-align: center;
      border-radius: 16px;
      font-weight: 700;
      display: block;
      text-decoration: none;
    }

    .mobile-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.5);
      backdrop-filter: blur(4px);
      z-index: 1999;
      opacity: 0;
      visibility: hidden;
      transition: 0.3s;
    }

    .mobile-overlay.visible { opacity: 1; visibility: visible; }
  `]
})
export class HeaderComponent {
  menuOpen = false;
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 40;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.style.overflow = 'auto';
  }
}
