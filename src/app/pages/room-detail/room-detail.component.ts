import { Component, OnInit } from '@angular/core';
import * as Plyr from 'plyr'; // Ne recopie pas ce code
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IRoom } from 'src/app/models/room';
import {RoomService} from 'src/app/services/room/room.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})

export class RoomDetailComponent implements OnInit {

public player; // Ne recopie pas ce code 
room: any;

constructor(public route : ActivatedRoute, public roomService: RoomService, private http: HttpClient) { }

getFilms() {
  return this.http.get('https://libreplay.fr/api/films.php');
}

  ngOnInit(): void {
    this.player = new Plyr('#plyrID', { captions: { active: true } }); // Ne recopie pas ce code
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
       let idx = parseInt(params.get('id'));
       let rooms = this.roomService.getRooms();
       this.room = rooms.find((r: IRoom) => r.id == idx)
      }
    )
  }



}
