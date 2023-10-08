import { HttpClient } from '@angular/common/http';
import { Component  } from '@angular/core';
import { GameMessage, Game, GameShotsMessage, ShotAtTime, GameTotals } from '../models/game';
import { formatDate } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Shot } from '../models/shot';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  game: Game;
  games: Game[];
  showGame: boolean = false;
  shots: Shot[];
  shotsByTime: ShotAtTime;
  totals: GameTotals;

  constructor(private http: HttpClient){
    this.games = [];
  }

  ngOnInit(){
    this.getGames().subscribe(data => {
      this.games = data.games;
    });
  }

  formattedDate(date: Date){
    return formatDate(date, "dd/MM/yyyy", "en-US")
  }

  onClick(e: Game){
    this.game = e;
    this.showGame = true;
    this.getShots().subscribe(data => {
      this.shots = data.message.shots;
      this.shotsByTime = data.message.shotsByTime;
      this.totals = data.message.totals;
    });
    window.scrollTo(0,document.body.scrollHeight);
  }


  getShots(){
    return this.http.get<GameShotsMessage>("https://hockey-stats-data.azurewebsites.net/live-game?id=" + this.game.id.toString()); 
  }

  getGames(){
    return this.http.get<GameMessage>("https://hockey-stats-data.azurewebsites.net/score-proxy"); 
  }
}
