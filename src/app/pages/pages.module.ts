import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { EventPageComponent } from './event-page/event-page.component';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { PagesRoutingModule } from './pages.routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        HomePageComponent,
        TaskPageComponent,
        EventPageComponent,
        SchedulePageComponent,
        SettingsPageComponent,
        ProfilePageComponent,
        PagesComponent
    ],
    exports: [
        HomePageComponent,
        TaskPageComponent,
        EventPageComponent,
        SchedulePageComponent,
        SettingsPageComponent,
        ProfilePageComponent
    ],
    imports: [
        CommonModule, PagesRoutingModule,
        SharedModule
    ]
})
export class PagesModule { }
