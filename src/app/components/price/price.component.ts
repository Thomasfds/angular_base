import { Component, OnInit, Input } from '@angular/core';
import { PrefixSource } from 'webpack-sources';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  @Input() title: any;

pricetotal = 160;
nombre_personne = 4;
  constructor() { }

  ngOnInit() {
  }

prixPersonne(){
  return Math.floor(this.pricetotal / this.nombre_personne);
}

ajout(){
   this.nombre_personne++;
}

reduit(){
   this.nombre_personne--;
}

keyUp(){
  alert('KEYUP');
}

blur(){
  alert('KEYUP');
}

verifyPromo(event: any){
  if(event.target.value === "reduc" || event.target.value.toUpperCase() === "REDUC"){
    this.pricetotal = 120;
  }else{
    this.pricetotal = 160;
  }
}

}
