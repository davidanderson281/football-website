import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Restaurant } from 'src/types/restaurant';
import { APIService } from '../API.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {
  public createForm: FormGroup;

  constructor(private api: APIService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'city': ['', Validators.required]
    });
  }

  public onCreate(restaurant: Restaurant) {
    this.api.CreateRestaurant(restaurant).then(event => {
      console.log('item created!');
      this.createForm.reset();
    })
    .catch(e => {
      console.log('error creating restaurant...', e);
    });
  }
}
