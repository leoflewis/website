import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NHLTeam, NHLTeamMessage } from '../models/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  form = new FormGroup({
    teamObj: new FormControl('')
  });

  teams: NHLTeam[];

  constructor(private http: HttpClient){

  }

  ngOnInit(){
    this.getTeams().subscribe(teams => {
      this.teams = teams.teams;
    });
  }

  onChange(){
    console.log(this.form.value.teamObj);
  }

  getTeams(){
    return this.http.get<NHLTeamMessage>("https://statsapi.web.nhl.com/api/v1/teams");
  }


}
