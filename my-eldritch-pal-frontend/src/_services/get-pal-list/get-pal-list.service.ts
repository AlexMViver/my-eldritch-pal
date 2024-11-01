import { Injectable } from '@angular/core';
import { PalDTO } from '../../_dtos/pal.dto';

@Injectable({
  providedIn: 'root'
})
export class GetPalListService {

  staticPalList: PalDTO[];

  constructor() {
    this.staticPalList = [
      { 
        id: "1",
        name: "Barbara",
        age: "794",
        species: "Eyeballer",
        rating: 5,
        photos: ["assets/images/Temp3.jpg","assets/images/Temp2.jpg","assets/images/Temp.jpg"]
      },
      { 
        id: "2",
        name: "Ragoth",
        age: "204",
        species: "Shapeshifter",
        rating: 4.5,
        photos: ["assets/images/Temp.jpg","assets/images/Temp2.jpg","assets/images/Temp3.jpg"]
      },
      { 
        id: "3",
        name: "David",
        age: "???",
        species: "Star Devourer",
        rating: 3,
        photos: ["assets/images/Temp.jpg","assets/images/Temp2.jpg","assets/images/Temp3.jpg"]
      },
      { 
        id: "4",
        name: "Jormungandr",
        age: "80.000.000",
        species: "World Serpent",
        rating: 5,
        photos: ["assets/images/Temp.jpg","assets/images/Temp2.jpg","assets/images/Temp3.jpg"]
      },
      { 
        id: "5",
        name: "Claude",
        age: "184",
        species: "Vampire",
        rating: 3.5,
        photos: ["assets/images/Temp.jpg","assets/images/Temp2.jpg","assets/images/Temp3.jpg"]
      },
      { 
        id: "6",
        name: "Bob",
        age: "42",
        species: "Human",
        rating: 5,
        photos: ["assets/images/Temp.jpg","assets/images/Temp2.jpg","assets/images/Temp3.jpg"]
      },
      { 
        id: "7",
        name: "Death",
        age: "∞",
        species: "Grim Reaper",
        rating: 1,
        photos: ["assets/images/Temp.jpg","assets/images/Temp2.jpg","assets/images/Temp3.jpg"]
      },
      { 
        id: "8",
        name: "Cthulhu",
        age: "175.000.000",
        species: "Unknown",
        rating: 5,
        photos: ["assets/images/Temp.jpg","assets/images/Temp2.jpg","assets/images/Temp3.jpg"]
      },
      { 
        id: "9",
        name: "Winnie",
        age: "99",
        species: "Pooh",
        rating: 4.5,
        photos: ["assets/images/Temp.jpg","assets/images/Temp2.jpg","assets/images/Temp3.jpg"]
      },
      { 
        id: "10",
        name: "Anne",
        age: "175.000.001",
        species: "Outer God",
        rating: 4,
        photos: ["assets/images/Temp.jpg","assets/images/Temp2.jpg","assets/images/Temp3.jpg"]
      },
      { 
        id: "11",
        name: "Agrados",
        age: "1.738",
        species: "Lamp Genie",
        rating: 3.5,
        photos: ["assets/images/Temp.jpg","assets/images/Temp2.jpg","assets/images/Temp3.jpg"]
      },
    ];
  }

  getPals() : PalDTO[] {
    return this.staticPalList;
  }
}
