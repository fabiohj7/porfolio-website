import { Component, ViewChild, ElementRef } from '@angular/core';

interface Skill {
  image: string;
  alt: string;
  header: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  @ViewChild('itemsContainer') itemsContainer!: ElementRef;

  skills: Skill[] = [
    {
      image: '../../assets/python-logo.png',
      alt: 'Python logo',
      header: 'Python Language',
      description: 'Learned Python in class',
    },
    {
      image: '../../assets/C++-Logo.png',
      alt: 'C++ logo',
      header: 'C++ Language',
      description:
        'In shool C++ was the first language that was taught, started with basics to later on doing competitive programming with C++.',
    },
    {
      image: '../../assets/C-logo.png',
      alt: 'C logo',
      header: 'C Language',
      description: 'Learned C in class',
    },
    {
      image: '../../assets/Java-logo.png',
      alt: 'Java logo',
      header: 'Java Langauge',
      description: 'Learned Java in class',
    },
    {
      image: '../../assets/Linux-logo.png',
      alt: 'Linux logo',
      header: 'Linux OS',
      description: 'Learned Linux in class',
    },
  ];

  ngOnInit() {
    console.log('Skills component initialized');
  }

  scrollLeft() {
    const container = this.itemsContainer.nativeElement;
    const itemWidth = container.querySelector('.item').offsetWidth + 20;
    container.scrollBy({
      left: -itemWidth,
      behavior: 'smooth',
    });
  }
  scrollRight() {
    const container = this.itemsContainer.nativeElement;
    const itemWidth = container.querySelector('.item').offsetWidth + 20;
    container.scrollBy({
      left: itemWidth,
      behavior: 'smooth',
    });
  }

  isScrollable() {
    if (this.itemsContainer) {
      const container = this.itemsContainer.nativeElement;
      return container.scrollWidth > container.clientWidth;
    }
    return false;
  }
}
