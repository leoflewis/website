import { HttpClient } from '@angular/common/http';
import { Component  } from '@angular/core';
import { GameMessage, Games } from '../models/game';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  game: Games;
  games: Games[];

  constructor(private http: HttpClient){
    this.games = [];
  }

  ngOnInit(){
    this.getGames().subscribe(data => {
      this.games = data.dates[0].games;
      this.games.forEach(game => {
        var y = Math.random();
        game.teams.away.prediction = y > .5 ? "favored": "not-favored";
        game.teams.home.prediction = y < .5 ? "favored": "not-favored";
      });
    });
  }

  formattedDate(date: Date){
    return formatDate(date, "dd/MM/yyyy", "en-US")
  }

  onClick(e: Games){
    this.game = e;
  }

  getGames(){
    return this.http.get<GameMessage>("https://statsapi.web.nhl.com/api/v1/schedule?date=2023-10-10"); 
  }
}
