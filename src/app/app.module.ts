import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
        
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
