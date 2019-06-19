import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import { MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-more-less',
  templateUrl: './more-less.component.html',
  styleUrls: ['./more-less.component.scss']
})
export class MoreLessComponent implements OnInit {
  @Input() value :number;
  @Input() min: number = 1;
  @Input() max: number;
  @Output() valChange = new EventEmitter();

  constructor() { }


  ngOnInit() {
  }

ajout(){
  this.value++;
  this.valChange.emit(this.value);
  //TOUT SIMPLEMENT ^ permet de changer la valeur
}

red(){
  this.value--;
  this.valChange.emit(this.value);
}

}
