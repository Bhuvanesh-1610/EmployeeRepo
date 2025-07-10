import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./User";
import { Observable } from "rxjs";

@Injectable()
export class LoginService {
    constructor(private httpClient:HttpClient){
        // request$.subscribe((res:any)=>{
        //     if(res.auth){
        //         localStorage.setItem("user","12");  
        //         this.router.navigate("next page url");
        //     }

    }
    loginUser(user: User):Observable<object>{
        console.log(user)
        return this.httpClient.post("http://localhost:8080/login",user)
    }
}