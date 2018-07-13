import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent } from './student';
import { Observable } from 'rxjs';


export class StudentService 
{
  constructor(private http:HttpClient) 
 {

  }

  private _url:string = "/assets/studentInfo.json";

 
GetDetails():Observable<IStudent[]>
{
  return this.http.get<IStudent[]>(this._url);
}

}
