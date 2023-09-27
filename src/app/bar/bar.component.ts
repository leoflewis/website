import { Component, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';
import { ZData } from '../models/player';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnDestroy{
  public chart: any;
  public chartid!: string;
  public id!: ActivatedRoute;
  @Input() dataValues: number[];
  @Input() labels: string[];
  @Input() label: string;
  @Input() colors: string[];

  constructor(private route: ActivatedRoute) {
    this.dataValues = <number[]>{};
    this.labels = <string[]>{};
    this.label = <string>{};
    this.colors = <string[]>{};
  }
  ngOnDestroy(): void {
    this.chart.destroy();
  }

  ngOnInit(): void {
    this.createChart();
    this.id = this.route;
  }

  createChart(){
    this.chart = new Chart("bar", {
      type: 'bar', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: this.labels, 
	       datasets: [
          {
            label: this.label,
            data: this.dataValues,
            backgroundColor: this.colors
          }  
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true
      }
    });
  }
}
