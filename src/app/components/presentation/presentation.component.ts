import { Component, OnInit } from '@angular/core';

//On définit le type pour chaque variables
interface ISlide{
  title: string;
  images:{
    src:string,
    alt:string,
    title:string,
  }
}

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  title: any = 'Vous êtes bloqué pendant une heure';
  nbClassicRooms = 10;
  nbVirutelRooms = 2;
  totalRooms = this.nbClassicRooms + this.nbVirutelRooms;
  images = "1";
  src='./assets/img/1.jpg';
  alt='Image 1';

  isDisabled = false;
  link = 'https://www.google.fr/'
  value="BOB";
  slide: ISlide = {
    title: 'Vous êtes bloqués pendant une heure !',
    images: {
      src:'./assets/img/1.jpg',
      alt:'Image 1',
      title: 'Image 1'
    } 
  }

  constructor() { 
   }

  ngOnInit() {
    setTimeout(
      () =>{
        this.slide = {
          title: 'Saurez vous sortir ?',
          images: {
            src:'./assets/img/2.jpg',
            alt:'Image 2',
            title: 'Image 2'
          } 
        }
      },5000
    )

  }


lastli(){
  console.log('lastli');
  return "Un amusement garanti";
}

seeMore(){
  alert('PLUS');
}

}
