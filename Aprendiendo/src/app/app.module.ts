import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HolaMundoComponent } from './componentes/hola-mundo/hola-mundo.component';
import { UserComponent } from './componentes/user/user.component';

import { DataBDService } from './data-bd.service';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataBDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
