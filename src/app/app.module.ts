import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppSocketIoService } from './app.socket-io.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppSocketIoService],
  bootstrap: [AppComponent]
})
export class AppModule {
	constructor(private appSocketIoService: AppSocketIoService) {

	  
	}
}
