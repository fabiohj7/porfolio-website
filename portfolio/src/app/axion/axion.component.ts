import { Component, OnInit } from '@angular/core';
import { marked } from 'marked';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-axion',
  templateUrl: './axion.component.html',
  styleUrls: ['./axion.component.css'],
})
export class AxionComponent {
  content = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('../../assets/case-study.md', { responseType: 'text' })
      .subscribe(async (markdown) => {
        this.content = await marked.parse(markdown);
      });
  }
}
