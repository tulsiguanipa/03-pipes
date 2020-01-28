import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { CapitalizadoPipe } from './pipes/capitalizado.pipe'



import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { DonseguroPipe } from './pipes/donseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DonseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide:LOCALE_ID, useValue: "es"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
