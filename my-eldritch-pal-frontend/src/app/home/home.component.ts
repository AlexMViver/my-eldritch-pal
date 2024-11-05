import { Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { ShowreelComponent } from '../showreel/showreel.component';
import { TopMonthComponent } from '../top-month/top-month.component';
import { GetPalListService } from '../../_services/get-pal-list/get-pal-list.service';
import { PalDTO } from '../../_dtos/pal.dto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, ShowreelComponent, TopMonthComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  palList: PalDTO[];

  constructor(private getPalListService: GetPalListService){
    this.palList = this.getPalListService.getPals();
  }

}
