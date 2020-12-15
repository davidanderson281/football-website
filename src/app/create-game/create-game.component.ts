import { FootballGame } from './../../types/football-game';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../API.service';
import { v1 as uuidv1 } from 'uuid';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {
  time: Date;
  timeString: string;
  model = new FootballGame('1', '', '', '');
  // model: FootballGame;

  constructor(private api: APIService, private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.model.time = this.model.time + ':00.000Z';
    this.model.id = uuidv1();
    this.api.CreateFootballGame(this.model).then(event => {
      console.log('item created!');
    })
    .catch(e => {
      console.log('error creating game...', e);
    });
  }
}
