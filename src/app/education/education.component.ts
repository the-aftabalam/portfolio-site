import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  educationList = [
    {
      institution: 'Masai School',
      degree: 'Full Stack Developer',
      dateRange: 'March 2022 - Decemeber 2022',
      location: 'Banglore, India',
      logo: 'assets/SRMGPC-logo.png', // Ensure this path is correct
      achievements: [
        'Full Stack Developert',
        'Developed projects'
      ]
    },
    {
      institution: 'Shri Ramswaroop Memorial Group Of Professional Collage Lucknow',
      degree: 'Bachelor of Technology',
      dateRange: 'August 2017 - August 2021',
      location: 'Lucknow, India',
      logo: 'assets/masai-logo.png', // Ensure this path is correct
      achievements: [
        'Graduated with Honors',
        'Completed a voice controlled Home Automation project'
      ]
    },
    {
      institution: "Modern Public Inter College",
      degree: "Intermediate",
      dateRange: "July 2015 - July 2017",
      location: "Barabanki, India",
      logo: "assets/school-logo.png", // Ensure this path is correct
      achievements: [
        "Scored 90%",
        "Participated in science fair"
      ]
    },
    {
      institution: "Modern Public Inter College",
      degree: "High School",
      dateRange: "July 2015 - July 2017",
      location: "Barabanki, India",
      logo: "assets/school-logo.png", // Ensure this path is correct
      achievements: [
        "Scored 85%",
        "Participated in science fair"
      ]
    },
  ];
}
