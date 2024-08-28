import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-webpage',
  templateUrl: './demo-webpage.component.html',
  styleUrl: './demo-webpage.component.css'
})
export class DemoWebpageComponent {
    
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
