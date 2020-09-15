import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoletinsComponent } from './boletins/boletins.component';
import { ClassificacaoComponent } from './classificacao/classificacao.component';

@NgModule({
  declarations: [
    AppComponent,
    BoletinsComponent,
    ClassificacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
