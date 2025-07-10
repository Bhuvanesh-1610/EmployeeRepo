import { NgModule, inject } from '@angular/core';
import { CanActivateFn, Router, RouterModule, Routes } from '@angular/router';
import { LogonComponent } from './logon/logon.component';
import { TableComponent } from './shared/table/table.component';
import { ShadowComponent } from './shadow/shadow.component';
import { GenerateuserComponent } from './generateuser/GenerateuserComponent';
import { AppService } from './app.service';
import { DataComponent } from './data/data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewDataComponent } from './view-data/view-data.component';

const routes: Routes = [
 
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
      path: "table",
      component: TableComponent
    },
    
    {
      path: "shadow",
      component: ShadowComponent
    },
    
    {
      path: "login",
      canActivate:[LoginAuth()],
      component: LogonComponent

    },
    {
      path:"signup",
      component: GenerateuserComponent
    },
    {
      path:"dashboard",
      
      component:DashboardComponent
    },
    {
      path:"data",
      canActivate:[isAuthenticated()],
      component:DataComponent
    },
    {
      path:"viewDetails/:task_id",
      canActivate:[isAuthenticated()],
      component:ViewDataComponent
    }
    
      
];


export function isAuthenticated(): CanActivateFn {
  return () => {
    const appService:AppService = inject(AppService);
    const router: Router = inject (Router);
    console.log('login check -->',appService.isAuthenticated());
    if (appService.isAuthenticated()) {
      return true;
    }else{
      router.navigate(['login']);
      return false; 
    }
  }
}
export function LoginAuth(): CanActivateFn{
return()=>{
  const appService:AppService=inject(AppService);
  const router:Router=inject(Router);
  console.log('login chcek -->',appService.isAuthenticated());
  if(appService.isAuthenticated()){
    router.navigate(['dashboard']);
    return false;
  }else{
    //  router.navigate(['login']);
    return true;
  }
}
}


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
