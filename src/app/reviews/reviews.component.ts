import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Review {
  name: string;
  comment: string;
  rating: number;
}
@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit { 

  reviews: Review[] = [];

 /*  constructor(private http: HttpClient) {} */

  ngOnInit(): void {
    /* this.http.get<Review[]>('https://api.example.com/reviews').subscribe(data => {
      this.reviews = data;
    }); */
  }

  getRatingStars(rating: number): string {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  }

}
