import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../../service/user-service.service";
import {Student} from "../../model/Student";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  id: any;
  name: any;
  telephoneNumber: any;
  address: any;
  studentList: any;
  newStudent = new Student();
  searchID: any;
  dltStudent: any;



  constructor(private userServiceService: UserServiceService) {
  }

  ngOnInit() {
    this.getAllStudents();

  }

  getAllStudents() {
    this.userServiceService.getAllStudents().subscribe(res => {
        this.studentList = res;
        console.log("csdcsd")
      }
    );

  }


    DeleteUser() {
      console.log("Console .....", this.searchID);

        this.userServiceService.DeleteUsers(this.searchID).subscribe(res => {
           console.log(res)
         }
       );

    }


  viewStudent() {
    console.log("Console .....", this.searchID);

  this.userServiceService.getStudent(this.searchID).subscribe(res => {
        this.newStudent = res;
        this.studentList.
        console.log(res)
      }
    );
  }


}
