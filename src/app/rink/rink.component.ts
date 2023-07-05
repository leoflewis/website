import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Shot } from '../models/shot';



@Component({
  selector: 'app-rink',
  templateUrl: './rink.component.html',
  styleUrls: ['./rink.component.css']
})
export class RinkComponent {
  shots: Shot[];

  constructor(private http: HttpClient) {      
    this.shots = [
      {x:200, y: 30, result: "miss", xG:10},
      {x:800, y: 180, result: "goal", xG: 9},
      {x:1000, y: 300, result: "goal", xG: 8},
      {x:1100, y: 400, result: "goal", xG: 5}
    ]; 
  }
  
}
