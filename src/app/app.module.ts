import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IctTestComponent } from './component/ict-test/ict-test.component';
import { IctTestService } from './Service/ict-test.service';


@NgModule({
  declarations: [
    AppComponent,
    IctTestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    IctTestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
