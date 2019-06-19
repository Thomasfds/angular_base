import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room/room.service';
import { IRoom } from 'src/app/models/room';


@Component({
  selector: 'app-best-room',
  templateUrl: './best-room.component.html',
  styleUrls: ['./best-room.component.scss']
})
export class BestRoomComponent implements OnInit {
 
  rooms: IRoom[];


  constructor(public roomService: RoomService) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms();

  }

}
