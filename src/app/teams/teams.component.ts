import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NHLTeam, NHLTeamMessage, RosterItem } from '../models/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  form = new FormGroup({
    teamObj: new FormControl(''),
    year: new FormControl('')
  });

  teams: NHLTeam[];
  roster: RosterItem[] | undefined;

  constructor(private http: HttpClient){

  }

  ngOnInit(){
    this.getTeams().subscribe(teams => {
      this.teams = teams.teams;
    });
  }

  onChange(){
    console.log(this.form.value.teamObj);
    console.log(this.form.value.year);
    if(this.form.value.year != undefined && this.form.value.year != null && this.form.value.year != ""){
      console.log("First block");
      this.getRoster(this.form.value.teamObj, this.form.value.year)?.subscribe(team => {
        this.roster = team.teams[0].roster?.roster;
      });
    } else if(this.form.value.teamObj != undefined && this.form.value.teamObj != null){
      console.log("Second block")
      this.getRoster(this.form.value.teamObj, "20222023")?.subscribe(team => {
        this.roster = team.teams[0].roster?.roster;
      });
    }
  }

  getTeams(){
    return this.http.get<NHLTeamMessage>("https://statsapi.web.nhl.com/api/v1/teams");
  }

  getRoster(id: string | undefined | null, year: string | undefined | null){
    if(id != null && id != undefined){
      return this.http.get<NHLTeamMessage>("https://statsapi.web.nhl.com/api/v1/teams/" + id + "?expand=team.roster&season=" + year)
    }
    else{
      return
    }
  }


}
