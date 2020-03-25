import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.scss']
})
export class NavebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  state =true;

  stateChanger(){
    
      this.state = !this.state
      console.log(this.state)

  }

  logInOutUser() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
}
