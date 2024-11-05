import { Component, ElementRef, HostListener, Input, ViewChild, ChangeDetectorRef, OnInit, OnDestroy, } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import {MatButtonModule} from '@angular/material/button';
import { PalDTO } from '../../_dtos/pal.dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-month',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './top-month.component.html',
  styleUrl: './top-month.component.css'
})
export class TopMonthComponent implements OnInit, OnDestroy {

  topfriendImg1Translate = 0;
  topfriendImg2Translate = 0;

  @Input() featuredPal!: PalDTO;

  @ViewChild('topFriendAbove', { static: false, read:ElementRef }) topFriendAboveImg!: ElementRef;
  @ViewChild('topFriendBelow', { static: false, read:ElementRef }) topFriendBelowImg!: ElementRef;
  @ViewChild('topFriendContainer', { static: false, read:ElementRef }) topFriendContainer!: ElementRef;
  @ViewChild('imageContainer', { static: false, read:ElementRef }) imageContainer!: ElementRef;

  mobileQuery: MediaQueryList;
  isLargeScreen = false;

  private _mobileQueryListener: () => void;

  constructor (private media: MediaMatcher, private changeDetectorRef: ChangeDetectorRef){
    this.mobileQuery = this.media.matchMedia('(min-width: 992px)');
    this._mobileQueryListener = () => this.onMediaChange();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.onMediaChange(); // Initial check
  }

  onMediaChange(): void {
    this.isLargeScreen = this.mobileQuery.matches; // Update the property based on the media query
    this.changeDetectorRef.detectChanges(); // Trigger change detection
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


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
    this.topfriendImg1Translate = translateY/2;
    this.topfriendImg2Translate = translateY;

    //this.topFriendAboveImg.nativeElement.style.transform = `translateY(${translateY/2}px)`;
    //this.topFriendBelowImg.nativeElement.style.transform = `translateY(${translateY}px)`;
  }
}
