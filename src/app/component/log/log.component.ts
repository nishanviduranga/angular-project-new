import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  username = 'javainuse'
  password = ''
  invalidLogin = false

  constructor(private router: Router,
              private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}
