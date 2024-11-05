import { Component } from '@angular/core';
import { ReviewCardComponent } from './review-card/review-card.component';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [ReviewCardComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {

}
