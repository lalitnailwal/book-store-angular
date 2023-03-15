import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './public-components/about-us/about-us.component';
import { HowItWorksComponent } from './public-components/how-it-works/how-it-works.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './public-components/home/home.component';
import { CounterService } from './shared/services/counter.service';
import { Counter2Service } from './shared/services/counter2.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowItWorksComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: Counter2Service, useExisting: CounterService },
    CounterService,
    { provide: 'appTitle', useValue: {title: 'this is title', description: 'this is the title description'} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
