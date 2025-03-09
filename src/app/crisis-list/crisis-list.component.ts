import { Component } from '@angular/core';
import { HeroesListComponent } from "../heroes-list/heroes-list.component";
import { AboutusComponent } from "../aboutus/aboutus.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-crisis-list',
  imports: [HeroesListComponent, AboutusComponent, ContactComponent, FooterComponent],
  templateUrl: './crisis-list.component.html',
  styleUrl: './crisis-list.component.css'
})
export class CrisisListComponent {

}
