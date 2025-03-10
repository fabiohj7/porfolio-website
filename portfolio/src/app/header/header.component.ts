import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isNavActive: boolean = false;

  toggle() {
    this.isNavActive = !this.isNavActive;
  }

  closeMenu() {
    this.isNavActive = false;
  }
}
