import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TeamStatData, TeamStatsMessage } from '../models/team';

@Component({
  selector: 'app-compare-teams',
  templateUrl: './compare-teams.component.html',
  styleUrls: ['./compare-teams.component.css']
})
export class CompareTeamsComponent {

  data: TeamStatData[];

  form = new FormGroup({
    stat: new FormControl(''),
    year: new FormControl('')
  });

  constructor(private http: HttpClient){

  }

  ngOnInit(){
    this.getTeamStats().subscribe(data =>{
      this.data = data.message.data;
      console.log(this.data);
    });
  }

  getTeamStats(){
    return this.http.get<TeamStatsMessage>("https://hockey-stats-data.azurewebsites.net/teams-stats")
  }
}
