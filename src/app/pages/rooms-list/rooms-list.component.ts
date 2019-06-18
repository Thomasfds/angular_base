import { Component, OnInit } from '@angular/core';

interface IRoom{
  title: string;
  imageUrl:string;
  imageAlt:string;
  description:string;
  nbMin: number;
  nbMax: number;
  difficulty: number;
  isVirtual: boolean;
}

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
  room: IRoom = {
    title: 'Pirate',
    description: `En temps que jeune mousse, vous devrez visiter le bateau du célèbre pirate Barbe Verte. Saurez-vous découvrir où
      il a caché le trésor découvert sur l'île Perdue et quitter le navire ? Mais dépêchez-vous les autres pirates vous suspectent
      et ont décidé de vous enfermer.`,
    imageUrl: 'https://www.hebergeur-image.com/upload/93.6.180.219-5d0351b1dfa2c.jpg',
    imageAlt: 'Image de pirate',
    nbMin: 2,
    nbMax: 4,
    difficulty: 3,
    isVirtual: false,
  }

  seeMore = false;
  constructor() { }

  ngOnInit() {
  }

}
