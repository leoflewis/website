import { ChangeDetectorRef, Component, QueryList, ViewChildren } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Skater, SkaterData, SkaterMessage } from '../models/skaters';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {MatSort, MatSortModule, Sort } from '@angular/material/sort';


@Component({
  selector: 'app-skaters-table',
  templateUrl: './skaters-table.component.html',
  styleUrls: ['./skaters-table.component.css']
})

export class SkatersTableComponent implements AfterViewInit{
  myForm = new FormGroup({});
  dataSource = new MatTableDataSource<Skater>();
  displayedColumns = ['PlayerName', 'GP', 'Genos', 'Apples', 'Points', 'xG','Shots', 'Hits', 'TOI', 'GWG', 'OTG', 'PenM', 'FOPCT', 'SPct', 'Blocks', 'PM', 'shifts', 'PPG', 'PPP', 'PPTOI', 'SHG', 'SHP', 'SHTOI'];
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
  @ViewChild(MatSort)sort: MatSort = new MatSort;
  sampleSkater: Skater[];
  sortedData: Skater[] = <Skater[]>{};
  year = new FormControl();

  constructor(private http: HttpClient){
    this.sampleSkater = [
    {
      PM: 0,
      Apples: 0,
      Blocks: 0,
      EVTOI: 0,
      FOPCT: 0,
      GP: 0,
      GWG: 0,
      Genos: 0,
      Hits: 0,
      OTG: 0,
      PPG: 0,
      PPP: 0,
      PPTOI: 0,
      PenM: 0,
      PlayerName: "Loading",
      Points: 0,
      SHG: 0,
      SHP: 0,
      SHTOI: 0,
      SPct: 0,
      Shots: 0,
      TOI: 0,
      shifts: 0,
      xG: 0
    }]
    this.dataSource = new MatTableDataSource(this.sampleSkater);
    if (!this.dataSource.sort) {this.dataSource.sort = this.sort;}
    this.getSkaterData(20222023).subscribe(data => {
      this.dataSource = new MatTableDataSource(data.message.data);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }


  onClick(e: object){
    console.log(this.year);
    console.log(e);
    console.log(this.myForm);
    this.getSkaterData(20222023).subscribe(data => {
      this.dataSource = new MatTableDataSource(data.message.data);
      this.dataSource.paginator = this.paginator;
    });
  }

  getSkaterData(season: number){
    return this.http.get<SkaterMessage>("https://hockey-stats-data.azurewebsites.net/skaters?season=" + season);
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
