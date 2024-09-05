import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NHLTeam, NHLTeamMessage } from '../models/team';
import { HistoricGame } from '../models/game';
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

  teams: NHLTeam[];
  games: HistoricGame[];

  constructor(private http: HttpClient){

  }

  ngOnInit(){
    this.getTeams().subscribe(teams => {
      this.teams = teams.message.data;
    });
  }

  onClick(game: HistoricGame){

  }

  onSubmit(){
    let date = null;
    if (this.form.value.date){
      date = new Date(this.form.value.date as string);
      date = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
    }
    this.getGames(this.form.value.teamObj as string, date).subscribe(games => {
      this.games = games;
      console.log(this.games)
    });
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
  
  // This might have to get updated to the new endpoint. but for now we will leave it.
  getTeams(){
    return this.http.get<NHLTeamMessage>(Constants.BaseAPIURL + "teams");
  }

}
