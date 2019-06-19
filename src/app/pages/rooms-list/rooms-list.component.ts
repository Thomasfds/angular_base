import { Component, OnInit } from '@angular/core';
import { IRoom } from 'src/app/models/room';
//PENSEZ A IMPORTER L'INTERFACE BORDEL


@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
  // room: IRoom = {
  //   title: 'Pirate',
  //   description: `En temps que jeune mousse, vous devrez visiter le bateau du célèbre pirate Barbe Verte. Saurez-vous découvrir où
  //     il a caché le trésor découvert sur l'île Perdue et quitter le navire ? Mais dépêchez-vous les autres pirates vous suspectent
  //     et ont décidé de vous enfermer.`,
  //   imageUrl: 'https://www.hebergeur-image.com/upload/93.6.180.219-5d0351b1dfa2c.jpg',
  //   imageAlt: 'Image de pirate',
  //   nbMin: 2,
  //   nbMax: 4,
  //   difficulty: 3,
  //   isVirtual: false,
  // }

  rooms: IRoom[]= [
    {
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
    },

    {
      title: `La conquête spatiale `,
      description: `A l'intérieur d'une navette reconstruite à l'identique, vous devrez découvrir la source de l'avarie responsable
        de la perte de contrôle de la navette spatiale ? Vous ne disposerez que d'une heure pour résoudre le problème et éviter le crash
        de votre navette.`,
      imageUrl: 'https://www.hebergeur-image.com/upload/93.6.180.219-5d0351d09375e.jpg',
      imageAlt: 'Image de navette',
      nbMin: 3,
      nbMax: 6,
      difficulty: 2,
      isVirtual: true,
    },

    {
      title: `Le pharaon`,
      description: `Jeunes archéologues vous vous trouvez à l'intérieur d'une pyramide égyptienne. Votre objectif : parvenir à découvrir
        la salle secrète qui renferme le tombeau d'un très ancien pharaon. Mais méfiez-vous de la malédiction.`,
      imageUrl: 'https://www.hebergeur-image.com/upload/93.6.180.219-5d0351f088f07.jpg',
      imageAlt: 'Image de pharaon',
      nbMin: 4,
      nbMax: 4,
      difficulty: 1,
      isVirtual: true
    },

    {
      title: 'Chevaliers',
      imageUrl: 'https://www.hebergeur-image.com/upload/93.6.180.219-5d0350629d019.jpg',
      imageAlt: 'Image de chevalier',
      nbMin: 2,
      nbMax: 6,
      difficulty: 3,
      isVirtual: false,
    },
    {
      title: 'Prison',
      description: `Vous êtes enfermés dans une prison et devez vous échappez le plus rapidement possible`,
      imageUrl: 'https://www.hebergeur-image.com/upload/93.6.180.219-5d03517ead9ab.jpg',
      imageAlt: 'Image de prison',
      nbMin: 2,
      nbMax: 3,
      difficulty: 1,
      isVirtual: false,
    }
  ]

  RoomSelect: IRoom;
  seeMore = false;
  txt= "CAFARTE";
  difficultyMin = 2;
  constructor() { }
  ngOnInit() {
  }

}
