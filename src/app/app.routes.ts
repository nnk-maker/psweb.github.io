import { Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    {path: 'crisis-list', component: CrisisListComponent},
    {path: 'heroes-list', component: HeroesListComponent},
    {path: 'about', component: AboutusComponent},
    {path: 'contact', component: ContactComponent},
    { path: 'menu', component: MenuComponent },
    {path: '', redirectTo: '/crisis-list', pathMatch: 'full'},
];
