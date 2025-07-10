import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

interface userdetails{
  id:number;
  name:String;
  email:String;
  role:string;
}

interface taskAllocation{

  id :number,
  task_id:number,
  developerid:number
  assignedby:number
  assignedDate:number
  status:string
}
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {
  
  UserForm : any= FormGroup;
  
  
 
 
  constructor(
    private http : HttpClient ,
    
    private formBuilder: FormBuilder,
    private router: Router,
    private appService:AppService

  ){  
console.log("constructor loaded")
  }
@Input()showUser : boolean = true;
user:userdetails[]=[]
  @Input()id:number=0;
  @Input('userdatas$')   //@Input is used to give parent to child
  set userdatas(data$:Observable<any>){
    if(typeof data$==='undefined') {
      return;
    }
    data$.subscribe((res: any) => {
      console.log('child component data -->', res);
      this.user = res;
    })
  
  }
  @Output() detailsEmit=new EventEmitter();
  ngOnInit(): void {
    console.log('child copoennt id -->', this.id);
  }
  editData(data:any){
    this.detailsEmit.emit(data);
  }
//  for task Allocation

  task:taskAllocation[]=[]

  @Input()task_id:number=0;
  @Input('taskdatas$')   //@Input is used to give parent to child
  set taskData(data$:Observable<any>){
    if(typeof data$==='undefined') {
      return;
    }
    data$.subscribe((res: any) => {
      console.log('child component of task data -->', res);
      this.task = res;
    })
  
  }
  @Output() taskDetailsEmit=new EventEmitter();
 
  editTaskData(data:any){
    this.detailsEmit.emit({type:'task', data});
    this.appService.setTaskDetails(data);
    this.router.navigate(['viewDetails/' +  data.id])
  }

 searchText=''


  

  
 
}



