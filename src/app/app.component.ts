import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  date = new Date();

  bool;
  styleColor = "color_background";
  colorElem="red";

  array = ['a','b','c'];
  
  constructor(){
    this.bool = this.title=='myapp'
  }



  onInput(event){
    console.log("Event",event);
    this.title = event.target.value;
  }
}
