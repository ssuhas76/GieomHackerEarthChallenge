import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import {KickStarterListComponent} from './kickstarter/kickstarter-list.component';
import {KickStarterDetailComponent} from './kickstarter/kickstarter-detail.component'
import {KickStarterFilterPipe} from './kickstarter/kickstarter-filter.pipe';

@NgModule({
  imports: [ BrowserModule,FormsModule, HttpModule, RouterModule.forRoot([
    {path: 'projects', component : KickStarterListComponent},
    {path: 'project/:id', component: KickStarterDetailComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: '', redirectTo: 'welcome', pathMatch:'full'},
    {path: '**', redirectTo: 'welcome', pathMatch:'full'}
  ]) ],
  declarations: [ AppComponent, WelcomeComponent,KickStarterListComponent, KickStarterDetailComponent, KickStarterFilterPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
