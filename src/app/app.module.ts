import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApplicationFormComponent } from './application-form/application-form.component';

@NgModule({
  declarations: [
  ApplicationFormComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ApplicationFormComponent]
})
export class AppModule { }
