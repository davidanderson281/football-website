import { FootballGame } from './../../types/football-game';
import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  title = 'football';
  footballGames: Array<FootballGame>;

  constructor(private api: APIService) { }

  async ngOnInit() {
    this.api.ListFootballGames().then(event => {
      this.footballGames = event.items;
    });

    this.api.OnCreateFootballGameListener.subscribe( (event: any) => {
      const newFootballGame = event.value.data.onCreateFootballGame;
      this.footballGames = [newFootballGame, ...this.footballGames];
    });
  }

  createGame() {
    location.href = "/create-game"
  }
}
