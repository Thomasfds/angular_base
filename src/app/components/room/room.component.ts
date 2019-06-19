import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  @Input() room: string;
  @Output() selection = new EventEmitter;
  @Input() difficultyMin: number;
  @Input() displaySelection: boolean = true;

  seeMore = false;

  constructor() { }

  ngOnInit() {
  }

  sel(room: any){
    this.selection.emit(room);
  }

}
