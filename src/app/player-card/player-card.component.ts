import { Component, Input } from '@angular/core';
import { Player, PlayerData } from '../models/player';
import { HttpClient } from '@angular/common/http';
import { PlayerBio } from '../models/player-bio';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent {
  @Input() id: number
  playerData: PlayerData;
  playerBio: PlayerBio;
  render: boolean;
  values: number[];
  colors: string[];
  labels: string[];
  label = "Z Scores";

  constructor(private http: HttpClient) { 
    this.playerData = <PlayerData>{};
    this.playerBio = <PlayerBio>{};
    this.render = false;
    this.id = <number>{};
    this.values = [];
    this.colors = [];
    this.labels = [];
  }

  ngOnInit() {
    if (this.id != undefined){
      this.getPlayerBio(this.id).subscribe(data => {
        this.playerBio = data;
        console.log(this.playerBio.people[0].primaryPosition.name)
        if(this.playerBio.people[0].primaryPosition.name != "Goalie"){
          this.labels = ["Games", "EV TOI","Points", "Goals", "Assists", "Shots", "Sh%", "Blocks", "EVTOI", "GWG", "Hits", "OTG", "PIMs", "+/-", "PP G", "PP P", "PP TOI", "SH G", "SH P", "SH TOI", "Shifts"];
          this.getPlayerData(this.id).subscribe(data => {
            this.playerData = data;
            this.values.push(this.playerData.message.data.Games);
            this.values.push(this.playerData.message.data.EVTOI);
            this.values.push(this.playerData.message.data.Points);
            this.values.push(this.playerData.message.data.Goals);
            this.values.push(this.playerData.message.data.Assists);
            this.values.push(this.playerData.message.data.Shots);
            this.values.push(this.playerData.message.data.Spct);
            this.values.push(this.playerData.message.data.Blocks);
            this.values.push(this.playerData.message.data.EVTOI);
            this.values.push(this.playerData.message.data.GWG);
            this.values.push(this.playerData.message.data.Hits);
            this.values.push(this.playerData.message.data.OTG);
            this.values.push(this.playerData.message.data.PIMs);
            this.values.push(this.playerData.message.data.PM);
            this.values.push(this.playerData.message.data.PPGoals);
            this.values.push(this.playerData.message.data.PPPoints);
            this.values.push(this.playerData.message.data.PPTOI);
            this.values.push(this.playerData.message.data.SHG);
            this.values.push(this.playerData.message.data.SHP);
            this.values.push(this.playerData.message.data.SHTOI);
            this.values.push(this.playerData.message.data.Shifts);
            this.values.forEach(element => {
              if (element > 0){
                this.colors.push("navy");
              } else {
                this.colors.push("red");
              }
            });
            this.render = true;
          });
        } else{
          this.render = true;
        }
      });
    }
  }

  getPlayerBio(id: number){
    return this.http.get<PlayerBio>("https://statsapi.web.nhl.com/api/v1/people/" + id + "/");
  }

  getPlayerData(id: number){
    return this.http.get<PlayerData>("https://hockey-stats-data.azurewebsites.net/player?playerid=" + id +"&season=20222023");
  }

}
