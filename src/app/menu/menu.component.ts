import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  menuCategories$: any[] = []; // Specify the type of menuCategories$
  menuObservable$: Observable<any[]> | undefined = undefined; // Observable Property.

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.getMenuData();
  }

  getMenuData(): void {
    this.menuObservable$ = this.menuService.getMenu();
    if(this.menuObservable$) {
      this.menuObservable$. subscribe({
      next: (data: any[]) => { // Specify the type of data
        this.menuCategories$ = data; // Assign the data
      },
      error: (error: any) => { // Specify the type of error
        console.error('Error fetching menu data:', error);
      },
      complete: () => {
        console.log('Menu data fetch complete');
      }
    });
    } else {
      console.error("menuObservable$ is undefined");
    }
  }
}
