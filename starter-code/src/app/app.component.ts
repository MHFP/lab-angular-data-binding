import { Component, OnInit } from '@angular/core';
import foods from './foods';

class Food{name:string}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  searchTerm:string;
  foods:Object[];

  ngOnInit() {
    this.foods = foods;
  }

  handleNewFood(food) {
    this.foods.push(food);
  }

}
