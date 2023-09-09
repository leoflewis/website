import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { SkaterPercentileData } from '../models/percentile';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent {
  public graph: any;
  data: any;
  @Input() player1Data: SkaterPercentileData;
  @Input() player2Data: SkaterPercentileData;
  
  ngOnInit(): void {
    this.setData();
    this.createChart();
  }

  setData(){
    this.data = {
      labels: [
        'Apples',
        'Genos',
        'Blocks',
        'Points',
        'Hits',
        'xG',
        'PPPoints',
        'Shots',
        'SHToi'
      ],
      datasets: [{
        label: this.player1Data.PlayerName,
        data: [this.player1Data.AssistsPercentile, this.player1Data.GoalsPercentile, this.player1Data.BlocksPercentile, this.player1Data.PointsPercentile, this.player1Data.HitsPercentile, this.player1Data.xGPercentile, this.player1Data.PPPoints, this.player1Data.ShotsPercentile, this.player1Data.SHToi],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }, {
        label: this.player2Data.PlayerName,
        data: [this.player2Data.AssistsPercentile, this.player2Data.GoalsPercentile, this.player2Data.BlocksPercentile, this.player2Data.PointsPercentile, this.player2Data.HitsPercentile, this.player2Data.xGPercentile, this.player2Data.PPPoints, this.player2Data.ShotsPercentile, this.player2Data.SHToi],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }]
    };
  }

  createChart(){
    this.graph = new Chart("radar", {
      type: 'radar',
      data: this.data  
    });
  }
  ngOnChanges(){
    if(this.graph){
      this.setData();
      this.graph.destroy();
      this.createChart();
    }
  }
  updateChart(){
    this.graph.update();
  }
}
