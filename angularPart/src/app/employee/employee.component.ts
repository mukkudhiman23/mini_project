import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers : [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    this.employeeService.postEmployee(form.value).subscribe((res)=>{
      alert("done");
    });
    
  }


}
