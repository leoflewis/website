import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NHLTeam, NHLTeamMessage } from '../models/team';
import { HistoricGame, Game, ShotAtTime, OldGoal} from '../models/game';
import { Shot } from "../models/shot";
import { FormControl, FormGroup } from '@angular/forms';
import {Constants} from '../app.module';

@Component({
  selector: 'app-historic-games',
  templateUrl: './historic-games.component.html',
  styleUrls: ['./historic-games.component.css']
})
export class HistoricGamesComponent {
  form = new FormGroup({
    date: new FormControl(''),
    teamObj: new FormControl('')
  });
  miniform = new FormGroup({
    type: new FormControl<number>(0)
  });
  game: Game;
  gameId: number;
  teams: NHLTeam[];
  games: HistoricGame[];
  shots: Shot[];
  shotTimes: ShotAtTime;
  dataSet1: number[];
  dataSet2: number[];
  line: boolean = false;
  oldGoals: OldGoal[];

  constructor(private http: HttpClient){

  }

  ngOnInit(){
    this.getTeams().subscribe(teams => {
      this.teams = teams.message.data;
    });
  }

  onClick(game: HistoricGame){
    this.gameId = game.GameId;
    this.getGameShots().subscribe(response =>{
      this.shots = response.shots;
      this.shotTimes = response;
      this.dataSet1 = this.shotTimes.homeShots;
      this.dataSet2 = this.shotTimes.awayShots;
      this.line = true;
      console.log(this.shots);
    });
    this.getGameGoals().subscribe(response => {
      this.oldGoals = response;
    });
  }

  onSubmit(){
    let date = null;
    if (this.form.value.date){
      date = new Date(this.form.value.date as string);
      date = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
    }
    this.getGames(this.form.value.teamObj as string, date).subscribe(games => {
      this.games = games;
      this.games.forEach(element => {
        if(element.HomeWinProba > .5){
          element.AwayTeamClass = "notFavored";
          element.HomeTeamClass = "Favored";
        } else{
          element.AwayTeamClass = "Favored";
          element.HomeTeamClass = "notFavored";
        }
      });
    });
  }

  onTypeChange(){
    if (this.miniform.value.type == 0){
      this.dataSet1 = this.shotTimes.homeShots;
      this.dataSet2 = this.shotTimes.awayShots;
    }
    if (this.miniform.value.type == 1){
      this.dataSet1 = this.shotTimes.homexG;
      this.dataSet2 = this.shotTimes.awayxG;
    }
  }

  getGames(id: string|null, date:string|null){
    if (id){
      return this.http.get<HistoricGame[]>(Constants.BaseAPIURL + "games?id=" + id);
    }
    else if (date){
      return this.http.get<HistoricGame[]>(Constants.BaseAPIURL + "games?date=" + date);
    }
    else if (id && date){
      return this.http.get<HistoricGame[]>(Constants.BaseAPIURL + "games?id=" + id + "&date=" + date);
    }
    return this.http.get<HistoricGame[]>(Constants.BaseAPIURL + "games");
  }
  
  getTeams(){
    return this.http.get<NHLTeamMessage>(Constants.BaseAPIURL + "teams");
  }

  getGameShots(){
    return this.http.get<ShotAtTime>(Constants.BaseAPIURL + "game-shots?gameId=" + this.gameId);
  }

  getGameGoals(){
    return this.http.get<OldGoal[]>(Constants.BaseAPIURL + "game-goals?gameId=" + this.gameId);
  }
}
