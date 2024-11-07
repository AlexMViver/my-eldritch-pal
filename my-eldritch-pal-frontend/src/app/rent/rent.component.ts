import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import { GetPalListService } from '../../_services/get-pal-list/get-pal-list.service';
import { PalDTO } from '../../_dtos/pal.dto';

@Component({
  selector: 'app-rent',
  standalone: true,
  imports: [MatSelectModule,MatPaginatorModule,FormsModule,
    ReactiveFormsModule],
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.css'
})
export class RentComponent {
  rentForm : FormGroup;

  palList: PalDTO[];

  categories = [
    {id: '0', description: 'Very Eldritch'},
    {id: '1', description: 'Somewhat Eldritch'},
    {id: '2', description: 'Mundane Eldritch'},
  ];

  genders = [
    {id: '0', description: 'Male'},
    {id: '1', description: 'Female'},
    {id: '2', description: '???'},
  ];

  constructor (private getPalListService: GetPalListService){
    this.palList = this.getPalListService.getPals();

    this.rentForm = new FormGroup({
      category: new FormControl(['', Validators.required],),
      gender: new FormControl(['', Validators.required],),
    });
  }

}
