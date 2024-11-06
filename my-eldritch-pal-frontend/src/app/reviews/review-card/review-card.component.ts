import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.css'
})
export class ReviewCardComponent {

  @Input() isSelected! : boolean;

  @Input() idx! : number;
  @Input() reviewText! : string;
  @Input() reviewer! : string;

  @Output() clickSelect = new EventEmitter<number>();


  ngOnChanges(changes: SimpleChanges) {
    this.isSelected = changes['isSelected'].currentValue
  }

  cardClicked() {
    if(!this.isSelected) {
      this.clickSelect.emit(this.idx);
    }
  }
}
