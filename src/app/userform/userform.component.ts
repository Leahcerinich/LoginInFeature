import { Component, OnInit, Input } from '@angular/core';
import { Generateuser } from '../gen-user';
import axios from 'axios';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {
  @Input() generateuser: Generateuser;
  public model = new Generateuser('', '');
  public submitted = false;
  public authenticationError = '';

  constructor() {
    console.log('UserformComponent constructor > this', this);
  }

  onSubmit() {
    console.log('this', this);
    this.submitted = true;
    axios.post('http://localhost:3000/login', {
      username: this.model.name,
      password: this.model.password,
    })
    .then((response) => {
      this.authenticationError = '';
      console.log(response);
    })
    .catch((error) => {
      this.authenticationError = error;
      console.log(`failed error = ${error}`);
    });
  }
}
