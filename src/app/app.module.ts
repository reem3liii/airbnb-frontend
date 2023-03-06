import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchPipe } from './Pipes/search.pipe';
import { HeaderComponent } from './Components/header/header.component';
import { PlaceModule } from './Components/place/place.module';
import { ErrorComponent } from './Components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    HeaderComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PlaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
