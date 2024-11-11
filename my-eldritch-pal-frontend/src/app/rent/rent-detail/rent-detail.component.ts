import { Component } from '@angular/core';
import { PalDTO } from '../../../_dtos/pal.dto';
import { GetPalListService } from '../../../_services/get-pal-list/get-pal-list.service';
import {Location, DecimalPipe, CommonModule} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ShowreelComponent } from '../../showreel/showreel.component';
import { MatButton } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-rent-detail',
  standalone: true,
  imports: [DecimalPipe, ShowreelComponent, MatButton,MatExpansionModule,CommonModule],
  templateUrl: './rent-detail.component.html',
  styleUrl: './rent-detail.component.css'
})
export class RentDetailComponent {

  pal!: PalDTO;

  constructor(private location: Location, private getPalListService: GetPalListService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.setPal(this.route.snapshot.paramMap.get('id'));
  }

  setPal(id: string | null) {
    const possiblePal = this.getPalListService.getPal(id);
    if(!possiblePal) this.location.back();
    else this.pal = possiblePal;
  }
}
