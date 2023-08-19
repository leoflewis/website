import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { LineComponent } from './line/line.component';
import { PlayerLandingComponent } from './player-landing/player-landing.component';
import { RinkComponent } from './rink/rink.component';
import { SkatersTableComponent } from './skaters-table/skaters-table.component';

const routes: Routes = [
  {path: "todaygames", component: BarComponent},
  {path: "players", component: PlayerLandingComponent},
  {path: "upcoming", component: RinkComponent},
  {path: "skaters", component: SkatersTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
