import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent {
  public graph: any;
  public chartid!: string;
  ngOnInit(): void {
    this.createChart();
    this.chartid = "Chart2";
  }

  createChart(){
    this.graph = new Chart("line", {
      type: 'line', //this denotes tha type of chart

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
