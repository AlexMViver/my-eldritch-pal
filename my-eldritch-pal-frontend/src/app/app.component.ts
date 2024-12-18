import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from "./home/home.component";
import { ReviewsComponent } from './reviews/reviews.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, MatSidenavModule, MatButtonModule, MatIconModule, RouterLink, RouterLinkActive,
    HeaderComponent, HomeComponent, ReviewsComponent, FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  @ViewChild('header', { static: true, read:ElementRef }) header!: ElementRef;
  headerHeight: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}
  
  ngAfterViewInit() {
    this.headerHeight = this.header.nativeElement.offsetHeight;
    this.cdr.detectChanges();
  }
}
