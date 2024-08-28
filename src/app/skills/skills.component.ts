import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  skills = [
    { name: 'Java', logo: 'assets/java-logo.png' },
    { name: 'Spring', logo: 'assets/spring-logo.png' },
    { name: 'Spring Boot', logo: 'assets/spring-boot-logo.png' },
    { name: 'Spring Security', logo: 'assets/spring-security-logo.png' },
    { name: 'Angular', logo: 'assets/angular-logo.png' },
    { name: 'Hibernate', logo: 'assets/hibernate-logo.png' },
    { name: 'MySQL', logo: 'assets/mysql-logo.png' },
    { name: 'SQLite', logo: 'assets/sqlite-logo.png' },
    { name: 'PostgreSQL', logo: 'assets/postgresql-logo.png' },
    { name: 'JavaScript', logo: 'assets/javascript-logo.png' },
    { name: 'Firebase', logo: 'assets/firebase-logo.png' }
  ];
}
