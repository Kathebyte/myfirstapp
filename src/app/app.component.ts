import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name  : string;
  email : string;
  website: string;
  contacto: string;
  hobbies: string[];
  showHobbies: boolean

  constructor() {
    this.name = "Katherine Benjumea";
    this.email = "kathe07338@gmail.com";
    this.website="http://www.katheBenju.com";
    this.contacto= "971-521785599 - EmiratosArabes"
    this.hobbies= ["run","read","walk","travel"]
    this.showHobbies=false;
  }

  toggleHobbies() {
    this.showHobbies= !this.showHobbies;
  }

  newHobby(hobby: any){
    this.hobbies.push(hobby.value);
    hobby.value = '';
    return false;
  }



}
