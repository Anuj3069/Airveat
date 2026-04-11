import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServiceDataService, Category, Service } from '../../services/service-data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="services-page" id="services-page">
      <div class="container">
        <!-- Page Header -->
        <div class="page-header animate-fade-in-up">
          <h1 class="page-title">All Services</h1>
          <div class="search-bar" id="services-search-bar">
            <span class="material-icons-outlined">search</span>
            <input type="text"
                   placeholder="Search for a service (e.g. AC Repair, Deep Cleaning...)"
                   (input)="filterServices($event)"
                   class="search-input"
                   id="services-search-input">
          </div>
        </div>

        <!-- Categories -->
        <div class="categories" *ngFor="let category of filteredCategories; let ci = index">
          <div class="category-section"
               [style.animation-delay]="ci * 150 + 'ms'">
            <div class="category-header">
              <h2 class="category-title">{{ category.name }}</h2>
              <a class="view-all-link">
                View all
                <span class="material-icons-outlined">arrow_forward</span>
              </a>
            </div>

            <!-- Home Cleaning style: 3-column equal grid for everything except electrical/plumbing -->
            <div class="service-grid" *ngIf="category.slug !== 'electrical-plumbing'">
              <div class="service-card" *ngFor="let service of category.services; let i = index"
                   [routerLink]="['/services', service.id]"
                   [style.animation-delay]="i * 100 + 'ms'">
                <div class="card-image">
                  <div class="card-img-placeholder" [style.background]="getServiceImageStyle(service)">
                  </div>
                  <span class="card-badge" *ngIf="service.badge">{{ service.badge }}</span>
                </div>
                <div class="card-body">
                  <h3 class="card-title">{{ service.name }}</h3>
                  <p class="card-desc">{{ service.description }}</p>
                  <div class="card-footer">
                    <span class="card-price">
                      {{ service.priceType === 'starts' ? 'Starts at ' : '' }}{{ service.price }}
                      {{ service.priceType === 'hourly' ? '/ hour' : '' }}
                    </span>
                    <button class="btn btn-outline btn-sm"
                            (click)="$event.stopPropagation();"
                            [routerLink]="['/services', service.id]">
                      {{ service.ctaLabel || 'Book Now' }}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Electrical & Plumbing style: Bento grid -->
            <div class="bento-grid" *ngIf="category.slug === 'electrical-plumbing'">
              <!-- Large featured card -->
              <div class="bento-featured"
                   *ngIf="category.services[0] as featured"
                   [routerLink]="['/services', featured.id]">
                <div class="bento-featured-img" [style.background]="getServiceImageStyle(featured)">
                  <span class="card-badge" *ngIf="featured.badge">{{ featured.badge }}</span>
                </div>
                <div class="bento-featured-body">
                  <h3>{{ featured.name }}</h3>
                  <p>{{ featured.description }}</p>
                  <div class="card-footer">
                    <span class="card-price">{{ featured.price }} / hour</span>
                    <button class="btn btn-primary btn-sm"
                            (click)="$event.stopPropagation();"
                            [routerLink]="['/services', featured.id]">
                      {{ featured.ctaLabel || 'Book Now' }}
                    </button>
                  </div>
                </div>
              </div>

              <!-- Smaller side cards -->
              <div class="bento-side">
                <div class="bento-side-card"
                     *ngFor="let service of category.services.slice(1)"
                     [routerLink]="['/services', service.id]">
                  <div class="bento-side-img" [style.background]="getServiceImageStyle(service)">
                  </div>
                  <div class="bento-side-body">
                    <h3>{{ service.name }}</h3>
                    <p>{{ service.description }}</p>
                    <span class="card-price">Starts {{ service.price }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-page {
      background: var(--color-bg-light);
      min-height: 100vh;
      padding: 40px 0 80px;
    }

    .page-header {
      margin-bottom: 40px;
    }

    .page-title {
      font-size: 36px;
      font-weight: 900;
      color: var(--color-text-primary);
      margin-bottom: 20px;
    }

    .search-bar {
      display: flex;
      align-items: center;
      gap: 12px;
      background: white;
      padding: 14px 20px;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--color-border);
      max-width: 600px;
      transition: box-shadow var(--transition-fast);
    }

    .search-bar:focus-within {
      box-shadow: var(--shadow-md);
      border-color: var(--color-text-light);
    }

    .search-bar .material-icons-outlined {
      color: var(--color-text-light);
      font-size: 22px;
    }

    .search-input {
      flex: 1;
      background: transparent;
      font-size: 15px;
    }

    .search-input::placeholder {
      color: var(--color-text-light);
    }

    /* Category Section */
    .category-section {
      margin-bottom: 56px;
      animation: fadeInUp 0.5s ease forwards;
      opacity: 0;
    }

    .category-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
    }

    .category-title {
      font-size: 24px;
      font-weight: 800;
      color: var(--color-text-primary);
    }

    .view-all-link {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 14px;
      font-weight: 600;
      color: var(--color-text-secondary);
      cursor: pointer;
      transition: all var(--transition-fast);
    }

    .view-all-link:hover {
      color: var(--color-accent-red);
      gap: 8px;
    }

    .view-all-link .material-icons-outlined {
      font-size: 18px;
    }

    /* Service Grid (3-column) */
    .service-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .service-card {
      background: white;
      border-radius: var(--radius-lg);
      overflow: hidden;
      cursor: pointer;
      transition: all var(--transition-base);
      box-shadow: var(--shadow-sm);
      animation: fadeInUp 0.5s ease forwards;
      opacity: 0;
    }

    .service-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }

    .card-image {
      position: relative;
      overflow: hidden;
    }

    .card-img-placeholder {
      width: 100%;
      aspect-ratio: 16/10;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255, 255, 255, 0.85);
    }

    .card-img-placeholder .material-icons-outlined {
      font-size: 48px;
    }

    .card-badge {
      position: absolute;
      top: 12px;
      left: 12px;
      background: var(--color-accent-red);
      color: white;
      font-size: 11px;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: var(--radius-sm);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .card-body {
      padding: 20px;
    }

    .card-title {
      font-size: 17px;
      font-weight: 700;
      color: var(--color-text-primary);
      margin-bottom: 8px;
    }

    .card-desc {
      font-size: 13px;
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin-bottom: 16px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .card-price {
      font-size: 16px;
      font-weight: 700;
      color: var(--color-text-primary);
    }

    /* Bento Grid */
    .bento-grid {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 24px;
    }

    .bento-featured {
      background: white;
      border-radius: var(--radius-lg);
      overflow: hidden;
      cursor: pointer;
      transition: all var(--transition-base);
      box-shadow: var(--shadow-sm);
    }

    .bento-featured:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }

    .bento-featured-img {
      position: relative;
      aspect-ratio: 16/10;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255, 255, 255, 0.85);
    }

    .bento-featured-img .card-badge {
      position: absolute;
      top: 12px;
      left: 12px;
    }

    .bento-featured-body {
      padding: 20px;
    }

    .bento-featured-body h3 {
      font-size: 19px;
      font-weight: 700;
      color: var(--color-text-primary);
      margin-bottom: 8px;
    }

    .bento-featured-body p {
      font-size: 13px;
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin-bottom: 16px;
    }

    .bento-side {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .bento-side-card {
      display: flex;
      background: white;
      border-radius: var(--radius-lg);
      overflow: hidden;
      cursor: pointer;
      transition: all var(--transition-base);
      box-shadow: var(--shadow-sm);
      flex: 1;
    }

    .bento-side-card:hover {
      transform: translateX(4px);
      box-shadow: var(--shadow-md);
    }

    .bento-side-img {
      width: 140px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255, 255, 255, 0.85);
    }

    .bento-side-img .material-icons-outlined {
      font-size: 40px;
    }

    .bento-side-body {
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .bento-side-body h3 {
      font-size: 16px;
      font-weight: 700;
      color: var(--color-text-primary);
      margin-bottom: 6px;
    }

    .bento-side-body p {
      font-size: 13px;
      color: var(--color-text-secondary);
      line-height: 1.5;
      margin-bottom: 8px;
    }

    /* Responsive */
    @media (max-width: 1024px) {
      .service-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .bento-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 640px) {
      .service-grid {
        grid-template-columns: 1fr;
      }

      .bento-side-card {
        flex-direction: column;
      }

      .bento-side-img {
        width: 100%;
        height: 120px;
      }
    }
  `]
})
export class ServicesComponent {
  categories: Category[] = [];
  filteredCategories: Category[] = [];

  constructor(private serviceData: ServiceDataService) {
    this.categories = this.serviceData.getAllCategories();
    this.filteredCategories = [...this.categories];
  }

  filterServices(event: Event): void {
    const query = (event.target as HTMLInputElement).value.toLowerCase().trim();
    if (!query) {
      this.filteredCategories = [...this.categories];
      return;
    }

    this.filteredCategories = this.categories
      .map(cat => ({
        ...cat,
        services: cat.services.filter(s =>
          s.name.toLowerCase().includes(query) ||
          s.description.toLowerCase().includes(query) ||
          s.category.toLowerCase().includes(query)
        )
      }))
      .filter(cat => cat.services.length > 0);
  }

  getServiceImageStyle(service: any): string {
    const images: Record<string, string> = {
      'full-house-deep-cleaning': 'assets/images/popular_cleaning.png',
      'sofa-carpet-shampoo': 'assets/images/carpet-cleaning.jpg',
      'kitchen-degreasing': 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600&auto=format&fit=crop',
      'emergency-electrical-repair': 'assets/images/electrical-repair.jpg',
      'leaking-pipe-fix': 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=600&auto=format&fit=crop',
      'appliance-installation': 'assets/images/appliance-install.jpg',
      'interior-wall-painting': 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop',
      'waterproofing': 'assets/images/waterproofing.jpg',
      'door-window-repair': 'assets/images/door-repair.jpg',
      'haircut-styling': 'assets/images/popular_salon.png',
      'facial-treatment': 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop',
      'pedicure-manicure': 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop',
      'ac-service': 'assets/images/popular_ac_repair.png',
      'ac-installation': 'assets/images/popular_ac_repair.png',
      'ac-gas-refill': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop',
    };
    const imageUrl = images[service.id] || service.image || 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop';
    return `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('${imageUrl}') center / cover no-repeat`;
  }

  getCategoryIcon(slug: string): string {
    const icons: Record<string, string> = {
      'home-cleaning': 'cleaning_services',
      'electrical-plumbing': 'electrical_services',
      'painting-renovation': 'format_paint',
      'salon-at-home': 'spa',
      'ac-repair': 'ac_unit',
      'personal-assistance': 'support_agent',
      'health-wellness': 'favorite',
      'outdoor-specialized': 'nature'
    };
    return icons[slug] || 'home_repair_service';
  }
}
