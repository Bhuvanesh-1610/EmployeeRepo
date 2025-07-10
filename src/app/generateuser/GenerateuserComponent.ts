import { Component, OnInit } from '@angular/core';
import { CreateUsers } from '../CreateUsers';
import { SignupService } from '../signup.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-generateuser',
  templateUrl: './generateuser.component.html',
  styleUrls: ['./generateuser.component.scss']
})
export class GenerateuserComponent implements OnInit {
  constructor(private Signup: SignupService,
    private router:Router) { }

  createUsers: CreateUsers = new CreateUsers

  ngOnInit() {
    this.getEmployeesdata();
  }

  getEmployeesdata() {
    this.Signup.getData().subscribe((res:any) => {
      this.createUsers = res;
    });
  }

  insertData() {
    this.Signup.insertData(this.createUsers).subscribe(res => {
      this.getEmployeesdata();
      this.router.navigate(['login'])
    });
  }
  CreateUser: boolean = true;



}
