
import { isNgContainer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
interface EmpDetails
{
  name:string
  age:string
  class:string
}

interface Product{
  name:string
  description:string
  location:string
  Status:string

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

constructor(private http:HttpClient){


  console.log("constructor loaded")
}

  ngOnInit(): void {
   console.log("On it loaded")
  //  this.data=this.data.map((d  :number)=> d*2)
 

  }
  title = 'employeerepo';

  empDetails:EmpDetails[]=[{
    name:"bhuvanesh",
    class:"Angular",
    age:"5"
  },
{
  name:"naveen kumar",
  age:"2",
  class:"UKG"

},
{
  name:"Kavya",
  age:"1",
  class:"LKG"
}]

product :Product[]=[{
  name:"Old Monk",
  description:"Its good for health",
  location:"Wine shops",
  Status:"sold out"
},
{
  name:"Rum",
  description:"Its definitely good",
  location:"selected wineshops only",
  Status:"available"

}]

employeeDetails !: EmpDetails;

getEmployeeDetails(data:EmpDetails){
  this.employeeDetails=(data);
}





}
