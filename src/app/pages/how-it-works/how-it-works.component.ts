import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.css'
})
export class HowItWorksComponent {
  readonly processSteps = [
    {
      step: '01',
      eyebrow: 'Tell us what you need',
      title: 'Pick a service and share the details',
      description:
        'Choose from cleaning, repairs, beauty, appliance care, and more. Add timing, location, and a few notes so we can match the job correctly from the start.',
      icon: 'apps',
      points: ['Browse curated categories', 'Add notes or issue details', 'Choose your preferred slot']
    },
    {
      step: '02',
      eyebrow: 'We confirm the match',
      title: 'Get upfront pricing and a trusted pro',
      description:
        'Once your request is placed, we line it up with a vetted professional and confirm the booking details so everything feels predictable before the visit.',
      icon: 'verified',
      points: ['Transparent pricing', 'Background-checked professionals', 'Booking confirmation instantly']
    },
    {
      step: '03',
      eyebrow: 'Service at your doorstep',
      title: 'Track arrival and enjoy hassle-free service',
      description:
        'Your professional arrives on time with the right tools and checklist. You get clear communication, tidy execution, and a smooth service experience.',
      icon: 'home_repair_service',
      points: ['Live visit updates', 'Professional equipment ready', 'Clear communication throughout']
    },
    {
      step: '04',
      eyebrow: 'Wrap up with confidence',
      title: 'Pay securely and rate the experience',
      description:
        'Only pay after completion, then leave a quick rating so we keep service quality high and continue improving every booking on the platform.',
      icon: 'credit_score',
      points: ['Safe digital payment', 'Easy invoice trail', 'Simple post-service review']
    }
  ];

  readonly trustHighlights = [
    {
      icon: 'bolt',
      title: 'Fast booking flow',
      description: 'Complete your request in minutes with a guided flow that removes guesswork.'
    },
    {
      icon: 'workspace_premium',
      title: 'Verified experts',
      description: 'We prioritize trained professionals with quality checks and strong customer feedback.'
    },
    {
      icon: 'visibility',
      title: 'Full visibility',
      description: 'Stay informed from confirmation to completion with status updates and clear communication.'
    }
  ];

  readonly serviceMoments = [
    'Choose the service',
    'Confirm time and pricing',
    'Professional arrives',
    'Review and rebook anytime'
  ];
}
