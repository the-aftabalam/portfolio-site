import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  highlights = [
    { icon: 'code', title: 'Skills', content: 'Proficient in Java, Spring Boot, Angular, and more.' },
    { icon: 'work', title: 'Experience', content: 'Worked on various challenging projects in the last 2 years.' },
    { icon: 'emoji_events', title: 'Achievements', content: 'Recipient of the Rising Star Certificate from HostBooks.' },
  ];
  @ViewChild('typingText') typingText!: ElementRef;

  private text = 'Full Stack Web Developer with 2 years of experience in building scalable applications.';
  private speed = 100; // Speed of typing effect (milliseconds per character)
  private index = 0;

  ngOnInit(): void {
    // Initialization logic if needed
  }

  ngAfterViewInit(): void {
    // Ensure typingText is available before starting typing effect
    this.typeText();
  }

  typeText() {
    if (this.index < this.text.length) {
      this.typingText.nativeElement.textContent += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeText(), this.speed);
    }
  }

  downloadResume() {
    const resumeUrl = 'https://drive.google.com/file/d/1vR2ReFAE5_r8tUA-wBN6G1OgguPzfbyP/view?usp=sharing'; // URL of your resume
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Aftab_Alam_Resume.pdf';
    link.click();
  }
  
  viewResume() {
    const resumeUrl = 'https://drive.google.com/file/d/1vR2ReFAE5_r8tUA-wBN6G1OgguPzfbyP/view?usp=sharing'; // URL of your resume
    window.open(resumeUrl, '_blank');
  }
}
