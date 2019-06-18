import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  @Input() room: any;
  @Input() text: any;

  seeMore = false;

  constructor() { }

  ngOnInit() {
  }

}
