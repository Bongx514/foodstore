import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent {
  isMobileMenuVisible: boolean = false;

  toggleMobileMenu() {
    this.isMobileMenuVisible = !this.isMobileMenuVisible;
  }
}
