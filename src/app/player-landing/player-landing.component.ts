import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Player, PlayerData, PlayersResponse, Stats, gameType, split, stat, type } from '../models/player';
import {Constants} from '../app.module';

@Component({
  selector: 'app-player-landing',
  templateUrl: './player-landing.component.html',
  styleUrls: ['./player-landing.component.css'],
  animations: [] 
})
export class PlayerLandingComponent {
  myControl = new FormControl<string | Player>('');
  options: Player[] = [];
  filteredOptions: Observable<Player[]>;
  renderPlayer: boolean | undefined;
  playersResponse: PlayersResponse;  
  player: Player;
  playerData: PlayerData;

  constructor(private http: HttpClient) { 
    this.renderPlayer = false;
    this.player = <Player>{};
    this.playerData = <PlayerData>{};
    this.playersResponse = <PlayersResponse> {};
  }

  ngOnInit() {
    this.showPlayers();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.PlayerName;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  showPlayers(){
    this.getPlayers().subscribe(data => {
      this.options = data.data;
    });
  }

  getPlayers(){
    return this.http.get<PlayersResponse>(Constants.BaseAPIURL + "players");
  }

  getPlayerData(id: number){
    return this.http.get<PlayerData>(Constants.BaseAPIURL + "player?playerid=" + id +"&season=20222023");
  }

  displayFn(user: Player): string {
    return user && user.PlayerName ? user.PlayerName : '';
  }

  onSelect(e: Player){
    this.player = e;
    this.renderPlayer = false;
  }

  onClick(e: object){
    if (this.player != undefined){
      this.renderPlayer = true;
    }
    this.myControl.setValue('');
  }

  private _filter(name: string): Player[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.PlayerName.toLowerCase().includes(filterValue));
  }
}
