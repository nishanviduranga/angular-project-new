import { Component, OnInit } from '@angular/core';
import {ServiceConfig} from "../../config/api-service-config";
import {HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Student} from "../../model/Student";
import {AppModule} from "../../app.module";
import {UserServiceService} from "../../service/user-service.service";


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  updatedStudent =  new Student();
  private toastr: any;
  constructor( private userServiceService : UserServiceService) {
  }

  ngOnInit() {
  }


  updateStudent(){
    if (this.updatedStudent.id == null || this.updatedStudent.name == null || this.updatedStudent.age == null || this.updatedStudent.telephoneNumber == null
      || this.updatedStudent.address == null) {
      this.toastr.error('Please fill all the Fields!', 'Error!');
    } else {
      if ((this.updatedStudent.telephoneNumber.length < 10 || this.updatedStudent.telephoneNumber.length > 10)) {
        this.toastr.error('Please enter a valid Phone Number!', 'Error!');
      } else {
        if (isNaN(Number(this.updatedStudent.age))) {
          this.toastr.error('Please enter a valid Phone Number!', 'Error!');
        } else {
    this.userServiceService.updateStudent(this.updatedStudent).subscribe(res => {
      console.log("Student Updated Successfully...");
    })
        }

      }

    }

  }
}
