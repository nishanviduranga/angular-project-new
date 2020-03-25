import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/Student";
import {UserServiceService} from "../../service/user-service.service";
import {HttpHeaders} from "@angular/common/http";
import {ServiceConfig} from "../../config/api-service-config";
import {compareNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss']
})
export class AddstudentComponent implements OnInit {

  id: any;
  name: any;
  telephoneNumber: any;
  address: any;
  studentList: any;
  newStudent = new Student();
  searchID: any;
  dltStudent: any;
  private toastr: any;
  private http: any;


  constructor(private userServiceService: UserServiceService) {
  }


  ngOnInit() {
  }

  save() {
    if (this.newStudent.id == null || this.newStudent.name == null || this.newStudent.age == null || this.newStudent.telephoneNumber == null
      || this.newStudent.address == null) {
      this.toastr.error('Please fill all the Fields!', 'Error!');
    } else {
      if ((this.newStudent.telephoneNumber.length < 10 || this.newStudent.telephoneNumber.length > 10)) {
        this.toastr.error('Please enter a valid Phone Number!', 'Error!');
      } else {
        if (isNaN(Number(this.newStudent.age))) {
          this.toastr.error('Please enter a valid Phone Number!', 'Error!');
        } else {
          this.userServiceService.saveStudent(this.newStudent).subscribe(res => {
            console.log(res);
          })
        }

        }

      }

    }
  }
