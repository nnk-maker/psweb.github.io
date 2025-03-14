import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../models/menu-item.interface';

@Component({
  selector: 'app-dish-details',
  imports: [CommonModule],
  templateUrl: './dish-details.component.html',
  styleUrl: './dish-details.component.css'
})
export class DishDetailsComponent implements OnInit {
  dishId: number | null = null;
  dishDetails: any;
  constructor(private route: ActivatedRoute, private menuService: MenuService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.dishId = Number(params.get('id'));
      if (this.dishId) {
        this.menuService.getMenu().subscribe((categories: any[]) => {
          categories.forEach((category: any) => {
            const foundItem: MenuItem | undefined = category.items.find((items: MenuItem) => items.id === this.dishId);
            if (foundItem) {
              this.dishDetails = foundItem;
            }
          });
        });
      }
    });
  }
}
