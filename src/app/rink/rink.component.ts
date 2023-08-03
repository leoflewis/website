import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Shot } from '../models/shot';



@Component({
  selector: 'app-rink',
  templateUrl: './rink.component.html',
  styleUrls: ['./rink.component.css']
})
export class RinkComponent {
  @Input() shots: Shot[];

  constructor(private http: HttpClient) {      
    this.shots = [];
  }
  
}
