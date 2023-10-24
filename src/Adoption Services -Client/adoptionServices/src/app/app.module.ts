import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainlandingpageComponent } from './mainlandingpage/mainlandingpage.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RolesComponent } from './roles/roles.component';
import { ApplicationdetailsComponent } from './applicationdetailsbuttons/applicationdetails.component';
import { ReadfaqComponent } from './readfaq/readfaq.component';
import { MainapplicationdetailsComponent } from './mainapplicationdetails/mainapplicationdetails.component';
import { ContactComponent } from './contact/contact.component';
import { CommunicationComponent } from './communication/communication.component';

@NgModule({
  declarations: [
    AppComponent,
    MainlandingpageComponent,
    MainheaderComponent,
    RolesComponent,
    ApplicationdetailsComponent,
    ReadfaqComponent,
    MainapplicationdetailsComponent,
    ContactComponent,
    CommunicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
