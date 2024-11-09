import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { GetPalListService } from '../../_services/get-pal-list/get-pal-list.service';
import { PalDTO } from '../../_dtos/pal.dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rent',
  standalone: true,
  imports: [MatSelectModule,MatPaginatorModule,FormsModule,
    ReactiveFormsModule,CommonModule],
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.css'
})
export class RentComponent implements OnInit {

  @ViewChild('rentGrid', { static: false, read:ElementRef }) rentGrid!: ElementRef;
  
  rentForm : FormGroup;

  palList: PalDTO[] = [];
  selectedPalList: PalDTO[] = [];
  visiblePalList: PalDTO[] = [];

  pageSize = 10;
  paginatorLength = 0;
  pageIndex = 0;

  categories = [
    {id: 0, description: 'Very Eldritch'},
    {id: 1, description: 'Somewhat Eldritch'},
    {id: 2, description: 'Mundane Eldritch'},
  ];

  genders = [
    {id: "M", description: 'Male'},
    {id: "F", description: 'Female'},
    {id: "?", description: '???'},
  ];

  constructor (private getPalListService: GetPalListService){
    this.rentForm = new FormGroup({
      category: new FormControl([], [Validators.required]),
      gender: new FormControl([], [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.onChanges();

    this.palList = this.getPalListService.getPals();
    this.selectedPalList = Object.assign([], this.palList);

    this.paginatorLength = this.palList.length;
    this.adjustVisiblePalList(false);
  }

  onChanges(): void {
    this.rentForm.valueChanges.subscribe(val => {
      this.selectedPalList = this.palList.filter((elem) => (
        (!val.category.length || val.category.includes(elem.eldritch_level)) && 
        (!val.gender.length || val.gender.includes(elem.gender))
      ))

      this.paginatorLength = this.selectedPalList.length;
      this.pageIndex = 0;
      this.adjustVisiblePalList(false);
    });
  }

  matTriggerGender() : string {
    if(this.rentForm.controls['gender'].value?.length > 0) {
      const elem = this.genders.find(elem => this.rentForm.controls['gender'].value?.[0] == elem.id);
      if (elem) return elem.description;
    }
    
    return "";
  }

  handlePageEvent(e: PageEvent) {
    this.paginatorLength = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.adjustVisiblePalList(true);
  }

  adjustVisiblePalList(scrollTop: boolean) {
    this.visiblePalList = this.selectedPalList.slice(this.pageIndex*this.pageSize, this.pageIndex*this.pageSize + this.pageSize);

    if(this.rentGrid && scrollTop) this.rentGrid.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}

