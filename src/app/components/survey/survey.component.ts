import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
    
  // pseudo: string = 'Jean';
  // category: string = 'Histoire';

  survey ={
    pseudo: 'Jean',
    category:'Histoire',
  }

  constructor() { }

  ngOnInit() {
  }

  updatePseudo(val:string){
    this.survey.pseudo = val;

  }

  validate(){
    console.log(this.survey);
  }

} //Fermeture ne pas mettre en dessous
