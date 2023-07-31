import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';
import { ZData } from '../models/player';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  public chart: any;
  public chartid!: string;
  public id!: ActivatedRoute;
  @Input() dataValues: number[];
  @Input() labels: string[];
  @Input() label: string;
  @Input() colors: string[];

  constructor(private route: ActivatedRoute){
    this.dataValues = <number[]>{};
    this.labels = <string[]>{};
    this.label = <string>{};
    this.colors = <string[]>{};
  }

  ngOnInit(): void {
    this.createChart();
    this.chartid = "Chart1";
    this.id = this.route;
  }

  createChart(){
    console.log(this.dataValues.length);
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
        aspectRatio:2.5
      }
    });
  }
}
