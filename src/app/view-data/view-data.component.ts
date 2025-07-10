import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss']
})
export class ViewDataComponent {
  detailsFormGroup!:FormGroup;
  constructor(
    private fb:FormBuilder,
    private http:HttpClient,
    private appService:AppService,
    private router:Router
  ){
    
  }
  ngOnInit():void{
    this.detailsFormGroup=this.fb.group(
      { id:new FormControl({value:'',disabled:true}),
        // task_id:[''],
        // developerid:[''],
        // assignedby:[''],
        status:['']
        
      });

      this.appService.getTaskDetails().subscribe((res:any)=>{
        console.log('app details -- >',res);
        this.detailsFormGroup.patchValue({
          
          id:res.id,
          // task_id:res.task_id,
          // developerid:res.developerid,
          // assignedby:res.assignedby,
          status:res.status
        })
      })
  }
  onSubmit(){
    console.log('on submit -->',this.detailsFormGroup.value);
    let request$ = this.http.put("http://localhost:8080/task/"+this.detailsFormGroup.getRawValue().id,this.detailsFormGroup.getRawValue());
    request$.subscribe((res :any) =>{
      console.log("res---->",res)
      this.router.navigate(['dashboard'])
    })
  }



}
