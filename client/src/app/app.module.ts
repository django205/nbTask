import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule,routedComponents } from './app.routing';
import { ChapterListService } from './services/services';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
   routedComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ChapterListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
