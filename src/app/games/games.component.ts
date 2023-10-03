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
  showGame: boolean = false;

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
    window.scrollTo(0,document.body.scrollHeight);
  }

  getGames(){
    return this.http.get<GameMessage>("https://hockey-stats-data.azurewebsites.net/score-proxy"); 
  }
}
