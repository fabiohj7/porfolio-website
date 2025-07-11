import { Component, ViewChild, ElementRef } from '@angular/core';

export interface Skill {
  name: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'C',
      category: 'Programming Language',
      description:
        'I started learning C during my university coursework, to strengthen my understandin in low level programming.\n\nC taught me to write efficient, resource-conscious code and laid the foundation for my work in embedded systems and performance-critical applications.',
    },
    {
      name: 'C++',
      category: 'Programming Language',
      description:
        'I began learning C++ after gaining a solid foundation in C, driven by a desire to write high-performance and efficient programs. C++ opened the door to advanced concepts like object-oriented programming, templates, and the Standard Template Library (STL), which allowed me to develop scalable and maintainable code.\n\nI also chose C++ as my primary language for competitive programming, leveraging its speed and powerful standard library for algorithms and data structures. Through countless problem-solving sessions, I honed my skills in writing optimized code under time constraints, deepening my understanding of algorithm design and complexity analysis.',
    },
    {
      name: 'Python',
      category: 'Programming Language',
      description:
        "Python is my main language, chosen for its versatility and ease of use. I've applied it to Machine Learning, AI, Computer Vision, scripting, and competitive programming, using powerful libraries to bring complex ideas to life.",
    },
    {
      name: 'Linux',
      category: 'Tools',
      description:
        'I explored Linux for its strong presence in cybersecurity. I use Kali Linux for my security tools and Arch Linux for my daily development and programming needs. (Yes, I use Arch, btw.)\n\nAnother use a give Linux is for my robotics background, using it in to control my most advanced projects',
    },
    {
      name: 'Angular',
      category: 'Frameworks',
      description:
        'Learning the Angular Framework was a must due to my internship at Assuresoft.\n\nThis was the first framework I worked with having worked with it as a Fullstack developer.\n\nI continued using Angular for other projects like this website.',
    },
    { name: 'Docker', category: 'Tools', description: 'Hello world' },
    {
      name: 'Java',
      category: 'Programming Language',
      description:
        'As a Computer Peer Tutor I was able to level up my Java knowledge, given that I had to tutor other students main programming courses in this language.',
    },
    {
      name: 'Assembly',
      category: 'Programming Language',
      description:
        'Assembly is a language I learned early on in my Computer Science coursework.\n\nI use Assembly to this day in Capture The Flag (CTF) competitions mostly in its reverse engineering context.',
    },
    {
      name: 'Swift',
      category: 'Programming Language',
      description:
        "Driven by my passion for mobile apps, I learned Swift through school and personal projects. I'm currently using it to develop one of my most significant apps.",
    },
    {
      name: 'SQL',
      category: 'Programming Language',
      description:
        'I acquired SQL skills during a pivotal project and further honed them through advanced coursework. Now, I apply SQL across various academic and personal projects, enabling efficient data management and insightful analysis.',
    },
    {
      name: 'PyTorch',
      category: 'Frameworks',
      description:
        'A very useful Framework that allowed me to complete my school/personal machine learning projects.',
    },
    {
      name: 'Unity',
      category: 'Frameworks',
      description:
        'As a Computer Peer Tutor hosting I was tasked with hosting Game Jams where I was the Unity developer given my past experience with the Framework as a research assitant.',
    },
    {
      name: 'Aircrack-ng',
      category: 'Cybersecurity',
      description:
        'Used this tool as a way to learn more about pentesting, testing my own network to analyze how vulnerable it is.\n\nAlso gave a presentation about it to the ACM chapter at Cleveland State University.',
    },
    {
      name: 'Burp Suite',
      category: 'Cybersecurity',
      description:
        'Using burp suite mostly to exploit vulnerable websites in CTF competitions.',
    },
    {
      name: 'vim',
      category: 'Tools',
      description:
        'I use vim for most of my development, like this website, I set up my configuration using neovim to giving me an IDE better than any other and very customizable.',
    },
    {
      name: 'Git',
      category: 'Tools',
      description:
        'The way I save every project I worked with is by using git. Using it as personal storage, version control, and even website hoster.',
    },
    {
      name: 'Hashcat',
      category: 'Cybersecurity',
      description:
        'Using hashcat to crack password hashes, used mostly for events like CTF competitions.',
    },
  ];

  /* Image collage */

  images = [
    {
      src: '../../assets/cpt_cert1.JPG',
      alt: 'Image 1',
      info: 'CPT of the Semester Spring 2024',
    },
    {
      src: '../../assets/cpt_cert2.JPG',
      alt: 'Image 2',
      info: 'CPT of the Semester Fall 2024',
    },
    {
      src: '../../assets/hack_gang_award.JPG',
      alt: 'Image 3',
      info: '1st Place hackathon by Jalasoft',
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

  selectedSkill: Skill | null = null;

  openModal(skill: Skill) {
    this.selectedSkill = skill;
  }

  closeModal() {
    this.selectedSkill = null;
  }

  filteredSkills = [...this.skills];
  categories = [
    'All',
    'Programming Language',
    'Frameworks',
    'Tools',
    'Cybersecurity',
  ];

  filterSkills(category: string) {
    if (category === 'All') {
      this.filteredSkills = this.skills;
    } else {
      this.filteredSkills = this.skills.filter(
        (skill) => skill.category === category,
      );
    }
  }
}
