import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {ListarComponent} from './listar/listar.component'
import {AddComponent} from './add/add.component'
import { MenuComponent } from './menu/menu.component';
import {ApagarComponent}  from './apagar/apagar.component'

import { AppComponent } from './app.component';
import { AgendaService } from './add/agenda.service';
import { AgendaDService } from './apagar/agenda.service';
import { AgendaLService } from './listar/agenda.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { appRoutes } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddComponent,
    ApagarComponent,
    ListarComponent



  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [AgendaService,AgendaDService,AgendaLService],
  bootstrap: [AppComponent,ApagarComponent]
})
export class AppModule { }
