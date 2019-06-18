import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
  room = {
    title: 'Pirate',
    description: `En temps que jeune mousse, vous devrez visiter le bateau du célèbre pirate Barbe Verte. Saurez-vous découvrir où
      il a caché le trésor découvert sur l'île Perdue et quitter le navire ? Mais dépêchez-vous les autres pirates vous suspectent
      et ont décidé de vous enfermer.`,
    imageUrl: 'https://www.hebergeur-image.com/upload/93.6.180.219-5d0351b1dfa2c.jpg',
    imageAlt: 'Image de pirate'
  }
  constructor() { }

  ngOnInit() {
  }

}
