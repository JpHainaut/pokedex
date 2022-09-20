import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainlayerComponent } from './layout/mainlayer/mainlayer.component';
import { HeaderComponent } from './header/header.component';
import { RechercheComponent } from './layout/recherche/recherche.component';
import { MainScreenComponent } from './layout/main-screen/main-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MainlayerComponent,
    HeaderComponent,
    RechercheComponent,
    MainScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
