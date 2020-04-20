import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { FlightSearchService } from 'src/app/_services/flight-search.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  flightSearchForm;
  submitted: boolean = false;
  loadding: boolean = false;
  classList = ['Economy', 'Basic', 'Main'];
  minDate = moment(new Date()).format('YYYY-MM-DD');
  resultData:[];
  constructor(private formBuilder: FormBuilder, private flightSearchService: FlightSearchService) { }

  ngOnInit(): void {
    this.flightSearchForm = this.formBuilder.group({
      departure: ['', [Validators.required, Validators.maxLength(50)]],
      destination: ['', [Validators.required, Validators.maxLength(50)]],
      departureDate: ['', [Validators.required]],
      returnDate: ['', [Validators.required]],
      travellers: ['', Validators.required],
      class: ['', Validators.required],
    });
    this.flightSearchService.searchResult();
  }
  get f() { return this.flightSearchForm.controls; }
  allowNumbersOnly(e) {
    let code = (e.which) ? e.which : e.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
      e.preventDefault();
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.flightSearchForm.invalid) {
      return;
    }
    this.loadding = true;
    this.submitted = false;
    const data = {
      "departure": this.flightSearchForm.value.departure,
      "destination": this.flightSearchForm.value.destination,
      "departureDate": this.flightSearchForm.value.departureDate,
      "returnDate": this.flightSearchForm.value.returnDate,
      "travellers": this.flightSearchForm.value.travellers,
      "class": this.flightSearchForm.value.class,
    }
    sessionStorage.setItem('searchFlight', JSON.stringify(data));
    const jsonData = this.flightSearchService.getResult(data);
    this.resultData = JSON.parse(jsonData);
  }
}
