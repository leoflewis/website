import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NHLTeam, NHLTeamMessage, RosterItem, TeamMessage } from '../models/team';
import { Shot } from '../models/shot';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  form = new FormGroup({
    teamObj: new FormControl('30'),
    year: new FormControl('20222023'),
    type: new FormControl("1"),
    start: new FormControl<Date | null>(new Date(2022, 9, 15)),
    end: new FormControl<Date | null>(null),
  });
  minDate: Date;
  maxDate: Date;
  teams: NHLTeam[];
  roster: RosterItem[] | undefined;
  shots: Shot[];
  startStr: string;
  endStr: string;
  datesSelected: boolean = false;
  taken: string = "taken";
  
  constructor(private http: HttpClient){
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(2022, 6, 1);
    this.maxDate = new Date(2023, 6, 1);
  }

  ngOnInit(){
    this.getTeams().subscribe(teams => {
      this.teams = teams.teams;
    });
    this.getRoster(this.form.value.teamObj, this.form.value.year)?.subscribe(team => {
      this.roster = team.teams[0].roster?.roster;
    })
    this.getShots(this.form.value.teamObj, this.form.value.year, this.taken).subscribe(data => {
      this.shots = data.message.data.shots;
    });
  }

  onChange(){
    if(this.form.value.year == "20232024"){
      this.minDate = new Date(2023, 9, 1);
      this.maxDate = new Date(2024, 6, 1);
      this.form.value.start = new Date(2023, 6, 15);
    }
    if(this.form.value.year == "20222023"){
      this.minDate = new Date(2022, 9, 1);
      this.maxDate = new Date(2023, 6, 1);
      this.form.value.start = new Date(2022, 9, 10);
    }
    if(this.form.value.type == "1"){
      this.taken = "taken"
    }
    if(this.form.value.type == "0"){
      this.taken = "conceded"
    }
    this.getRoster(this.form.value.teamObj, this.form.value.year)?.subscribe(team => {
      this.roster = team.teams[0].roster?.roster;
    });
    this.getShots(this.form.value.teamObj, this.form.value.year, this.taken).subscribe(data => {
      this.shots = data.message.data.shots;
    });
    if(this.datesSelected){
      this.getShotsbyDate(this.form.value.teamObj, this.form.value.year, this.startStr, this.endStr, this.taken).subscribe(data => {
        this.shots = data.message.data.shots;
      });
    }
  }

  onDateChange(){
    if(this.form.value.type == "0"){
      this.taken = "conceded"
    }
    if(this.form.value.start != null && this.form.value.end != null){
      this.datesSelected = true;
      this.startStr = this.form.value.start.getFullYear() + "-" + (this.form.value.start.getMonth() + 1) + "-" + this.form.value.start.getDate()
      this.endStr = this.form.value.end.getFullYear() + "-" + (this.form.value.end.getMonth() + 1) + "-" + this.form.value.end.getDate()
      this.getShotsbyDate(this.form.value.teamObj, this.form.value.year, this.startStr, this.endStr, this.taken).subscribe(data => {
        this.shots = data.message.data.shots;
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

  getShots(id: string | undefined | null, season: string | undefined | null, taken: string){
    return this.http.get<TeamMessage>("https://hockey-stats-data.azurewebsites.net/team?team=" + id + "&season=" + season + "&taken=" + taken);
  }


  getShotsbyDate(id: string | undefined | null, season: string | undefined | null, start: string | undefined | null, end: string | undefined | null, taken: string){
    return this.http.get<TeamMessage>("https://hockey-stats-data.azurewebsites.net/team?team=" + id + "&season=" + season + "&start=" + start + "&end=" + end + "&taken=" + taken);
  }
}
