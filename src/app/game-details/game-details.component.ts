import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballGame } from 'src/types/football-game';
import { APIService } from '../API.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  gameId: string;
  game: FootballGame;

  constructor(private api: APIService, route: ActivatedRoute) {
    this.gameId = route.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.update();
  }

  update() {
    console.log('update methods: ' + this.gameId);
    if (this.gameId) {
      this.api.GetFootballGame(this.gameId).then(event => {
        this.game = event;
      });
    }
  }
}
