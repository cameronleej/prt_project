import { AfterViewInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CaptureService} from "../models/capture.service";
import { Capture } from '../models/capture.model'

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css'],
  providers: [CaptureService]
})
export class GraphsComponent implements AfterViewInit{
  chart: any;
  dataPoints: any = [];
  showChart: Boolean = false;
  captures: Capture[] = [];

  ngAfterViewInit() {
    this.refreshCaptureList();
  }

  constructor(public captureService: CaptureService) { }

  chartOptions = {
    animationEnabled: true,
    theme: 'light1', //"light2", "dark1", "dark2"
    title: {
      text: 'Voltage over Time',
    },
    axisX: {
      title: 'Time(HH:MM)',
      reversed: false,
    },
    axisY: {
      title: 'Volts',
      includeZero: true,
    },
    data: [
      {
        type: "line",
        dataPoints: this.dataPoints,
      },
    ],
  };
  getChartInstance(chart: object) {
    this.chart = chart;
  }

  refreshCaptureList() {
    this.captureService.getCaptureList().subscribe((res) => {
      this.captureService.captures = res as Capture[];
      this.captures = this.captureService.captures;

    for (let cap of this.captures) {
        this.dataPoints.push({label: cap.time, y: cap.voltage});
      }
    this.dataPoints.pop();
    this.showChart = true;
    });
  }
}
