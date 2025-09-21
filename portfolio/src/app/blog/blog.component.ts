import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  carouselOptions = {
    loop: true,
    margin: 15,
    stagePadding: 0,
    dots: true,
    nav: false,
    navSpeed: 700,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1200: { items: 3 },
    },
  };
  posts = [
    {
      title: 'Axion Labs Case Study',
      summary: 'Analyzing the work on Axion Labs',
      image: '../../assets/cnc_machining.jpg',
      link: '/axion',
    },
    {
      title: 'Ace of Fades',
      summary: 'Developing a digital punch card system',
      image: '../../assets/ace_logo.png',
      link: '/ace',
    },
    {
      title: 'Dead by Port',
      summary: 'An open-source cybersecurity tool',
      image: '../../assets/docker_logo.png',
      link: '/deadbyport',
    },
  ];

  constructor(private router: Router) {}
  ngOnInit() {}

  openPost(post: any) {
    this.router.navigate([post.link], { state: { postData: post } });
  }
}
