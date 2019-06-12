import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  myData =[
    {
      name :"Person 1",
      age : 20,
      email :"praneeth@gmail.com"
    },
    {
      name :"Person ",
      age : 0,
      email :"praneethr1000@gmail.com"
    }
  ];
  userForm;
  constructor(){
    this.userForm = new FormGroup({
      'name' : new FormControl(),
      'age' : new FormControl(),
      'email' : new FormControl()
    })
  }

  formSubmit(){
    this.myData.push(this.userForm.value);
  }
}
