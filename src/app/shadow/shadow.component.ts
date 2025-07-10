import { Component, OnInit } from '@angular/core';

interface SalesDetails{
  productname:String
    productquantity:number
    productMade:String
}

interface PaymentDetails
{
  Price:number
    HolderName:String
    HolderMobile:number
    status:string
}

@Component({
  selector: 'app-shadow',
  templateUrl: './shadow.component.html',
  styleUrls: ['./shadow.component.scss']
})
export class ShadowComponent implements OnInit{

  constructor(){
    console.log("constructor loaded")
  }
  
    ngOnInit(): void {
     console.log("On it loaded")
    //  this.data=this.data.map((d  :number)=> d*2)
    }
    title = 'employeerepo';
  
  showSales :boolean = false;
  showPayment:boolean = false;
  paymentData1:boolean = false;
  salesData1:boolean=false
  
  Sales(){
    this.showSales=!this.showSales;
    this.showPayment=false;
  }
  
  Payment(){
    this.showPayment=!this.showPayment;
    this.showSales=false;
  }
  resetData(){
    this.showSales=false
    this.showPayment=false
  
  }
  salesDetails:SalesDetails[]=[
    {
      productname:"Lenovo",
      productquantity:20,
      productMade:"China"
    },{
      productname:"Rin Powder",
      productquantity:23,
      productMade:"India"
    },{
      productname:"Tomato",
      productquantity:12,
      productMade:"Coimbatore"
    }
  ];
  payment:PaymentDetails[]=[
    {
      Price:230,
      HolderName:"Kavyaa Ganesan",
      HolderMobile:9361210718,
      status:"Paid"
    },
    {
      Price:210,
      HolderName:"Sabaris Ganesan",
      HolderMobile:9865540849,
      status:"Inprogress"
    },{
      Price:300,
      HolderName:"Ravina Chidambaram",
      HolderMobile:9994210292,
      status:"UnPaid"
    }
  ]
 
  salesData!:SalesDetails;
     getSalesDetails(sales:SalesDetails){
      this.salesData = sales;
      this.salesData1=!this.salesData1
      this.paymentData1=false
     }
  paymentData!:PaymentDetails;
  getPaymentDetails(payments:PaymentDetails){
    this.paymentData=payments;
    this.paymentData1=!this.paymentData1;
    this.salesData1=false
  }

 
  
  
  
  
  searchText=''
  
  
  

}
