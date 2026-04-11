import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

export interface ApiService {
  _id: string;
  name: string;
  category: {
    _id: string;
    name: string;
    description: string;
    createdAt: string;
    __v: number;
  };
  description: string;
  price: number;
  duration: number;
  createdAt: string;
  __v: number;
}

@Injectable({ providedIn: 'root' })
export class ServiceDataService {
  private apiUrl = 'https://av-backend-e4o9.onrender.com/api/services';

  constructor(private http: HttpClient) {}

  private categories: Category[] = [
    {
      name: 'Personal Assistance',
      slug: 'personal-assistance',
      services: [
        {
          id: 'queue-standing',
          name: 'Queue Standing Services',
          category: 'Personal Assistance',
          description: 'Hire someone to wait in line for you for tickets, product launches, or appointments.',
          price: '₹299',
          priceType: 'hourly',
          image: 'assets/images/queue-standing.png',
          rating: 4.5,
          reviewCount: 342,
          duration: 'Flexible',
          included: [ 'Line holding', 'Real-time updates', 'Secure spot hand-off', 'Rain or shine service' ]
        },
        {
          id: 'personal-assistant',
          name: 'Personal Assistant Services',
          category: 'Personal Assistance',
          description: 'Professional help for managing schedules, emails, bookings, and daily organization.',
          price: '₹599',
          priceType: 'hourly',
          image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop',
          rating: 4.8,
          reviewCount: 893,
          duration: 'Flexible',
          included: [ 'Schedule management', 'Email correspondence', 'Booking and reservations', 'Basic admin tasks' ]
        },
        {
          id: 'writing-helper',
          name: 'Writing Helper Services',
          category: 'Personal Assistance',
          description: 'Expert assistance for drafting, editing, proofreading, and content creation.',
          price: '₹499',
          priceType: 'hourly',
          image: 'assets/images/writing-helper.png',
          rating: 4.9,
          reviewCount: 512,
          duration: 'Flexible',
          included: [ 'Drafting documents', 'Proofreading', 'Content editing', 'Formatting' ]
        },
        {
          id: 'task-assistant',
          name: 'Task Assistant Services',
          category: 'Personal Assistance',
          description: 'General help for day-to-day random tasks and chores to save your time.',
          price: '₹349',
          priceType: 'hourly',
          image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=600&auto=format&fit=crop',
          rating: 4.6,
          reviewCount: 785,
          duration: 'Flexible',
          included: [ 'Task execution', 'Misc chores', 'Organizing items', 'Documentation help' ]
        },
        {
          id: 'personal-errand',
          name: 'Personal Errand Service',
          category: 'Personal Assistance',
          description: 'Delivery mapping, grocery pickups, and running errands across the city.',
          price: '₹399',
          priceType: 'starts',
          image: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=600&auto=format&fit=crop',
          rating: 4.7,
          reviewCount: 1102,
          duration: '1-3 hours',
          included: [ 'Grocery pickup', 'Package delivery', 'Dry cleaning drop-off', 'Local purchases' ]
        },
        {
          id: 'office-assistant',
          name: 'Office Assistant Service',
          category: 'Personal Assistance',
          description: 'On-demand administrative help and office maintenance support.',
          price: '₹699',
          priceType: 'hourly',
          image: 'https://images.unsplash.com/photo-1524749292158-7540c2494485?q=80&w=600&auto=format&fit=crop',
          rating: 4.8,
          reviewCount: 420,
          duration: 'Flexible',
          included: [ 'File organization', 'Basic data entry', 'Office tidying', 'Scheduling help' ]
        }
      ]
    },
    {
      name: 'Health & Wellness',
      slug: 'health-wellness',
      services: [
        {
          id: 'elderly-support',
          name: 'Elderly Support Services',
          category: 'Health & Wellness',
          description: 'Compassionate companionship, assistance with daily routines, and medical visit accompaniments.',
          price: '₹499',
          priceType: 'hourly',
          image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop',
          badge: 'CARE',
          rating: 4.9,
          reviewCount: 1530,
          duration: 'Flexible',
          included: [ 'Companionship', 'Medication reminders', 'Mobility assistance', 'Meal help' ]
        },
        {
          id: 'home-yoga',
          name: 'Home Yoga Service',
          category: 'Health & Wellness',
          description: 'Personalized yoga sessions at home guided by certified instructors for physical and mental well-being.',
          price: '₹799',
          priceType: 'hourly',
          image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop',
          rating: 4.8,
          reviewCount: 882,
          duration: '60 mins',
          included: [ 'Personalized routines', 'Posture correction', 'Breathing exercises', 'Meditation guidance' ]
        },
        {
          id: 'home-workout',
          name: 'Home Workout Service',
          category: 'Health & Wellness',
          description: '1-on-1 personal training and fitness coaching tailored to your goals in your living room.',
          price: '₹899',
          priceType: 'hourly',
          image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop',
          rating: 4.7,
          reviewCount: 712,
          duration: '60 mins',
          included: [ 'Custom fitness plan', 'Form monitoring', 'Cardio & strength training', 'Equipment guidance' ]
        }
      ]
    },
    {
      name: 'Outdoor & Specialized',
      slug: 'outdoor-specialized',
      services: [
        {
          id: 'garden-cutting',
          name: 'Garden Cutting Service',
          category: 'Outdoor & Specialized',
          description: 'Professional lawn mowing, pruning, and general garden maintenance and cleanup.',
          price: '₹599',
          priceType: 'starts',
          image: 'assets/images/garden-cutting.png',
          rating: 4.6,
          reviewCount: 520,
          duration: '1-3 hours',
          included: [ 'Lawn mowing', 'Hedge trimming', 'Weed removal', 'Waste cleanup' ]
        },
        {
          id: 'farming-helper',
          name: 'Farming Helper Instant',
          category: 'Outdoor & Specialized',
          description: 'Instant manual labor assistance for farming, harvesting, and agricultural activities.',
          price: '₹399',
          priceType: 'hourly',
          image: 'assets/images/farming-helper.png',
          rating: 4.5,
          reviewCount: 310,
          duration: 'Flexible',
          included: [ 'Harvesting assistance', 'Soil preparation', 'Equipment handling', 'Crop care' ]
        },
        {
          id: 'tour-guide',
          name: 'Tour Guide Services',
          category: 'Outdoor & Specialized',
          description: 'Local experts to guide you through city tours, historical landmarks, and hidden gems.',
          price: '₹999',
          priceType: 'starts',
          image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=600&auto=format&fit=crop',
          rating: 4.9,
          reviewCount: 1045,
          duration: 'Half/Full Day',
          included: [ 'Customized itinerary', 'Historical insights', 'Local navigation', 'Photo spots recommendations' ]
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

  getApiServices(): Observable<ApiService[]> {
    return this.http.get<ApiService[]>(this.apiUrl);
  }
}
