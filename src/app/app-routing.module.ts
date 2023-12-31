import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { LineComponent } from './line/line.component';
import { PlayerLandingComponent } from './player-landing/player-landing.component';
import { RinkComponent } from './rink/rink.component';
import { SkatersTableComponent } from './skaters-table/skaters-table.component';
import { GamesComponent } from './games/games.component';
import { HistoricGamesComponent } from './historic-games/historic-games.component';
import { TeamsComponent } from './teams/teams.component';
import { CompareTeamsComponent } from './compare-teams/compare-teams.component';
import { ComparePlayersComponent } from './compare-players/compare-players.component';

const routes: Routes = [
  {path: "players", component: PlayerLandingComponent},
  {path: "upcoming", component: RinkComponent},
  {path: "skaters", component: SkatersTableComponent},
  {path: "todaygames", component: GamesComponent,},
  {path: "historic", component: HistoricGamesComponent },
  {path: "teams", component: TeamsComponent},
  {path: "compare-teams", component: CompareTeamsComponent},
  {path: "compare-players", component: ComparePlayersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
