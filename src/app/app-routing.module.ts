import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightsComponent } from './components/flights/flights.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { CarsComponent } from './components/cars/cars.component';
import { ActivitiesComponent } from './components/activities/activities.component';
const routes: Routes = [
  { path: '', redirectTo: '/flight', pathMatch: 'full' },
  { path: 'flight', component: FlightsComponent },
  { path: 'hotel', component: HotelsComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'activities', component: ActivitiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
