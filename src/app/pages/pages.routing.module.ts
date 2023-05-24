import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { EventPageComponent } from './event-page/event-page.component';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'pages', component: PagesComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent },
      { path: 'tasks', component: TaskPageComponent },
      { path: 'events', component: EventPageComponent },
      { path: 'schedule', component: SchedulePageComponent },
      { path: 'settings', component: SettingsPageComponent },
      { path: 'profile', component: ProfilePageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
