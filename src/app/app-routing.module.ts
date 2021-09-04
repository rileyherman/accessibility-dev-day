import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './routes/about-page/about-page.component';
import { AccessibilityPageComponent } from './routes/accessibility-page/accessibility-page.component';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { TeamPageComponent } from './routes/team-page/team-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'team/:teamId',
    component: TeamPageComponent,
  },
  {
    path: 'accessibility',
    component: AccessibilityPageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
