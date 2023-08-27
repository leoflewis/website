import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { LineComponent } from './line/line.component';
import { PlayerLandingComponent } from './player-landing/player-landing.component';
import { RinkComponent } from './rink/rink.component';
import { SkatersTableComponent } from './skaters-table/skaters-table.component';
import { GamesComponent } from './games/games.component';
import { HistoricGamesComponent } from './historic-games/historic-games.component';

const routes: Routes = [
  {path: "players", component: PlayerLandingComponent},
  {path: "upcoming", component: RinkComponent},
  {path: "skaters", component: SkatersTableComponent},
  {path: "todaygames", component: GamesComponent,},
  {path: "historic", component: HistoricGamesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
