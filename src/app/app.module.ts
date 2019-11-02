import { BrowserModule} from '@angular/platform-browser';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//  import {CustomerComponent} from './customer/customer.component';
 import {FormsModule} from '@angular/forms';
 import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule, MatFormFieldModule,MatOptionModule,MatCheckboxModule } from '@angular/material';
// import { ServersComponent } from './servers/servers.component';
import{MatTableModule,MatSidenavModule,MatButtonModule,MatNativeDateModule,MatIconModule,
MatListModule,MatToolbarModule} from '@angular/material';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import{SearchPipe} from './search.pipe';
  const routes: Routes = [
//    {path:'customer',component:CustomerComponent}
 ];

@NgModule({
  declarations: [
    AppComponent, NewCmpComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,ReactiveFormsModule,FormsModule,MatTableModule,MatSidenavModule,
    AppRoutingModule,MatFormFieldModule,MatCheckboxModule,MatOptionModule,MatInputModule,MatButtonModule,MatNativeDateModule,MatIconModule,
    MatListModule,MatToolbarModule
  ],
  // exports:[FormTemplateComponent],
  entryComponents:[],
  providers: [SearchPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
