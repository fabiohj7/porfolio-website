import { Component, ViewChild, ElementRef } from '@angular/core';

interface Skill {
  image: string;
  alt: string;
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
      image: '../../assets/C++-Logo.svg',
      alt: 'C++ logo',
      description: 'Learned C++ in class',
    },
    {
      image: '../../assets/C-logo.png',
      alt: 'C logo',
      description: 'Learned C in class',
    },
    {
      image: '../../assets/Linux-logo.jpeg',
      alt: 'C++ logo',
      description: 'Learned Linux in class',
    },
    {
      image: '../../assets/Java-logo.png',
      alt: 'Java logo',
      description: 'Learned Java in class',
    },
    {
      image: '../../assets/python-logo.png',
      alt: 'Python logo',
      description: 'Learned Python in class',
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
