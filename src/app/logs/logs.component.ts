import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { CaptureService } from '../models/capture.service'
import { Capture } from '../models/capture.model'



@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: [ './logs.component.css' ],
  providers: [CaptureService]
})

export class LogsComponent implements OnInit  {
  avg!: number;
  min!: number;
  max!: number;

  constructor(public captureService: CaptureService){ }


  ngOnInit(){
    //this will call the function to get all of the captures
    this.refreshCaptureList();
    
    //this will refresh the data automatically every 5 seconds
    setInterval(() => this.refreshCaptureList(),5000);
  }

  refreshCaptureList() {
    this.captureService.getCaptureList().subscribe((res) => {
      this.captureService.captures = res as Capture[];
      this.avg = getAverage(this.captureService.captures);
      this.min = getMin(this.captureService.captures);
      this.max = getMax(this.captureService.captures);
    });

  }

  
}

function getAverage(caps: Capture[]): number{
  let total = 0;

  if(caps == undefined){
    return 0;
  }

  for (let i = 0; i < caps.length; i++) {
    total += caps[i].voltage;
  }
  return total/caps.length;
}

function getMin(caps: Capture[]): number{

  if(caps == undefined){
    return 0;
  }
  let min = caps[0].voltage;

  for (let i = 1; i < caps.length; i++) {
    
    if(caps[i].voltage < min){
      min = caps[i].voltage;
    }
    
  }

  return min;
}

function getMax(caps: Capture[]): number{
  
  if(caps == undefined){
    return 0;
  }
  let max = caps[0].voltage;

  for (let i = 1; i < caps.length; i++) {
    
    if(caps[i].voltage > max){
      max = caps[i].voltage;
    }
    
  }

  return max;
}
//OLD CODE
////////////////////////
//   public Table: User[] = [];
//   public Avg: Data[] = [];
//   constructor(private http: HttpClient){
//     this.http.get('/assets/cvs_test1.csv', {responseType: 'text'})
//     .subscribe(
//         data => {
//             let csvToRowArray = data.split("\n");
//             for (let index = 1; index < csvToRowArray.length - 1; index++) {
//               let row = csvToRowArray[index].split(",");
//               this.Table.push((new User(row[0], row[1], parseFloat(row[2]))));
//             }
//             console.log(this.Table);
//         },
//         error => {
//             console.log(error);
//         }
//     );
//     this.http.get('/assets/cvs_test1avg.csv', {responseType: 'text'})
//     .subscribe(
//         data => {
//             let csvToRowArray = data.split("\n");
//             for (let index = 1; index < csvToRowArray.length - 1; index++) {
//               let row = csvToRowArray[index].split(",");
//               this.Avg.push((new Data(parseFloat(row[0]), parseFloat(row[1]), parseFloat(row[2]))));
//             }
//             console.log(this.Avg);
//         },
//         error => {
//             console.log(error);
//         }
//     );
//   }
  

// }

// export class User{
//   date: string;
//   time: string;
//   voltage: number;

//   constructor(date: string, time: string, voltage: number){
//     this.date = date;
//     this.time = time;
//     this.voltage = voltage;
//   }
// }

// export class Data{
//     average: number;
//     max: number;
//     min: number;
  
//     constructor(average: number, max: number, min: number){
//       this.average = average;
//       this.max = max;
//       this.min = min;
//     }
//   }