import { FootballGame } from './../../types/football-game';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../API.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {
  time: Date;
  timeString: string;
  model = new FootballGame('1', '', '', '');

  constructor(private api: APIService, private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log('time: ' + this.model.time);
    this.model.time = this.model.time + ':00.000Z';
    console.log('time: ' + this.model.time);
    this.api.CreateFootballGame(this.model).then(event => {
      console.log('item created!');
    })
    .catch(e => {
      console.log('error creating game...', e);
    });
  }
}
