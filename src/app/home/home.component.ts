import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/types/restaurant';
import { APIService } from '../API.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  title = 'football';
  restaurants: Array<Restaurant>;

  constructor(private api: APIService) { }

  async ngOnInit() {
    this.api.ListRestaurants().then(event => {
      this.restaurants = event.items;
    });

    this.api.OnCreateRestaurantListener.subscribe( (event: any) => {
      const newRestaurant = event.value.data.onCreateRestaurant;
      this.restaurants = [newRestaurant, ...this.restaurants];
    });
  }

  createGame() {
    location.href = "/create-game"
  }
}
