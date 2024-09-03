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
  displayText: string = '';
  constructor(private http: HttpClient) {      
    this.shots = [];
  }

  ngOnInit(){
    this.displayText = '';
    console.log()
  }

  addText(shot: number){
    if (!this.shots[shot].label){
      this.shots[shot].label = this.shots[shot].xG.toString();
      this.displayText = this.shots[shot].xG.toString();
    }else{
      this.shots[shot].label = "";
      this.displayText = '';
    }
  }
}
