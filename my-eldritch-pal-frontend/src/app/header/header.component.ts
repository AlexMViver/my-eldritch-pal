import { Component, HostListener, Input } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button'
import { RouterModule } from '@angular/router';;
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatSidenavModule,MatButtonModule, CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() sidenav!: MatSidenav;

  constructor() {}

  toggleSidenav() {
    this.sidenav.toggle();
  }

  backgroundColor = 'black';
  textColor = 'white';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = 300; // The scroll position when the toolbar should be fully white
    const scrollPosition = window.scrollY;

    const progress = Math.min(scrollPosition / scrollOffset, 1);

    // Background
    const r = Math.round(255 * progress); 
    const g = Math.round(255 * progress); 
    const b = Math.round(255 * progress); 
    this.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // Text
    const rText = Math.round(255 * (1 - progress));
    const gText = Math.round(255 * (1 - progress));
    const bText = Math.round(255 * (1 - progress));
    this.textColor = `rgb(${rText}, ${gText}, ${bText})`;
  }
}
