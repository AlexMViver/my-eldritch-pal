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
        description: "Jealousy in relationships? A thing of the past. \n\nBarbara is the ultimate companion — her gaze never wavers, her focus never falters. She's got her eye on you (literally). Whether you're seeking undivided attention or someone to keep watch over your secrets, Barbara's got you covered. Just don’t blink—you wouldn’t want to miss a moment with her.",
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
        rating: 4,
        photos: ["assets/images/pals/Death/1.jpg","assets/images/pals/Death/2.jpg","assets/images/pals/Death/3.jpg",],
        description: "Looking for a companion who’s guaranteed to turn heads? Meet Death: elegant, pale as snow, and always dressed to kill! \n\nAn avid adventurer, Death proves that life’s too short not to enjoy the ride.\n\n Join her on her thrilling escapades, like cozy strolls through burning buildings, adrenaline-pumping skydives from crashing planes, or her personal favorite: calm, reflective visits to the hospital. \n\nShe’ll make every moment… unforgettable.",
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
        description: "Ever wanted a friend who just rolls with it? Meet Xybizion! \n\nThis towering ball of roots and rocks is always ready to lend you a leg (or four). \n\nAn imposing yet gentle giant, Xybizion is a nature enthusiast through and through—whether it’s collecting seashells at the beach, rocks on the trail, or even lint from your sofa. \n\nNo matter where you go, Xybizion will always keep things grounded.",
        eldritch_level: 1,
        gender: "?",
        price: 100.00,
      },
      { 
        id: "5",
        name: "Victor",
        age: "184",
        species: "Vampire",
        rating: 4,
        photos: ["assets/images/pals/Victor/1.jpg","assets/images/pals/Victor/2.jpg","assets/images/pals/Victor/3.jpg"],
        description: "Tired of vampires who suck the life out of every relationship? Meet Viktor, the vegan vampire with a heart (and veins) of gold. \n\nSure, he’s a little… dry, but that’s just a side effect of his strict diet of beet juice and ethically-sourced tomato plasma. \n\nViktor isn’t just looking for a snack—he’s looking for love. If you’re vegan, morally upstanding, and appreciate a partner who doesn’t bite (especially in alleys), Viktor might just be your perfect match.",
        eldritch_level: 1,
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
        description: "Bob is… well, Bob. He enjoys sitting, standing, and sometimes walking. \n\nA true connoisseur of plain toast and room-temperature water, Bob doesn’t need thrills to be happy. \n\nHe’s available for small talk, light nodding, and sharing the occasional weather update. Bob is here if you need someone perfectly… normal.",
        eldritch_level: 0,
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
        description: "Ever wanted to glimpse the secrets of the universe without the pesky side effect of losing your mind? Crave knowledge beyond human comprehension but not ready to fully commit? Treat Pascal to dinner! \n\nAs a veritable child of Cthulhu himself, Pascal knows the secrets beyond the veil and is happy to share them in a tame, comprehensible way. Just don’t take him to a seafood restaurant… trust me on that.",
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
        description: "Looking for a companion who really knows how to make an entrance? Meet Jörmungandr, the World Serpent! Stretching across the entire globe, Jörmungandr is as long as he is legendary. \n\nA creature of myth and chaos, Jörmungandr enjoys long swims around the world, curling up in giant loops, and causing a bit of apocalyptic havoc (when the mood strikes). If you’re into world-shaking adventures and have a thing for serpentine charm, Jörmungandr is your perfect match. Just don’t expect to cuddle—there’s a lot of him to handle.",
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
        description: "Looking for a playful companion who’s always game for a good time? Meet Ratrapatata, the face demon who can materialize himself anywhere! Whether it’s coconuts, soccer balls, or even bowling balls, Ratrapatata loves to show his face in the most unexpected places. \n\nA true sports enthusiast, he’s always up for a kickabout or a quick roll down the lane. Need a teammate who’ll literally be in your face? Ratrapatata’s your guy—just don’t expect him to ever sit still!",
        eldritch_level: 2,
        gender: "?",
        price: 100.00,
      },
      { 
        id: "10",
        name: "Lily",
        age: "89",
        species: "Best Friend",
        rating: 4,
        photos: ["assets/images/pals/Lily/1.jpg","assets/images/pals/Lily/2.jpg","assets/images/pals/Lily/3.jpg"],
        description: "Looking for a companion who’s literally always watching? Meet Lily, your new best friend with a smile that never fades… and never quite reaches her eyes. \n\nLily enjoys tea parties, long stares into the abyss, and whispering things only you can hear. \n\nIf you’re looking for constant and unexpected company around the house, Lily is the friend for you! And don’t let her stillness fool you—she’s always ready to move when you least expect it, just don’t start running when she’s looking at you and you’ll be fine… probably…",
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
        description: "Craving a companion who’s clawsome in the kitchen? Meet Lucille! With her regal pincers and culinary expertise, she knows the way to a human's heart. \n\nPerfect for an underwater adventure, Lucille can take you diving, fishing, cooking, and then cozying up back on the surface (yes, in that order). You won’t get a more authentic aquatic sightseeing and culinary experience than with her. Just don’t mention her size—she’s a bit self-conscious after the last 30,000 children.",
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
