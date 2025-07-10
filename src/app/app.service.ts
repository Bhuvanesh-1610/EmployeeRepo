import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
    private taskData$=new BehaviorSubject<any>("")
  constructor() { }
  setTaskDetails(value:string){
    this.taskData$.next(value);
  }

  getTaskDetails(){
     return  this.taskData$.asObservable();
  }
  
        isAuthenticated() {
            let storageData=localStorage.getItem("data");
            console.log('localstorage data -->',storageData);
            if(storageData){
                let parsedData = JSON.parse(storageData);
                console.log('parsedData -->',parsedData);
                return (parsedData.auth);
            }else {
                return false;
            }
        }
    }