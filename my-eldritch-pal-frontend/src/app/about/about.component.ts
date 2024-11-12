import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ShowreelComponent } from '../showreel/showreel.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatButtonModule, ShowreelComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private router: Router){}

  navigate(route: string) {
    this.router.navigate(['/rent']);
  }
}
