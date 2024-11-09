import { Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { ShowreelComponent } from '../showreel/showreel.component';
import { TopMonthComponent } from '../top-month/top-month.component';
import { GetPalListService } from '../../_services/get-pal-list/get-pal-list.service';
import { PalDTO } from '../../_dtos/pal.dto';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, ShowreelComponent, TopMonthComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  palList: PalDTO[];

  constructor(private router: Router, private getPalListService: GetPalListService){
    this.palList = this.getPalListService.getPals();
  }

  navigate(route: string) {
    this.router.navigate(['/rent']);
  }

}
