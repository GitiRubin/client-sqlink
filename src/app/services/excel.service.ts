import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor(public http:HttpClient) { }

  postFile(file){
    return this.http.post("https://localhost:7257/api/ExcelFile",file)
  }
}
