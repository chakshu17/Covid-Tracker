import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule} from '@angular/common/http';

import { MaterialModuleModule } from '../app/modules/material-module/material-module.module';
import { HeaderComponent } from './Navigation/header/header.component';
import { SidenavComponent } from './Navigation/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';
import { StateWiseComponent } from './pages/state-wise/state-wise.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SidenavComponent, HomeComponent, StateWiseComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModuleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
