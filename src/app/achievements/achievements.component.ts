import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  achievements = [
    {
      title: 'Certified Scrum Master',
      description: 'Achieved certification as a Scrum Master, enhancing project management skills and agile methodologies.',
      image: 'assets/certified-scrum-master.jpg',
      dateRange: 'June 2022'
    },
    {
      title: 'Top Performer Award',
      description: 'Recognized as a top performer for exceeding sales targets and contributing significantly to team success.',
      image: 'assets/top-performer-award.jpg',
      dateRange: 'December 2021'
    },
    {
      title: 'Innovation Award',
      description: 'Received an award for innovative solutions that improved operational efficiency and reduced costs.',
      image: 'assets/innovation-award.jpg',
      dateRange: 'March 2020'
    }
    // Add more achievements as needed
  ];

  // Method to toggle image visibility
  imageVisible: boolean[] = [];

  toggleImage(index: number) {
    this.imageVisible[index] = !this.imageVisible[index];
  }

}
