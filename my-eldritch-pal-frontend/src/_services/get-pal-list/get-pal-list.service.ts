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
        photos: ["assets/images/pals/Barbara/1.jpg","assets/images/pals/Barbara/2.jpg","assets/images/pals/Barbara/3.jpg"],
        description: "",
        eldritch_level: 2,
        gender: "F",
        price: 100.00,
      },
      { 
        id: "2",
        name: "Dmitry",
        age: "204",
        species: "Shapeshifter",
        rating: 4.5,
        photos: ["assets/images/pals/Dmitry/1.jpg","assets/images/pals/Dmitry/2.jpg","assets/images/pals/Dmitry/3.jpg"],
        description: `A close friend, a trusted confidant, a passionate lover. \n\nDmitry is many friends in one, capable of showing you whathever it is your heart desires.\n\nAvail yourself of Dmitry's many talents like acting, ventriloquism and state secret espionage.`,
        eldritch_level: 0,
        gender: "?",
        price: 100.00,
      },
     
      { 
        id: "4",
        name: "Death",
        age: "∞",
        species: "Grim Reaper",
        rating: 1,
        photos: ["assets/images/pals/Death/1.jpg","assets/images/pals/Death/2.jpg","assets/images/pals/Death/3.jpg",],
        description: "",
        eldritch_level: 1,
        gender: "?",
        price: 100.00,
      },
      { 
        id: "3",
        name: "Xybizion",
        age: "1.738",
        species: "Golem",
        rating: 3.5,
        photos: ["assets/images/pals/Xybizion/1.jpg","assets/images/pals/Xybizion/2.jpg","assets/images/pals/Xybizion/3.jpg"],
        description: "",
        eldritch_level: 1,
        gender: "?",
        price: 100.00,
      },
      { 
        id: "5",
        name: "Victor",
        age: "184",
        species: "Vampire",
        rating: 3.5,
        photos: ["assets/images/pals/Victor/1.jpg","assets/images/pals/Victor/2.jpg","assets/images/pals/Victor/3.jpg"],
        description: "Something about feeling bad about the wrongful depiction of vampires in media",
        eldritch_level: 0,
        gender: "M",
        price: 100.00,
      },
      { 
        id: "6",
        name: "Bob",
        age: "42",
        species: "Human",
        rating: 5,
        photos: ["assets/images/pals/Bob/1.jpg","assets/images/pals/Bob/2.jpg","assets/images/pals/Bob/3.jpg"],
        description: "",
        eldritch_level: 2,
        gender: "M",
        price: 100.00,
      },
      { 
        id: "7",
        name: "Pascal",
        age: "238",
        species: "Cthulu's offspring",
        rating: 5,
        photos: ["assets/images/pals/Pascal/1.jpg","assets/images/pals/Pascal/2.jpg","assets/images/pals/Pascal/3.jpg"],
        description: "",
        eldritch_level: 2,
        gender: "?",
        price: 100.00,
      },
      { 
        id: "8",
        name: "Jörmungandr",
        age: "80.000.000",
        species: "World Serpent",
        rating: 5,
        photos: ["assets/images/pals/Jormungandr/1.jpg","assets/images/pals/Jormungandr/2.jpg","assets/images/pals/Jormungandr/3.jpg"],
        description: "",
        eldritch_level: 1,
        gender: "M",
        price: 100.00,
      },

      { 
        id: "9",
        name: "Ratrapatata",
        age: "897",
        species: "Face Demon",
        rating: 4.5,
        photos: ["assets/images/pals/Ratrapatata/1.jpg","assets/images/pals/Ratrapatata/2.jpg","assets/images/pals/Ratrapatata/3.jpg"],
        description: "",
        eldritch_level: 2,
        gender: "?",
        price: 100.00,
      },
      { 
        id: "10",
        name: "Lily",
        age: "175.000.001",
        species: "Best Friend",
        rating: 4,
        photos: ["assets/images/pals/Lily/1.jpg","assets/images/pals/Lily/2.jpg","assets/images/pals/Lily/3.jpg"],
        description: "Looking for a companion that makes time fly? With Anne time literally stops being a problem! \n\nWith her thousand-eyed gaze, tendrils that politely extend from another dimension and incomprehensible time manipulation powers, she’s the perfect pal for any sports enthusiast!",
        eldritch_level: 2,
        gender: "F",
        price: 100.00,
      },
      { 
        id: "11",
        name: "Lucille",
        age: "29",
        species: "Lobster Queen",
        rating: 3,
        photos: ["assets/images/pals/Lucille/1.jpg","assets/images/pals/Lucille/2.jpg","assets/images/pals/Lucille/3.jpg",],
        description: "",
        eldritch_level: 1,
        gender: "F",
        price: 100.00,
      },
    ];
  }

  getPals() : PalDTO[] {
    return this.staticPalList;
  }

  getPal(id: string | null) : PalDTO | undefined {
    return this.staticPalList.find((elem) => elem.id===id);
  }
}
