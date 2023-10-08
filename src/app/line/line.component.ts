import { Component, Input } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent {
  public graph: any;
  public chartid!: string;
  @Input() xLabels: number[];
  @Input() homeShots: number[];
  @Input() awayShots: number[];

  ngOnInit(): void {
    this.createChart();
    this.chartid = "Chart2";
  }

  createChart(){
    this.graph = new Chart("line", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.xLabels, 
	       datasets: [
          {
            label: "Home",
            data: this.homeShots,
            backgroundColor: 'rgb(255, 99, 132)'
          },
          {
            label: "Away",
            data: this.awayShots,
            backgroundColor: 'rgb(54, 162, 235)'
          }  
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: {
            title: {
              display: true,
              text: "Volume",
            }
          },
          x: {
            title: {
              display: true,
              text: "Time"
            }
          }
        }
      }   
    });
  }

  ngOnChanges(){
    if(this.graph){
      this.graph.destroy();
      this.createChart();
    }
  }
}
