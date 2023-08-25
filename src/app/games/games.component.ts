import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GameMessage, Games } from '../models/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {

  games: Games[];

  constructor(private http: HttpClient){
    this.games = <Games[]>{};
  }

  ngOnInit(){
    this.getGames().subscribe(data => {
      this.games = data.dates[0].games;
    });
  }

  getGames(){
    return this.http.get<GameMessage>("https://statsapi.web.nhl.com/api/v1/schedule?date=2023-10-10"); 
  }
}
