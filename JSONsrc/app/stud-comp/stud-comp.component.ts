import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { HttpClient } from '@angular/common/http';
import { IStudent } from '../student';

@Component({
  selector: 'app-stud-comp',
  templateUrl: './stud-comp.component.html',
  
})
export class StudCompComponent implements OnInit {

  public student = [];

  constructor(private _studentservice:StudentService)
  {
  }


  

  ngOnInit() {
    this._studentservice.GetDetails().subscribe(
      data => {
        this.student = data as IStudent [];	 
             }
    );
  }
  

}
