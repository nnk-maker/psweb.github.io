import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'painterwebproj';
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    console.log('Menu toggled:', this.isMobileMenuOpen); // Debugging
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
  }
   
// Close menu when clicking outside
  @HostListener('document:click', ['$event'])
   onClick(event: MouseEvent) {
     const menu = document.querySelector('.menu');
     const toggleButton = document.querySelector('.mobile-menu-toggle');
     // Debugging: Log the elements
    // console.log('Menu:', menu);
     //console.log('Toggle Button:', toggleButton);
 
     // Check if the click is outside the menu and toggle button
     if (menu && !menu.contains(event.target as Node)) {
       if (toggleButton && !toggleButton.contains(event.target as Node)) {
         this.isMobileMenuOpen = false;
         //console.log('Menu closed by clicking outside'); // Debugging
       }
     }
  }
}
