import { Component, OnInit } from '@angular/core';
import { IRoom } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room/room.service';
//PENSEZ A IMPORTER L'INTERFACE BORDEL


@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

  rooms: IRoom[];

  RoomSelect: IRoom;
  seeMore = false;
  txt= "CAFARTE";
  difficultyMin = 2;

  constructor(public roomService: RoomService) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms();
  }

}// Fin class
