import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GetPalListService } from '../../_services/get-pal-list/get-pal-list.service';
import { PalDTO } from '../../_dtos/pal.dto';

@Component({
  selector: 'app-showreel',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './showreel.component.html',
  styleUrl: './showreel.component.css'
})
export class ShowreelComponent implements AfterViewInit{

  @ViewChild('carouselImg', { static: false, read:ElementRef }) carouselImg!: ElementRef;
  @ViewChild('carousel', { static: false, read:ElementRef }) carousel!: ElementRef;
  
  palList: PalDTO[];

  hoveredPal: string = "";
  currentImageIdx: number = 0;
  imageCycle: any;

  idx : number;
  maxIdx : number;

  constructor(private getPalListService: GetPalListService,private cdref: ChangeDetectorRef){
    this.palList = this.getPalListService.getPals().slice(0,6);
    this.idx = this.palList.length/2 - 1;
    this.maxIdx = this.palList.length;
  }

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

    this.maxIdx = (this.palList.length +1) - Math.floor(carouselWidth/imgWidth);
  }

  updateCarouselPosition() {
    if(!this.carouselImg || typeof window==="undefined"){
      return "";
    }

    const imgStyle = window.getComputedStyle(this.carouselImg.nativeElement,null);
    const ml = +imgStyle.marginLeft.slice(0,-2);
    const mr = +imgStyle.marginRight.slice(0,-2);;

    const imgWidth = this.carouselImg.nativeElement.offsetWidth +ml+mr;
    const offSet = this.idx*imgWidth;
    return `translateX(-${offSet}px)`
  }

  cyclePhotos(pal: PalDTO) {
    if(this.imageCycle) {
      this.stopCyclingPhotos();
    }

    this.hoveredPal = pal.id;
    this.imageCycle = setInterval(() => {
      this.currentImageIdx = (this.currentImageIdx + 1) % pal.photos.length;
    }, 2000);
  }

  stopCyclingPhotos() {
    if(this.imageCycle) {
      clearInterval(this.imageCycle);
      this.imageCycle = null;
    }
    
    this.hoveredPal= "";
    this.currentImageIdx = 0;
  }

  ngAfterViewInit(): void {
    this.cdref.detectChanges();
  }


}

