import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.css']
})
export class ScatterComponent {

  public graph: any;
  public chartid!: string;
  ngOnInit(): void {
    this.createChart();
    this.chartid = "Chart2";
  }
  
  data = {
    datasets: [{
      label: 'Teams',
      data: [{
        x: -10,
        y: 0
      }, {
        x: 0,
        y: 10
      }, {
        x: 10,
        y: 5
      }, {
        x: 0.5,
        y: 5.5
      }],
      backgroundColor: 'blue'
    }],
  };

  createChart(){
    this.graph = new Chart("scatter", {
      type: 'scatter', //this denotes tha type of chart
      data: this.data  
    });
  }
}
