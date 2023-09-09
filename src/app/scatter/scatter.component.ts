import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.css']
})
export class ScatterComponent {
  public graph: any;
  


  ngOnInit(): void {
    this.createChart();
  }
  
  data = {
    labels: ["1", "2", "3", "4"],
    datasets: [{
      label: 'Teams',
      data: [
        {x: 2, y: 2,}, 
        {x: -2, y: 2}, 
        {x: -2,y: -2}, 
        {x: 2,y: -2,}
      ],
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
