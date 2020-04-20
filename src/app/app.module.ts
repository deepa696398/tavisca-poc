import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FactoryBarComponent } from './components/factory-bar/factory-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FlightsComponent } from './components/flights/flights.component';
import { NumberDirective } from './_helper/numbers-only.directive';
import { AirPortNameDirective } from './_helper/airport-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    FactoryBarComponent,
    FooterComponent,
    HeaderComponent,
    FlightsComponent,
    NumberDirective,
    AirPortNameDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
