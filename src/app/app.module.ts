import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//maps


//Modulo Personalizado
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
