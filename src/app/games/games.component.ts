import { HttpClient } from '@angular/common/http';
import { Component  } from '@angular/core';
import { GameMessage, Game } from '../models/game';
import { formatDate } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  game: Game;
  games: Game[];

  constructor(private http: HttpClient){
    this.games = [];
  }

  ngOnInit(){
    this.getGames().subscribe(data => {
      this.games = data.gameWeek[0].games;
    });
  }

  formattedDate(date: Date){
    return formatDate(date, "dd/MM/yyyy", "en-US")
  }

  onClick(e: Game){
    this.game = e;
  }

  getGames(){
    return this.http.get<GameMessage>("https://api-web.nhle.com/v1/schedule/2023-10-10", {
      headers: new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', 'http://localhost:4200')
    }); 
  }
}
