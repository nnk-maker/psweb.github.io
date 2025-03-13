//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import menuData from '../../assets/menu-data.json'; 

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  //private jsonFilePath = 'assets/menu-data.json'; //api Path to the JSON file

  //constructor(private http: HttpClient) { }

  getMenu(): Observable<any[]> {
    return of(menuData);                             //  return from(fetch(this.jsonFilePath).then(response => response.json()));                                 //this.http.get<any[]>(this.menuUrl);
  }
  
}
