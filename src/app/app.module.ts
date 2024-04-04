import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { LineComponent } from './line/line.component';
import { PlayerLandingComponent } from './player-landing/player-landing.component';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {provideAnimations} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { RinkComponent } from './rink/rink.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { SkatersTableComponent } from './skaters-table/skaters-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule } from '@angular/material/sort';
import { GamesComponent } from './games/games.component';
import { HistoricGamesComponent } from './historic-games/historic-games.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TeamsComponent } from './teams/teams.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CompareTeamsComponent } from './compare-teams/compare-teams.component';
import { ScatterComponent } from './scatter/scatter.component';
import { ComparePlayersComponent } from './compare-players/compare-players.component';
import { RadarComponent } from './radar/radar.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    LineComponent,
    PlayerLandingComponent,
    RinkComponent,
    PlayerCardComponent,
    SkatersTableComponent,
    GamesComponent,
    HistoricGamesComponent,
    TeamsComponent,
    CompareTeamsComponent,
    ScatterComponent,
    ComparePlayersComponent,
    RadarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatMenuModule,
    MatListModule,
    MatSortModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FlexLayoutModule,
    MatTabsModule
  ],
  exports: [
    MatSortModule
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }