import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NHLTeam, NHLTeamMessage } from '../models/team';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor(private http: HttpClient){

  }

  ngOnInit(){
    this.getTeams().subscribe(teams => {
      this.teams = teams.message.data;
    });
  }

  onSubmit(){
    console.log(this.form.value.date);
    console.log(this.form.value.teamObj);
  }
  
  // This might have to get updated to the new endpoint. but for now we will leave it.
  getTeams(){
    return this.http.get<NHLTeamMessage>("https://hockey-stats-data.azurewebsites.net/teams");
  }

}
