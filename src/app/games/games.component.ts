import { HttpClient } from '@angular/common/http';
import { Component  } from '@angular/core';
import { GameMessage, Game, GameShotsMessage, ShotAtTime, GameTotals } from '../models/game';
import { formatDate } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Shot } from '../models/shot';
import { FormControl, FormGroup } from '@angular/forms';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  game: Game;
  games: Game[];
  showGame: boolean = false;
  displayedColumns = ['Shooter', 'Time', 'Result']
  dataSource = new MatTableDataSource<Shot>();
  shots: Shot[];
  shotsByTime: ShotAtTime;
  totals: GameTotals;
  dataSet1: number[];
  dataSet2: number[];
  form = new FormGroup({
    type: new FormControl<number>(0)
  });
  lineChart: boolean = false;


  constructor(private http: HttpClient){
    this.games = [];
  }

  ngOnInit(){
    this.getGames().subscribe(data => {
      this.games = data.games;
    });
  }

  formattedDate(date: Date){
    return formatDate(date, "dd/MM/yyyy", "en-US")
  }

  onClick(e: Game){
    this.game = e;
    this.getShots().subscribe(data => {
      this.shots = data.message.shots;
      console.log(this.shots);
      this.shotsByTime = data.message.shotsByTime;
      this.totals = data.message.totals;
      this.dataSet1 = this.shotsByTime.homeShots;
      this.dataSet2 = this.shotsByTime.awayShots;
      this.showGame = true;
    });
    window.scrollTo(0,document.body.scrollHeight);
  }

  ngAfterContentChecked() {
    console.log("checked");
    this.lineChart = true;
  }

  onChange(){
    if (this.form.value.type == 0){
      this.dataSet1 = this.shotsByTime.homeShots;
      this.dataSet2 = this.shotsByTime.awayShots;
    }
    if (this.form.value.type == 1){
      this.dataSet1 = this.shotsByTime.homexG;
      this.dataSet2 = this.shotsByTime.awayxG;
    }

  }

  getShots(){
    return this.http.get<GameShotsMessage>("https://hockey-stats-data.azurewebsites.net/live-game?id=" + this.game.id.toString()); 
  }

  getGames(){
    return this.http.get<GameMessage>("https://hockey-stats-data.azurewebsites.net/score-proxy"); 
  }
}
