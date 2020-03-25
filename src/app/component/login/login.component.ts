import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
import { AuthenticationService } from "../../service/authentication.service";
import {AppModule} from "../../app.module";
import {ServiceConfig} from "../../config/api-service-config";
import {UserServiceService} from "../../service/user-service.service";
import {Student} from "../../model/Student";
import {Login} from "../../model/Login";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = 'nish'
  password = ''
  invalidLogin = false

  private http: HttpClient
  public token: string;
  newLogin = new Login();

  constructor(private router: Router,
              private loginservice: AuthenticationService,private userServiceService: UserServiceService) {
  }

  ngOnInit() {
  }

  checkLogin(userName: string, password: string) {
    const loginData = {
      "username": userName,
      "password" : password
    };

    this.userServiceService.getlog(loginData).subscribe(res => {
      const tokenStr = 'Bearer ' + res['token'];
      this.token = res['token'];
      sessionStorage.setItem('token', tokenStr);
      if(res['token']!= null)
      {
        this.router.navigate(['/home']);

      }
      }
    );

  }
 }
// this.userServiceService.getStudent(this.searchID).subscribe(res => {
//     this.newStudent = res;
//     this.studentList.
//     console.log(res)
//   }
// );
// }
