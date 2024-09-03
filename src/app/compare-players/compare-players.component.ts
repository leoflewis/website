import { Component } from '@angular/core';
import { Player, PlayersResponse } from '../models/player';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs';
import { SkaterPercentile, SkaterPercentileData } from '../models/percentile';
import {Constants} from '../app.module';

@Component({
  selector: 'app-compare-players',
  templateUrl: './compare-players.component.html',
  styleUrls: ['./compare-players.component.css']
})
export class ComparePlayersComponent {
  myGroup = new FormGroup({});
  player1 = new FormControl<Player | null>(null);
  player2 = new FormControl<Player | null>(null);
  seasonControl = new FormControl<string>("20222023");

  options1: Player[] = [];
  options2: Player[] = [];
  renderPlayer: boolean | undefined;
  filteredOptions1: Observable<Player[]>;
  filteredOptions2: Observable<Player[]>;
  player1Data: SkaterPercentileData;
  player2Data: SkaterPercentileData;
  season: string | null;
  
  constructor(private http: HttpClient) { 
    this.myGroup.addControl("player1", this.player1);
    this.myGroup.addControl("player2", this.player2);
    this.myGroup.addControl("year", this.seasonControl);
  }

  showPlayers(){
    this.getPlayers().subscribe(data => {
      this.options1 = data.data;
      this.options2 = data.data;
    });
  }


  ngOnInit() {
    this.season = "20222023";
    this.showPlayers();
    this.filteredOptions1 = this.player1.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.PlayerName;
        return name ? this._filter1(name as string) : this.options1.slice();
      }),
    );
    this.filteredOptions2 = this.player2.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.PlayerName;
        return name ? this._filter2(name as string) : this.options2.slice();
      }),
    );
  }
  
  onSeasonChange(){
    this.season = this.seasonControl.value;
  }

  onSelect(e: Player){
    this.renderPlayer = false;
    if (this.player1.value != null && this.player2.value != null){
      this.renderPlayer = true;
      console.log(this.player2.value);
      this.getPlayerPercentile(this.player1.value.PlayerId).subscribe(data => {
        this.player1Data = data.message.data[0];
      });
      this.getPlayerPercentile(this.player2.value.PlayerId).subscribe(data => {
        this.player2Data = data.message.data[0];
      });
    }
  }

  getPlayers(){
    return this.http.get<PlayersResponse>(Constants.BaseAPIURL + "players");
  }

  getPlayerPercentile(id: number){
    return this.http.get<SkaterPercentile>(Constants.BaseAPIURL + "skaters-percent?id=" + id + "&season=" + this.season);
  }

  displayFn(user: Player): string {
    return user && user.PlayerName ? user.PlayerName : '';
  }

  private _filter1(name: string): Player[] {
    const filterValue = name.toLowerCase();
    return this.options1.filter(option => option.PlayerName.toLowerCase().includes(filterValue));
  }
  private _filter2(name: string): Player[] {
    const filterValue = name.toLowerCase();
    return this.options2.filter(option => option.PlayerName.toLowerCase().includes(filterValue));
  }
}
