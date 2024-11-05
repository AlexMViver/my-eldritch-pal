import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { ShowreelComponent } from '../showreel/showreel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, ShowreelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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

    const step1 = contStart;
    const step2 = contStart + imageContY / 3;

    let translateValue = 0;
    if (scrollPosition >= step1 && scrollPosition < step2) {
      translateValue = maxAnimationMove * 0.66; // 1st step
    } else if (scrollPosition >= step2) {
      translateValue = maxAnimationMove; // 2nd step
    }


    //Apply the translation
    this.topFriendAboveImg.nativeElement.style.transform = `translateY(${translateValue}px)`;
    this.topFriendBelowImg.nativeElement.style.transform = `translateY(${translateValue}px)`;
  }
}
