import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../User';
import { LoginService } from '../LoginService';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.scss']
})
export class LogonComponent {
  loginForm : any= FormGroup;
  user  = new User();
  constructor(
    private loginService :LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.initializeForm();
    this.loginForm.valueChanges.subscribe((res : any)=> {
      console.log('value change event -->', res);
    })
  }
  initializeForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: new FormControl('', [Validators.minLength(2), Validators.maxLength(8)])
    });
  }
  // formSubmit() {
  //   console.log(this.loginForm);
  //   let formData = this.loginForm.value;
  //   console.log(this.loginForm.get('UserName'));
  //   if (formData.userName != '' && formData.password != '') {
  //     this.router.navigate(['agent/dashboard']);
  //   }
  // }

  clearLocalStorage(){
    localStorage.removeItem("data")
  }
newUser(){
  this.router.navigate(['signup'])
}

  userLogin(){
  
    let payload = this.loginForm.value;
  
    let request$=this.loginService.loginUser(payload);
   request$ .subscribe ((resultData: any) => {
      console.log(resultData);
      let  message:String =resultData.message
      
      
      if(resultData.auth){
        localStorage.setItem("data",JSON.stringify(resultData)) 
        setTimeout(this.clearLocalStorage,10000)

        console.log(resultData.auth)
        this.router.navigate(['dashboard'])
      }
      else {
        alert(message)
        //console.log(auth)
      }
          
      });
      
}
}
  


