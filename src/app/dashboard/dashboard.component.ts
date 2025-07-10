import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, subscribeOn } from 'rxjs';
import { LogonComponent } from '../logon/logon.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  taskAllocationDetails$ !: Observable<any>
  
  constructor(
    private http: HttpClient,
    private router:Router,   
    private logon : LogonComponent
  )
  {  }
 
//  showTask:boolean=false;
// searchText: any;

 
  //  Tasks(){
  //   this.showTask=!this.showTask
  //   this.showUser=false
    
  //  }
  showTaskAllocation:boolean=false
  showUser:boolean =false;
  userdetails$!:Observable<any>
  taskDetails$!:Observable<any>

   viewData(e:any) {
    console.log('Event Emitter-->',e);
    this.router.navigate(['viewdetails/'+e.data.id])
  }
  Logout(){
    this.logon.clearLocalStorage()
    this.router.navigate(['login'])
    
  }

  getuser() {
    let request$=this.http.get("http://localhost:8080/user");
    request$.subscribe((res: any) => {
      console.log('res-->',res);
      this.showUser = true;
      this.showTaskAllocation= false;
      this.userdetails$= of(res.data);
    })
  }
  getTask(){
    let request$=this.http.get("http://localhost:8080/taskAllocation");
    request$.subscribe((res: any) => {
      console.log('res-->',res);
      this.showTaskAllocation = true;
      this.showUser = false;
      this.taskDetails$= of(res.data);
    })
  }
  resetData(){
    this.showUser=false
    this.showTaskAllocation=false
  }
  searchText=''

}
