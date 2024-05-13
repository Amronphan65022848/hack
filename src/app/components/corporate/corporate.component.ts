import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-corporate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './corporate.component.html',
  styleUrl: './corporate.component.css'
})
export class CorporateComponent {
  items = [
    { premium: 'Premium Industry', industry: 'EDUCATION', description: 'With more than 10+ creative styles, students and mentors and teachers can now create voice overs for their daily sessions / presentations.' },
    { premium: 'Premium Industry', industry: 'INSURANCE', description: 'With more than 10+ creative styles, students and mentors and teachers can now create voice overs for their daily sessions / presentations.' },
    { premium: 'Premium Industry', industry: 'BANKING', description: 'With more than 10+ creative styles, students and mentors and teachers can now create voice overs for their daily sessions / presentations.' }
    // Add more items as needed
  ];
}
