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
        photos: ["assets/images/Temp3.jpg","assets/images/Temp2.jpg","assets/images/Temp.jpg"],
        description: ""
      },
      { 
        id: "2",
        name: "Dmitry",
        age: "204",
        species: "Shapeshifter",
        rating: 4.5,
        photos: ["assets/images/Temp.jpg","assets/images/Temp2.jpg","assets/images/Temp3.jpg"],
        description: `A close friend, a trusted confidant, a passionate lover. \n\nDmitry is many friends in one, capable of showing you whathever it is your heart desires.\n\nAvail yourself of Dmitry's many talents like acting, ventriloquism and state secret espionage.`
      },
      { 
        id: "3",
        name: "David",
        age: "???",
        species: "Star Devourer",
        rating: 3,
        photos: ["assets/images/Temp.jpg","assets/images/Temp2.jpg","assets/images/Temp3.jpg"],
        description: ""
      },
      { 
        id: "4",
        name: "Death",
        age: "∞",
        species: "Grim Reaper",
        rating: 1,
        photos: ["assets/images/Temp.jpg","assets/images/Temp2.jpg","assets/images/Temp3.jpg"],
        description: ""
      },
      
      { 
        id: "5",
        name: "Victor",
        age: "184",
        species: "Vampire",
        rating: 3.5,
        photos: ["assets/images/Temp.jpg","assets/images/Temp2.jpg","assets/images/Temp3.jpg"],
        description: ""
      },
      { 
        id: "6",
        name: "Bob",
        age: "42",
        species: "Human",
        rating: 5,
        photos: ["assets/images/Temp.jpg","assets/images/Temp2.jpg","assets/images/Temp3.jpg"],
        description: ""
      },
      { 
        id: "7",
        name: "Cthulhu",
        age: "175.000.000",
        species: "Unknown",
        rating: 5,
        photos: ["assets/images/Temp.jpg","assets/images/Temp2.jpg","assets/images/Temp3.jpg"],
        description: ""
      },
      { 
        id: "8",
        name: "Jormungandr",
        age: "80.000.000",
        species: "World Serpent",
        rating: 5,
        photos: ["assets/images/Temp.jpg","assets/images/Temp2.jpg","assets/images/Temp3.jpg"],
        description: ""
      },

      { 
        id: "9",
        name: "Winnie",
        age: "99",
        species: "Pooh",
        rating: 4.5,
        photos: ["assets/images/Temp.jpg","assets/images/Temp2.jpg","assets/images/Temp3.jpg"],
        description: ""
      },
      { 
        id: "10",
        name: "Anne",
        age: "175.000.001",
        species: "Outer God",
        rating: 4,
        photos: ["assets/images/Temp.jpg","assets/images/Temp2.jpg","assets/images/Temp3.jpg"],
        description: "Looking for a companion that makes time fly? With Anne time literally stops being a problem! \n\nWith her thousand-eyed gaze, tendrils that politely extend from another dimension and incomprehensible time manipulation powers, she’s the perfect pal for any sports enthusiast!"
      },
      { 
        id: "11",
        name: "Agrados",
        age: "1.738",
        species: "Lamp Genie",
        rating: 3.5,
        photos: ["assets/images/Temp.jpg","assets/images/Temp2.jpg","assets/images/Temp3.jpg"],
        description: ""
      },
    ];
  }

  getPals() : PalDTO[] {
    return this.staticPalList;
  }
}
