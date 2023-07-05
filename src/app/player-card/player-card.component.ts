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
  @Input() id: number | undefined;
  playerData: PlayerData;
  playerBio: PlayerBio;
  render: boolean;

  constructor(private http: HttpClient) { 
    this.playerData = <PlayerData>{};
    this.playerBio = <PlayerBio>{};
    this.render = false;
  }

  ngOnInit() {
    if (this.id != undefined){
      this.getPlayerData(this.id).subscribe(data => {
        this.playerData = data;
      });
      this.getPlayerBio(this.id).subscribe(data => {
        this.playerBio = data;
        this.render = true;
      });
    }
  }

  getPlayerBio(id: number){
    return this.http.get<PlayerBio>("https://statsapi.web.nhl.com/api/v1/people/" + id + "/");
  }

  getPlayerData(id: number){
    return this.http.get<PlayerData>("https://statsapi.web.nhl.com/api/v1/people/" + id + "/stats?stats=statsSingleSeason");
  }

}
