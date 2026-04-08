import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Airveat — Services, On Demand'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'All Services — Airveat'
  },
  {
    path: 'services/:id',
    loadComponent: () => import('./pages/service-detail/service-detail.component').then(m => m.ServiceDetailComponent),
    title: 'Service Details — Airveat'
  },
  {
    path: 'booking-confirmation',
    loadComponent: () => import('./pages/booking-confirmation/booking-confirmation.component').then(m => m.BookingConfirmationComponent),
    title: 'Booking Confirmed — Airveat'
  },
  {
    path: 'partner',
    loadComponent: () => import('./pages/partner/partner.component').then(m => m.PartnerComponent),
    title: 'Become a Partner — Airveat'
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./pages/contact-us/contact-us.component').then(m => m.ContactUsComponent),
    title: 'Contact Us — Airveat'
  },
  {
    path: 'why-choose-us',
    loadComponent: () => import('./pages/why-choose-us/why-choose-us.component').then(m => m.WhyChooseUsComponent),
    title: 'Why Choice Us — Airveat'
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent),
    title: 'About Us — Airveat'
  },
  {
    path: 'how-it-works',
    loadComponent: () => import('./pages/how-it-works/how-it-works.component').then(m => m.HowItWorksComponent),
    title: 'How It Works — Airveat'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
    title: 'Login — Airveat'
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin.component').then(m => m.AdminComponent),
    title: 'Admin Dashboard — Airveat'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
