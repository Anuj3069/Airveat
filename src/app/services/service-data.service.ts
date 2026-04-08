import { Injectable } from '@angular/core';

export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  priceType: 'starts' | 'fixed' | 'hourly';
  image: string;
  badge?: string;
  ctaLabel?: string;
  included?: string[];
  rating?: number;
  reviewCount?: number;
  duration?: string;
}

export interface Category {
  name: string;
  slug: string;
  services: Service[];
}

export interface Booking {
  id: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  address: string;
  professional: string;
  status: string;
  price: string;
}

@Injectable({ providedIn: 'root' })
export class ServiceDataService {

  private categories: Category[] = [
    {
      name: 'Home Cleaning',
      slug: 'home-cleaning',
      services: [
        {
          id: 'full-house-deep-cleaning',
          name: 'Full House Deep Cleaning',
          category: 'Home Cleaning',
          description: 'Intensive top-to-bottom cleaning including sanitization of all surfaces and high-traffic areas.',
          price: '₹4,999',
          priceType: 'starts',
          image: 'assets/images/deep-cleaning.jpg',
          rating: 4.8,
          reviewCount: 1324,
          duration: '4-6 hours',
          included: [
            'Complete floor mopping and vacuuming',
            'Bathroom deep scrub and disinfection',
            'Kitchen countertop and appliance cleaning',
            'Dusting of all surfaces, shelves, and fans',
            'Window sill and glass cleaning',
            'Trash removal and bin sanitization'
          ]
        },
        {
          id: 'sofa-carpet-shampoo',
          name: 'Sofa & Carpet Shampoo',
          category: 'Home Cleaning',
          description: 'Professional eco-friendly steam cleaning to remove deep-seated allergens and stains.',
          price: '₹1,599',
          priceType: 'starts',
          image: 'assets/images/carpet-cleaning.jpg',
          rating: 4.7,
          reviewCount: 886,
          duration: '2-3 hours',
          included: [
            'Pre-treatment stain removal',
            'Hot water extraction cleaning',
            'Eco-friendly shampoo application',
            'Deodorizing treatment',
            'Quick-dry technology application',
            'Post-cleaning inspection'
          ]
        },
        {
          id: 'kitchen-degreasing',
          name: 'Kitchen Degreasing',
          category: 'Home Cleaning',
          description: 'Heavy-duty cleaning of stovetops, exhaust fans, and cabinet surfaces to remove oil buildup.',
          price: '₹2,499',
          priceType: 'starts',
          image: 'assets/images/kitchen-cleaning.jpg',
          rating: 4.9,
          reviewCount: 742,
          duration: '2-4 hours',
          included: [
            'Stovetop deep degreasing',
            'Exhaust fan and chimney cleaning',
            'Cabinet surface scrubbing',
            'Sink and faucet polishing',
            'Tile and grout cleaning',
            'Countertop sanitization'
          ]
        }
      ]
    },
    {
      name: 'Electrical & Plumbing',
      slug: 'electrical-plumbing',
      services: [
        {
          id: 'emergency-electrical-repair',
          name: 'Emergency Electrical Repair',
          category: 'Electrical & Plumbing',
          description: 'Immediate assistance for short circuits, power outages, and faulty wiring by certified experts.',
          price: '₹499',
          priceType: 'hourly',
          image: 'assets/images/electrical-repair.jpg',
          badge: 'MOST BOOKED',
          ctaLabel: 'Instant Dispatch',
          rating: 4.9,
          reviewCount: 2512,
          duration: '1-3 hours',
          included: [
            'Circuit breaker inspection and reset',
            'Faulty wiring identification and repair',
            'Power outlet replacement',
            'Switchboard troubleshooting',
            'Safety compliance check',
            'Emergency lighting setup'
          ]
        },
        {
          id: 'leaking-pipe-fix',
          name: 'Leaking Pipe Fix',
          category: 'Electrical & Plumbing',
          description: 'Quick fix for kitchen and bathroom leaks.',
          price: '₹399',
          priceType: 'starts',
          image: 'assets/images/pipe-fix.jpg',
          rating: 4.6,
          reviewCount: 1278,
          duration: '1-2 hours',
          included: [
            'Leak source identification',
            'Pipe joint sealing',
            'Washer and gasket replacement',
            'Pressure testing',
            'Corrosion inspection',
            'Water flow optimization'
          ]
        },
        {
          id: 'appliance-installation',
          name: 'Appliance Installation',
          category: 'Electrical & Plumbing',
          description: 'Safe mounting and wiring for new appliances.',
          price: '₹599',
          priceType: 'starts',
          image: 'assets/images/appliance-install.jpg',
          rating: 4.7,
          reviewCount: 1195,
          duration: '1-3 hours',
          included: [
            'Appliance unboxing and inspection',
            'Electrical connection setup',
            'Wall mounting (if applicable)',
            'Plumbing connection (if applicable)',
            'Functionality testing',
            'Old appliance removal'
          ]
        }
      ]
    },
    {
      name: 'Painting & Renovation',
      slug: 'painting-renovation',
      services: [
        {
          id: 'interior-wall-painting',
          name: 'Interior Wall Painting',
          category: 'Painting & Renovation',
          description: 'Professional wall painting with premium paints and flawless finish for any room size.',
          price: '₹14,999',
          priceType: 'starts',
          image: 'assets/images/wall-painting.jpg',
          badge: 'POPULAR',
          rating: 4.8,
          reviewCount: 967,
          duration: '1-3 days',
          included: [
            'Surface preparation and priming',
            'Premium paint application (2 coats)',
            'Edge cutting and trim work',
            'Furniture protection and covering',
            'Post-painting cleanup',
            'Color consultation included'
          ]
        },
        {
          id: 'waterproofing',
          name: 'Waterproofing Solutions',
          category: 'Painting & Renovation',
          description: 'Protect your walls and roof from water damage with professional waterproofing treatment.',
          price: '₹8,999',
          priceType: 'starts',
          image: 'assets/images/waterproofing.jpg',
          rating: 4.7,
          reviewCount: 634,
          duration: '1-2 days',
          included: [
            'Damage assessment and diagnosis',
            'Surface cleaning and preparation',
            'Waterproof membrane application',
            'Joint and crack sealing',
            'Drainage improvement',
            'Quality assurance testing'
          ]
        },
        {
          id: 'door-window-repair',
          name: 'Door & Window Repair',
          category: 'Painting & Renovation',
          description: 'Fix squeaky doors, broken hinges, and damaged window frames with expert carpentry work.',
          price: '₹699',
          priceType: 'starts',
          image: 'assets/images/door-repair.jpg',
          rating: 4.5,
          reviewCount: 498,
          duration: '1-3 hours',
          included: [
            'Hinge replacement or repair',
            'Frame alignment adjustment',
            'Lock mechanism repair',
            'Weather stripping installation',
            'Glass panel replacement',
            'Wood treatment and finishing'
          ]
        }
      ]
    },
    {
      name: 'Salon at Home',
      slug: 'salon-at-home',
      services: [
        {
          id: 'haircut-styling',
          name: 'Haircut & Styling',
          category: 'Salon at Home',
          description: 'Professional haircut and styling at the comfort of your home by certified stylists.',
          price: '₹299',
          priceType: 'starts',
          image: 'assets/images/haircut.jpg',
          rating: 4.8,
          reviewCount: 1456,
          duration: '45-60 mins',
          included: [
            'Hair wash and conditioning',
            'Precision haircut',
            'Blow dry and styling',
            'Scalp massage',
            'Style recommendations',
            'Product application'
          ]
        },
        {
          id: 'facial-treatment',
          name: 'Facial Treatment',
          category: 'Salon at Home',
          description: 'Rejuvenating facial treatments using premium products for glowing, healthy skin.',
          price: '₹999',
          priceType: 'starts',
          image: 'assets/images/facial.jpg',
          rating: 4.9,
          reviewCount: 1312,
          duration: '60-90 mins',
          included: [
            'Skin analysis and consultation',
            'Deep cleansing and exfoliation',
            'Steam treatment',
            'Face mask application',
            'Moisturizing and SPF application',
            'Aftercare recommendations'
          ]
        }
      ]
    },
    {
      name: 'AC Repair & Service',
      slug: 'ac-repair',
      services: [
        {
          id: 'ac-service',
          name: 'AC Regular Service',
          category: 'AC Repair & Service',
          description: 'Complete AC servicing including filter cleaning, gas check, and performance optimization.',
          price: '₹1,299',
          priceType: 'starts',
          image: 'assets/images/ac-service.jpg',
          badge: 'SEASONAL DEAL',
          rating: 4.7,
          reviewCount: 1389,
          duration: '1-2 hours',
          included: [
            'Filter removal and deep cleaning',
            'Condenser coil cleaning',
            'Refrigerant level check',
            'Thermostat calibration',
            'Drainage pipe cleaning',
            'Performance efficiency test'
          ]
        },
        {
          id: 'ac-installation',
          name: 'AC Installation',
          category: 'AC Repair & Service',
          description: 'Expert installation of split and window ACs with proper mounting and electrical setup.',
          price: '₹1,999',
          priceType: 'starts',
          image: 'assets/images/ac-install.jpg',
          rating: 4.6,
          reviewCount: 901,
          duration: '2-4 hours',
          included: [
            'Site survey and bracket mounting',
            'Indoor/outdoor unit installation',
            'Copper piping and insulation',
            'Electrical wiring and connection',
            'Gas charging and pressure test',
            'Trial run and handover'
          ]
        }
      ]
    }
  ];

