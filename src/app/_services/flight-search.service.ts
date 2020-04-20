import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';
// const configUrl = './_halper/flights.json';


@Injectable({ providedIn: 'root' })
export class FlightSearchService {
    data =[
        {
            "name": "IndiGo",
            "IATA": "6E",
            "date": "22/04/2020",
            "depTime": "04:20",
            "arrTime": "06:20",
            "duration": "2hrs",
            "catogry" : [
                {"price":"15000","class":"Basic"},
                {"price":"25000","class":"Main"},
                {"price":"3000","class":"Ecomony"}
            ],
            "availabeSeat": "30"
        },
        {
            "name": "GoAir",
            "IATA": "G8",
            "date": "22/04/2020",
            "depTime": "04:20",
            "arrTime": "06:20",
            "duration": "2hrs",
            "catogry" : [
                {"price":"25000","class":"Main"},
                {"price":"3000","class":"Ecomony"}
            ],
            "availabeSeat": "30"
        },
        {
            "name": "Air India",
            "IATA": "IX",
            "date": "22/04/2020",
            "depTime": "04:20",
            "arrTime": "06:20",
            "duration": "2hrs",
            "catogry" : [
                {"price":"25000","class":"Main"},
                {"price":"3000","class":"Ecomony"}
            ],
            "availabeSeat": "30"
        },
        {
            "name": "SpiceJet",
            "IATA": "SG",
            "date": "22/04/2020",
            "depTime": "04:20",
            "arrTime": "06:20",
            "duration": "2hrs",
            "catogry" : [
                {"price":"25000","class":"Main"},
                {"price":"3000","class":"Ecomony"}
            ],
            "availabeSeat": "30"
        },
        {
            "name": "AirAsia",
            "IATA": "I5",
            "date": "22/04/2020",
            "depTime": "04:20",
            "arrTime": "06:20",
            "duration": "2hrs",
            "catogry" : [
                {"price":"25000","class":"Main"},
                {"price":"3000","class":"Ecomony"}
            ],
            "availabeSeat": "30"
        },
        {
            "name": "IndiGo",
            "IATA": "6E",
            "date": "22/04/2020",
            "depTime": "04:20",
            "arrTime": "06:20",
            "duration": "2hrs",
            "catogry" : [
                {"price":"25000","class":"Main"},
                {"price":"3000","class":"Ecomony"}
            ],
            "availabeSeat": "30"
        },
        {
            "name": "IndiGo",
            "IATA": "6E",
            "depTime": "04:20",
            "arrTime": "06:20",
            "duration": "2hrs",
            "catogry" : [
                {"price":"25000","class":"Main"},
                {"price":"3000","class":"Ecomony"}
            ],
            "availabeSeat": "30"
        },
        {
            "name": "IndiGo",
            "IATA": "6E",
            "date": "22/04/2020",
            "depTime": "04:20",
            "arrTime": "06:20",
            "duration": "2hrs",
            "catogry" : [
                {"price":"25000","class":"Main"},
                {"price":"3000","class":"Ecomony"}
            ],
            "availabeSeat": "30"
        },
        {
            "name": "IndiGo",
            "IATA": "6E",
            "date": "22/04/2020",
            "depTime": "04:20",
            "arrTime": "06:20",
            "duration": "2hrs",
            "catogry" : [
                {"price":"25000","class":"Main"},
                {"price":"3000","class":"Ecomony"}
            ],
            "availabeSeat": "30"
        },
        {
            "name": "IndiGo",
            "IATA": "6E",
            "date": "22/04/2020",
            "depTime": "04:20",
            "arrTime": "06:20",
            "duration": "2hrs",
            "catogry" : [
                {"price":"25000","class":"Main"},
                {"price":"3000","class":"Ecomony"}
            ],
            "availabeSeat": "30"
        }
    ]
    constructor(private http: HttpClient) {
    }
    searchResult() {
        sessionStorage.setItem("flightData",JSON.stringify(this.data));
    }
    getResult(data:any) {
        return sessionStorage.getItem("flightData");
    }






    throwError(e) {
        console.log(e)
        alert(e.error);
        return e;
    }
}