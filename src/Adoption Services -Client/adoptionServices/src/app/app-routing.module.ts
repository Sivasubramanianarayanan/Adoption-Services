import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { MainlandingpageComponent } from './mainlandingpage/mainlandingpage.component';
import { ApplicationdetailsComponent } from './applicationdetailsbuttons/applicationdetails.component';
import { ReadfaqComponent } from './readfaq/readfaq.component';
import { MainapplicationdetailsComponent } from './mainapplicationdetails/mainapplicationdetails.component';
import { ContactComponent } from './contact/contact.component';
import { CommunicationComponent } from './communication/communication.component';

const routes: Routes = [
  //  { path: '', component: MainheaderComponent },
   { path: '', component: MainlandingpageComponent, },
   { path: 'roles', component: RolesComponent },
   { path: 'applicationdetails', component: ApplicationdetailsComponent, 
     children:[
      {     
        path: 'mainaplicationdeatials', component: MainapplicationdetailsComponent
      },
      {
         path:'readfaq',component:ReadfaqComponent
      },
      {
        path:'contact',component:ContactComponent
     },
     {
      path:'communication',component:CommunicationComponent
     },
     ] 
  
  },
   
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  


}
