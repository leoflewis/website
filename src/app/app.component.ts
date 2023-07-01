import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hockey Stats';

  allGames = [
    {hometeam:"MN", awayteam: "COL"},
    {hometeam:"BOS", awayteam: "TOR"}
  ]

  get games(){
    return this.allGames
  }
}
