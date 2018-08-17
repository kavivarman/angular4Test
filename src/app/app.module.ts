import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationListComponent } from './application-list/application-list.component';
import { Route } from '@angular/compiler/src/core';
import { AppComponentComponent } from './app-component/app-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'applicationForm', pathMatch: 'full'},
  { path: 'applicationForm', component: ApplicationFormComponent},
  { path: 'applicationList', component: ApplicationListComponent },
  { path: '**', redirectTo: 'applicationForm', pathMatch: 'full'}];
@NgModule({
  declarations: [
  ApplicationFormComponent,
  ApplicationListComponent,
  AppComponentComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { enableTracing: true, useHash: true }),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponentComponent],
  exports: [ RouterModule ]
})
export class AppModule { }
