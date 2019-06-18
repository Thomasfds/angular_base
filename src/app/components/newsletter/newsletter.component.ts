import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})

export class NewsletterComponent implements OnInit {
  isDisabled = true;
  email ='';
  constructor() { }

  ngOnInit() {
  }


send(){
  console.log(this.email);
}

}
