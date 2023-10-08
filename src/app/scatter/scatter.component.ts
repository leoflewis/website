import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { TeamStatData } from '../models/team';

export interface point{
  x: number,
  y: number
}

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.css']
})
export class ScatterComponent {
  public graph: any;
  data: any;
  @Input() inputData: TeamStatData[];
  @Input() xLabel: string;
  @Input() yLabel: string;
  labels: string[];
  points: point[];

  ngOnInit(): void {
    this.setData()
    this.createChart();
  }
  
  setData(){
    this.labels = [
      this.inputData[0].name, this.inputData[1].name, this.inputData[2].name, this.inputData[3].name, this.inputData[4].name, this.inputData[5].name, this.inputData[6].name, this.inputData[7].name, this.inputData[8].name, this.inputData[9].name, this.inputData[10].name,
      this.inputData[11].name, this.inputData[12].name, this.inputData[13].name, this.inputData[14].name, this.inputData[15].name, this.inputData[16].name, this.inputData[17].name, this.inputData[18].name, this.inputData[19].name, this.inputData[20].name,
      this.inputData[21].name, this.inputData[22].name, this.inputData[23].name, this.inputData[24].name, this.inputData[25].name, this.inputData[26].name, this.inputData[27].name, this.inputData[28].name, this.inputData[29].name, this.inputData[30].name,
      this.inputData[31].name
    ]
    this.points = [
      {x: this.inputData[0].x, y: this.inputData[0].y}, {x: this.inputData[1].x, y: this.inputData[1].y}, {x: this.inputData[2].x, y: this.inputData[2].y}, {x: this.inputData[3].x, y: this.inputData[3].y}, {x: this.inputData[4].x, y: this.inputData[4].y}, {x: this.inputData[5].x, y: this.inputData[5].y}, 
      {x: this.inputData[6].x, y: this.inputData[6].y}, {x: this.inputData[7].x, y: this.inputData[7].y}, {x: this.inputData[8].x, y: this.inputData[8].y}, {x: this.inputData[9].x, y: this.inputData[9].y}, {x: this.inputData[10].x, y: this.inputData[10].y}, {x: this.inputData[11].x, y: this.inputData[11].y},
      {x: this.inputData[12].x, y: this.inputData[12].y}, {x: this.inputData[13].x, y: this.inputData[13].y}, {x: this.inputData[14].x, y: this.inputData[14].y}, {x: this.inputData[15].x, y: this.inputData[15].y}, {x: this.inputData[16].x, y: this.inputData[16].y}, {x: this.inputData[17].x, y: this.inputData[17].y}, {x: this.inputData[18].x, y: this.inputData[18].y},
      {x: this.inputData[19].x, y: this.inputData[19].y}, {x: this.inputData[20].x, y: this.inputData[20].y}, {x: this.inputData[21].x, y: this.inputData[21].y}, {x: this.inputData[22].x, y: this.inputData[22].y}, {x: this.inputData[23].x, y: this.inputData[23].y}, {x: this.inputData[24].x, y: this.inputData[24].y},
      {x: this.inputData[25].x, y: this.inputData[25].y}, {x: this.inputData[26].x, y: this.inputData[26].y}, {x: this.inputData[27].x, y: this.inputData[27].y}, {x: this.inputData[28].x, y: this.inputData[28].y}, {x: this.inputData[29].x, y: this.inputData[29].y}, {x: this.inputData[30].x, y: this.inputData[30].y},
      {x: this.inputData[31].x, y: this.inputData[31].y}
    ]
    this.data = {
      labels: this.labels,
      datasets: [{
        label: 'Teams',
        data: this.points,
        backgroundColor: 'blue'
      }],
    };
  }

  createChart(){
    this.graph = new Chart("scatter", {
      type: 'scatter', //this denotes tha type of chart
      data: this.data ,
      options: {
        scales: {
          y: {
            title: {
              display: true,
              text: this.yLabel,
            },
            reverse: true
          },
          x: {
            title: {
              display: true,
              text: this.xLabel
            }
          }
        }
      }
    });
  }

  ngOnChanges(){
    if(this.graph){
      this.graph.destroy();
      this.setData();
      this.createChart();
    }
  }
}
