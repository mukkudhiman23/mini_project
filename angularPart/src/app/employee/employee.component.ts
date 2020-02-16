import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../shared/employee.service";
import { Employee } from "../shared/employee.model";
import { FormBuilder, Validators } from "@angular/forms";
import * as moment from "moment";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder
  ) {}

  today = new Date();
  public employeeForm = this.fb.group({
    _id: [""],
    id_emp: [""],
    name: [""],
    trade: [""],
    address: [""],
    id_aadhar: [""],
    gender: [""],
    dob: [""]
  });

  public employees: Employee[];

  ngOnInit() {
    // get the list of the employees
    this.getEmployees();
  }

  /**
   * Fetchs the list of the employees
   */
  getEmployees() {
    this.employeeService.getEmployeeList().subscribe(res => {
      this.employees = res as any;
    });
  }

  /**
   * Submits the employee form
   */
  onSubmit() {
    // Check if the _id is present then we are editing an record
    if (this.employeeForm.value._id) {
      this.employeeService
        .putEmployee(this.employeeForm.value)
        .subscribe(res => {
          alert("Employee has been updated into the database!");
          // Reset the list
          this.getEmployees();
          // Reset the form
          this.employeeForm.reset();
        });
    } else {
      // otherwise add a new record
      this.employeeService
        .postEmployee(this.employeeForm.value)
        .subscribe(res => {
          alert("Employee has been added into the database!");
          // Reset the list
          this.getEmployees();
          // Reset the form
          this.employeeForm.reset();
        });
    }
  }

  /**
   * Set the employee data on the form
   *
   */
  onEdit(emp: Employee) {
    this.employeeForm.patchValue(emp);
    // Format the DOB and set
    this.employeeForm.patchValue({
      dob: moment(emp.dob).format("YYYY-MM-DD")
    });
  }

  /**
   * Delete the employee
   *
   */
  onDelete(_id: string) {
    this.employeeService.deleteEmployee(_id).subscribe(res => {
      alert("Employee has been removed from database!");
      this.getEmployees();
      this.employeeForm.reset();
    });
  }
}
