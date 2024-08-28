import { Component } from '@angular/core';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrl: '/src/styles.css'
})
export class WebpageComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
