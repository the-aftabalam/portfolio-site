import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  projects = [
    {
      title: 'Healthcare Management System',
      description: 'A comprehensive system to manage patient records, appointments, and billing. Includes features for staff management, medical history tracking, and integration with third-party healthcare APIs.',
      image: 'assets/healthcare.png',
      link: 'https://example.com/healthcare-management-system',
      source: 'https://github.com/TheAftabAlam/hms',
      techStack: ['Angular', 'Spring Boot', 'Java', 'MySQL', 'REST API', 'JWT', 'Angular Material']
    },    
    {
      title: 'Ahaar POS',
      description: 'Streamline your sales, order processing, and kitchen operations effortlessly with HB Aahar POS system. Integrated Swiggy and Zomato using Urban Piper platform, expanding project reach',
      image: 'assets/pos.png',
      link: 'https://play.google.com/store/apps/details?id=hostbooks.com.aahar&hl=en_IN',
      source: 'https://play.google.com/store/apps/details?id=hostbooks.com.aahar&hl=en_IN',
      techStack: ['Java', 'Spring Boot', 'Firebase', 'MySQL', 'SqlLite', 'Hiberante','Spring Security', 'Web Sockets']
    },
    {
      title: 'HB Super App',
      description: 'HB Super App is a comprehensive business management solution developed by HostBooks Limited. Contributed to the development of a comprehensive business management solution.',
      image: 'assets/hb-super-app.png',
      link: 'https://example.com/hb-super-app',
      source: 'https://play.google.com/store/apps/details?id=hostbooks.com.hbsuper&hl=en_IN',
      techStack:['Java', 'Spring Boot', 'MySQL', 'Spring Security','Hiberante','Angular','Css','Html']
    },
    {
      title: 'Cricbuzz Clone',
      description: 'A clone of the popular Cricbuzz platform for live cricket scores and updates. Includes features for live score updates, match schedules, and player statistics.',
      image: 'assets/cricbuzz-clone.png',
      link: 'https://luxury-douhua-2f73cb.netlify.app/',
      source: 'https://github.com/TheAftabAlam/CricBuzz',
      techStack: ['JavaScript', 'Node.js', 'Html', 'Css']
    },
    {
      title: 'Nursery Plant Management',
      description: 'A system for managing nursery plants, including inventory, growth tracking, and sales management. Features include plant care schedules, sales reporting, and customer management.',
      image: 'assets/nursery-plant-management.png',
      link: 'https://example.com/nursery-plant-management',
      source: 'https://github.com/TheAftabAlam/Nursary-Plant-Api',
      techStack: ['Spring', 'SpringBoot', 'Spring Security', 'Java', 'MySql']
    },
    {
      title: 'Employee Management System',
      description: 'A comprehensive system for managing employee records, payroll, and performance evaluations. Includes features for tracking attendance, leaves, and employee data management.',
      image: 'assets/employee-management-system.jpg',
      link: 'https://example.com/employee-management-system',
      source: 'https://github.com/TheAftabAlam/EmployeeManagement-Springboot-Angular-',
      techStack: ['Java', 'Spring Boot', 'MySQL', 'Angular']
    }
  //   {
  //     title: 'Inventory Management System',
  //     description: 'An efficient system for managing inventory, stock levels, and supplier information. Features include stock tracking, order management, and reporting.',
  //     image: 'assets/inventory-management-system.jpg',
  //     link: 'https://example.com/inventory-management-system',
  //     source: 'https://github.com/user/inventory-management-system',
  //     techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'React']
  //   }
  ];
  
  
  viewProject(link: string): void {
    window.open(link, '_blank');
  }

  viewSourceCode(source: string): void {
    window.open(source, '_blank');
  }

}
