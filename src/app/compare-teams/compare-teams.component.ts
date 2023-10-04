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
  xLabel: string = "xGF";
  yLabel: string = "xGA";
  form = new FormGroup({
    stat: new FormControl<number>(0),
    year: new FormControl<number>(20222023)
  });

  constructor(private http: HttpClient){
    
  }

  ngOnInit(){
    this.form.value.stat = 0;
    this.getTeamStats('', '').subscribe(data =>{
      this.data = data.message.data;
    });
  }

  onChange(){
    const type = this.form.value.stat;
    switch(type){
      case 0:
        this.xLabel = "xGF";
        this.yLabel = "xGA";
        break;
      case 1:
        this.xLabel = "GF";
        this.yLabel = "GA";
        break;
      case 2:
        this.xLabel = "SF";
        this.yLabel = "SA";
        break;
      case 3:
        this.xLabel = "FF";
        this.yLabel = "FA";
        break;
    }
    this.getTeamStats(type, '').subscribe(data =>{
      this.data = data.message.data;
    });
  }


  getTeamStats(type: any, year: string){
    if(type != '' &&  year == ''){
      return this.http.get<TeamStatsMessage>("https://hockey-stats-data.azurewebsites.net/teams-stats?type=" + type.toString())
    }
    if(type == '' &&  year != ''){
      return this.http.get<TeamStatsMessage>("https://hockey-stats-data.azurewebsites.net/teams-stats?year=" + year)
    }
    if(type != '' &&  year != ''){
      return this.http.get<TeamStatsMessage>("https://hockey-stats-data.azurewebsites.net/teams-stats?year=" + year + "&type=" + type)
    }
    return this.http.get<TeamStatsMessage>("https://hockey-stats-data.azurewebsites.net/teams-stats")
  }
}
