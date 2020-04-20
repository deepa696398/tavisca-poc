import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-factory-bar',
  templateUrl: './factory-bar.component.html',
  styleUrls: ['./factory-bar.component.scss']
})
export class FactoryBarComponent implements OnInit {
  activeBar = 'flight';
  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {
  }

  ngOnInit(): void {
    this.getFlight();
  }
  async getFlight() {
    this.viewContainerRef.clear();
    const { FlightsComponent } = await import('../flights/flights.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(FlightsComponent)
    );
    this.activeBar = 'flight';
  }

  async getHotels() {
    this.viewContainerRef.clear();
    const { HotelsComponent } = await import('../hotels/hotels.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(HotelsComponent)
    );
    this.activeBar = 'hotel';
    sessionStorage.removeItem('flightData');
    sessionStorage.removeItem('searchFlight');
  }
  async getCars() {
    this.viewContainerRef.clear();
    const { CarsComponent } = await import('../cars/cars.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(CarsComponent)
    );
    this.activeBar = 'cars';
    sessionStorage.removeItem('flightData');
    sessionStorage.removeItem('searchFlight');
  }
  async getActivities() {
    this.viewContainerRef.clear();
    const { ActivitiesComponent } = await import('../activities/activities.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(ActivitiesComponent)
    );
    this.activeBar = 'activities';
    sessionStorage.removeItem('flightData');
    sessionStorage.removeItem('searchFlight');
  }

}
