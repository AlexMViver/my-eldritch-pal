import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-showreel',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './showreel.component.html',
  styleUrl: './showreel.component.css'
})
export class ShowreelComponent {

  @ViewChild('carouselImg', { static: false, read:ElementRef }) carouselImg!: ElementRef;
  @ViewChild('carousel', { static: false, read:ElementRef }) carousel!: ElementRef;
  

  imgList = [{id:0, src: "assets/images/Temp2.jpg", name:"abc", species:"abc"},{id:1, src: "assets/images/Temp.jpg", name:"abc", species:"abc"},{id:2, src: "assets/images/Temp.jpg", name:"abc", species:"abc"},
    {id:3, src: "assets/images/Temp.jpg", name:"abc", species:"abc"},{id:4, src: "assets/images/Temp.jpg", name:"abc", species:"abc"},{id:5, src: "assets/images/Temp.jpg", name:"abc", species:"abc"}
  ];

  idx = this.imgList.length/2;
  maxIdx = this.imgList.length;

  constructor(){}

  back(){
    this.updateMaxIdx();
    this.idx = (this.idx - 1 + this.maxIdx) % this.maxIdx;
  }

  forward(){
    this.updateMaxIdx();
    this.idx = (this.idx + 1) % this.maxIdx;
  }

  updateMaxIdx(){
    const carouselWidth = this.carousel.nativeElement.offsetWidth;
    const imgWidth = this.carouselImg.nativeElement.offsetWidth;

    this.maxIdx = (this.imgList.length +1) - Math.floor(carouselWidth/imgWidth);
  }

  updateCarouselPosition() {
    if(!this.carouselImg){
      return "";
    }

    const imgWidth = this.carouselImg.nativeElement.offsetWidth;
    const offSet = this.idx*imgWidth;
    return `translateX(-${offSet}px)`
  }

}

