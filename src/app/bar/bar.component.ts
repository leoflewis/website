import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  public chart: any;
  public chartid!: string;
  public id!: ActivatedRoute;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.createChart();
    this.chartid = "Chart1";
    this.id = this.route;
  }

  createChart(){
    this.chart = new Chart("bar", {
      type: 'bar', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: ['2015-2016', '2016-2017', '2017-2018','2018-2019', '2019-2020', '2020-2021', '2021-2022','2022-2023', ], 
	       datasets: [
          {
            label: "Goals",
            data: ['10','20', '30', '40', '50','50', '45', '30'],
            backgroundColor: 'navy'
          },
          {
            label: "Assists",
            data: ['10', '30', '45', '37', '45','40', '32', '20'],
            backgroundColor: 'red'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
    });
  }
}
