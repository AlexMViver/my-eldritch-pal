import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { PalDTO } from '../../_dtos/pal.dto';

@Component({
  selector: 'app-top-month',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './top-month.component.html',
  styleUrl: './top-month.component.css'
})
export class TopMonthComponent {



  @Input() featuredPal!: PalDTO;

  @ViewChild('topFriendAbove', { static: false, read:ElementRef }) topFriendAboveImg!: ElementRef;
  @ViewChild('topFriendBelow', { static: false, read:ElementRef }) topFriendBelowImg!: ElementRef;
  @ViewChild('topFriendContainer', { static: false, read:ElementRef }) topFriendContainer!: ElementRef;
  @ViewChild('imageContainer', { static: false, read:ElementRef }) imageContainer!: ElementRef;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    const contStart = this.topFriendContainer.nativeElement.offsetTop;
    const imageContY = this.imageContainer.nativeElement.offsetHeight;
    const maxAnimationMove = this.topFriendContainer.nativeElement.offsetHeight - imageContY;

    const scrollWithinContainer = scrollPosition - contStart + (this.topFriendContainer.nativeElement.offsetHeight*0.7);
    const scrollRatio = Math.min(Math.max(scrollWithinContainer / this.topFriendContainer.nativeElement.offsetHeight, 0), 1);
    const translateY = scrollRatio*maxAnimationMove;

    //Apply the translation
    this.topFriendAboveImg.nativeElement.style.transform = `translateY(${translateY/2}px)`;
    this.topFriendBelowImg.nativeElement.style.transform = `translateY(${translateY}px)`;
  }
}
