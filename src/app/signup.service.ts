import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUsers } from './CreateUsers';

@Injectable()
export class SignupService {

  constructor(private httpclient: HttpClient) { }

  getData(){
    return this.httpclient.get('http://localhost:8080/user');
  }

  insertData(data: CreateUsers){
    return this.httpclient.post('http://localhost:8080/user',data);
  }

}
