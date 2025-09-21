import { Component, OnInit } from '@angular/core';
import { marked } from 'marked';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-axion',
  templateUrl: './deadbyport.component.html',
  styleUrls: ['./deadbyport.component.css'],
})
export class DeadbyportComponent {
  content = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('../../assets/deadbyport.md', { responseType: 'text' })
      .subscribe(async (markdown) => {
        this.content = await marked.parse(markdown);
      });
  }
}
