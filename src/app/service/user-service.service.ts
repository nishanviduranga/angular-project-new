import {Injectable, Type} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import {ServiceConfig} from "../config/api-service-config";
import {map} from "rxjs/operators";
import {Student} from "../model/Student";


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private http : HttpClient) { }


  public getAllStudents(){
    console.log(sessionStorage.getItem('token'));
    const headers = new HttpHeaders({'Authorization':  sessionStorage.getItem('token') });
    return this.http.get(ServiceConfig.studentmanagementUrl+'/Student/getAllStudent', {headers}).pipe(map((res: Response) => {
      return res;
    }));
  }


  public saveStudent(student : Student) {
    console.log(student)
    const headers = new HttpHeaders({ Authorization: sessionStorage.getItem('token') });
    return this.http.post(ServiceConfig.studentmanagementUrl + '/Student/saveStudent', student, {headers}).pipe(map((res: Response) => {
      console.log("Return value");
      return res;
    }));
  }
  public DeleteUsers(id){
  console.log(id);
  const headers = new HttpHeaders({ Authorization: sessionStorage.getItem('token') });
  return this.http.delete(ServiceConfig.studentmanagementUrl+'/Student/delete/'+id, {headers}).pipe(map((res: Response) => {
  return res;
  }))
};


  public updateStudent(student) {
    const headers = new HttpHeaders({ Authorization: sessionStorage.getItem('token') });
    return this.http.put(ServiceConfig.studentmanagementUrl+'/Student/updateStudent/'+student.id, student, {headers}).pipe(map((res: Response) => {
      return res;
    }));
  }

  public getStudent(id) {
    console.log(id);
    const headers = new HttpHeaders({ Authorization: sessionStorage.getItem('token')});
    console.log("eeeeee",headers);
    return this.http.get(ServiceConfig.studentmanagementUrl+'/Student/studentID/'+id, {headers}).pipe(map((res: Student) => {
      return res;
    }));
  }


  getlog(loginData) {
    const headers = new HttpHeaders();
    return this.http.post(ServiceConfig.studentmanagementUrl+'/authenticate', loginData, {headers}).pipe(map((res: Response) => {
      return res;

    }));
  }
}
