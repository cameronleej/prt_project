import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { Capture } from './capture.model';

@Injectable()
export class CaptureService {
  selectedCapture: Capture | undefined;
  captures: Capture[] | undefined;
  readonly baseURL = "http://localhost:3000/captures";
  
  constructor(private http: HttpClient) { }

  getCaptureList(){
    return this.http.get(this.baseURL);
  }
}
