import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LogonComponent } from './logon/logon.component';
import { ShadowComponent } from './shadow/shadow.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import {HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { GenerateuserComponent } from './generateuser/GenerateuserComponent';
import { DataComponent } from './data/data.component';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';
import { LoginService } from './LoginService';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { SignupService } from './signup.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ButtonModule } from 'primeng/button';




@NgModule({
  declarations: [
    AppComponent,
    LogonComponent,
    ShadowComponent,
    ListComponent,
    SearchPipe,
    GenerateuserComponent ,
    DashboardComponent,
    DataComponent,
    ViewDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    HttpClientModule
   
  ],
  providers: [AppService, LoginService,LogonComponent,SignupService],
  bootstrap: [AppComponent],
  exports:[SearchPipe]
})
export class AppModule { }
