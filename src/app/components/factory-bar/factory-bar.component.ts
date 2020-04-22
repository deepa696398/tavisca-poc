import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-factory-bar',
  templateUrl: './factory-bar.component.html',
  styleUrls: ['./factory-bar.component.scss']
})
export class FactoryBarComponent implements OnInit {
  activeBar = 'flight';
  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
    private route: Router,
  ) {
  }

  ngOnInit(): void {
    // this.getFlight();
  }
  async getFlight() {
    // this.viewContainerRef.clear();
    // const { FlightsComponent } = await import('../flights/flights.component');
    // this.viewContainerRef.createComponent(
    //   this.cfr.resolveComponentFactory(FlightsComponent)
    // );
    this.route.navigate(['/flight']);
    this.activeBar = 'flight';
  }

  async getHotels() {
    // this.viewContainerRef.clear();
    // const { HotelsComponent } = await import('../hotels/hotels.component');
    // this.viewContainerRef.createComponent(
    //   this.cfr.resolveComponentFactory(HotelsComponent)
    // );
    this.route.navigate(['/hotel']);
    this.activeBar = 'hotel';
    sessionStorage.removeItem('flightData');
    sessionStorage.removeItem('searchFlight');
  }
  async getCars() {
    // this.viewContainerRef.clear();
    // const { CarsComponent } = await import('../cars/cars.component');
    // this.viewContainerRef.createComponent(
    //   this.cfr.resolveComponentFactory(CarsComponent)
    // );
    this.route.navigate(['/cars']);
    this.activeBar = 'cars';
    sessionStorage.removeItem('flightData');
    sessionStorage.removeItem('searchFlight');
  }
  async getActivities() {
    this.route
    // this.viewContainerRef.clear();
    // const { ActivitiesComponent } = await import('../activities/activities.component');
    // this.viewContainerRef.createComponent(
    //   this.cfr.resolveComponentFactory(ActivitiesComponent)
    // );
    this.route.navigate(['/activities']);
    this.activeBar = 'activities';
    sessionStorage.removeItem('flightData');
    sessionStorage.removeItem('searchFlight');
  }

}