  private bookings: Booking[] = [];

  getAllCategories(): Category[] {
    return this.categories;
  }

  getAllServices(): Service[] {
    return this.categories.flatMap(cat => cat.services);
  }

  getServiceById(id: string): Service | undefined {
    return this.getAllServices().find(s => s.id === id);
  }

  getServicesByCategory(slug: string): Service[] {
    const cat = this.categories.find(c => c.slug === slug);
    return cat ? cat.services : [];
  }

  getCategoryByServiceId(serviceId: string): string {
    for (const cat of this.categories) {
      if (cat.services.find(s => s.id === serviceId)) {
        return cat.name;
      }
    }
    return '';
  }

  createBooking(serviceId: string, date: string, time: string, address: string): Booking {
    const service = this.getServiceById(serviceId);
    const booking: Booking = {
      id: 'BK-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
      serviceId,
      serviceName: service?.name || 'Service',
      date,
      time,
      address,
      professional: this.getRandomProfessional(),
      status: 'Confirmed',
      price: service?.price || '₹0'
    };
    this.bookings.push(booking);
    return booking;
  }

  getLatestBooking(): Booking | undefined {
    return this.bookings[this.bookings.length - 1];
  }

  private getRandomProfessional(): string {
    const names = ['Rajesh Kumar', 'Priya Sharma', 'Amit Patel', 'Sneha Reddy', 'Anil Deshmukh', 'Sunita Rao', 'Arjun Singh', 'Kavita Iyer'];
    return names[Math.floor(Math.random() * names.length)];
  }
}
