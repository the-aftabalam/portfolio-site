import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  experience = {
    logo: 'assets/company-logo.png', // Company logo URL
    dateRange: 'January 2023 - Present',
    role: 'Backend Developer',
    team: 'Java Development Team',
    location: 'Gurugram, Haryana',
    responsibilities: [
      'Architected and implemented scalable RESTful APIs using Spring Boot and Hibernate, enhancing system reliability and performance.',
      'Directed the seamless integration of multiple third-party services, including payment gateways and analytics tools, ensuring smooth operations.',
      'Optimized complex database queries and conducted performance tuning, leading to a 50% reduction in query execution times.',
      'Collaborated closely with frontend developers to design and implement robust Angular applications, improving user experience and application efficiency.'
    ],
    achievements: [
      'Boosted application performance by 30% through targeted optimizations and advanced caching strategies.',
      'Significantly reduced response times by refactoring SQL queries and leveraging indexing techniques.',
      'Provided mentorship and training to junior developers, fostering a culture of continuous improvement and adherence to best practices in Spring Boot and Java.'
    ]
};


}
