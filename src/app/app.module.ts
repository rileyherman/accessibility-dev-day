import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { TeamPageComponent } from './routes/team-page/team-page.component';
import { TeamComponent } from './components/team/team.component';
import { FixtureComponent } from './components/fixture/fixture.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutPageComponent } from './routes/about-page/about-page.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    TeamPageComponent,
    TeamComponent,
    FixtureComponent,
    AboutPageComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
