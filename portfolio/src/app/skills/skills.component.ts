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

  // Image collage section
  images = [
    { src: '../../assets/tokyo.jpeg', alt: 'Image 1', info: 'Tokyo' },
    { src: '../../assets/bolivia.jpeg', alt: 'Image 2', info: 'Tokyo' },
    {
      src: '../../assets/hack_gang_award.JPG',
      alt: 'Image 3',
      info: '1st Place hackathon by Jala',
    },
    {
      src: '../../assets/president_list.jpg',
      alt: 'Image 4',
      info: 'President List GPA: 3.8',
    },
    {
      src: '../../assets/kiwanis_2021.jpg',
      alt: 'Image 5',
      info: 'Kiwanis award 2021',
    },
  ];

  skills: Skill[] = [
    {
      image: '../../assets/python-logo.png',
      alt: 'Python logo',
      header: 'Python Language',
      description:
        'I learned python as my first programming language, later on becoming my main one. Using it to write scripts, compete in competitive programming, develop ML models, and more',
    },
    {
      image: '../../assets/C++-Logo.png',
      alt: 'C++ logo',
      header: 'C++ Language',
      description:
        'This language was the first one that I was able to master, using it to create advanced algorithms and solve complex problems.',
    },
    {
      image: '../../assets/C-logo.png',
      alt: 'C logo',
      header: 'C Language',
      description:
        'As a student I had to learn C and use it, as a tutor I learned to love C++, using it for low-level programming and solving reverse engineering problems.',
    },
    {
      image: '../../assets/Java-logo.png',
      alt: 'Java logo',
      header: 'Java Langauge',
      description:
        'Although Java is not my most used language most of my students needed it, so java became a must for me, learning it at first as a student, I reinforced my knowledge when teaching it.',
    },
    {
      image: '../../assets/Linux-logo.png',
      alt: 'Linux logo',
      header: 'Linux OS',
      description:
        'Every cybersecurity enthusiast favorite OS, I learned linux because of my passion to cybersecurity, thus getting my own Linux based computers and constantly using them.',
    },
  ];

  ngOnInit() {
    console.log('Skills component initialized');
  }

  ngAfterViewInit() {
    const items = document.querySelectorAll('.item');

    items.forEach((item) => {
      item.addEventListener('touchstart', () => {
        item.classList.toggle('active');
      });

      item.addEventListener('mouseenter', () => {
        item.classList.add('active');
      });

      item.addEventListener('mouseleave', () => {
        item.classList.remove('active');
      });
    });

    const wrapper = document.querySelectorAll('.image-wrapper');

    wrapper.forEach((wrap) => {
      wrap.addEventListener('touchstart', () => {
        wrap.classList.toggle('active');
      });

      wrap.addEventListener('mouseenter', () => {
        wrap.classList.add('active');
      });

      wrap.addEventListener('mouseleave', () => {
        wrap.classList.remove('active');
      });
    });
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
