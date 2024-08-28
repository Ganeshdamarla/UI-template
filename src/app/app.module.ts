import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoWebpageComponent } from './demo-webpage/demo-webpage.component';
import { WebpageComponent } from './webpage/webpage.component'
// import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoWebpageComponent,
    WebpageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
