import { Component, OnInit } from '@angular/core';
import * as Plyr from 'plyr'; // Ne recopie pas ce code

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit {
  public player; // Ne recopie pas ce code  
  constructor() { }

  ngOnInit() {
    this.player = new Plyr('#plyrID', { captions: { active: true } }); // Ne recopie pas ce code
  }

}
