import { Component } from '@angular/core';
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

}
