import { AfterContentChecked, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ReviewCardComponent } from './review-card/review-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [ReviewCardComponent, CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements AfterContentChecked {

  @ViewChild('reviewReel', { static: false, read:ElementRef }) reviewReel!: ElementRef;

  selectedIdx = 1;

  translateX = 0;

  reviewList = [
    {text: "Praise the worm. Praise the worm. Praise the worm.", reviewer: "Joaquin, Human"},
    {text: "A literally mind-blowing experience!", reviewer: "Rebecca, Human"},
    {text: "⍰█☐█☐☐⍰██⍰⍰⍰☐ ⍰⍰█☐██ ☐█⍰ ██⍰⍰⍰☐", reviewer: "Paul, Paul"},
    {text: "It was pretty cool!", reviewer: "Ignacius, Devil"},
  ]

  constructor(private cdr : ChangeDetectorRef) {}


  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }

  jumpToSlide(idx:number) {
    this.selectedIdx = idx;
  }

  updateCarouselPosition() {
    if(!this.reviewReel){
      return "";
    }

    const selectedCard = this.reviewReel.nativeElement.children[this.selectedIdx] as HTMLElement;
    if(!selectedCard) {
      return "";
    }


      const showreelWidth = this.reviewReel.nativeElement.clientWidth;
      const childOffset = selectedCard.offsetLeft;
      const childWidth = selectedCard.clientWidth;

      const translateX = -(childOffset - (showreelWidth / 2) + (childWidth / 2));

    return `translateX(${translateX}px)`
  }

}
