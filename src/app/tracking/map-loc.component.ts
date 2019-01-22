import { Component, OnInit } from "@angular/core";
import { ILocation, ICoord } from "./location";
import { GetDataService } from "./get-data.service";
import {Observable,interval} from 'rxjs'

@Component({
    selector: 'map-loc',
    templateUrl: './map-loc.component.html',
    styleUrls: ['./map-loc.component.css']

})
export class MapLocComponent implements OnInit{
    
    pageTitle: string = 'Tracker';
    locations: ILocation;
    coords: ICoord[] = [{
        'lat' : 10.0118,
        'lon' : 76.3664 
    }];
    lat: Number[];
    lng: Number[];
    lat_init: Number = 10.0118;
    lng_init: Number = 76.3664;
    zoom : Number = 14;
    
    
    constructor(private getDataService: GetDataService) {
        console.log("Logging from constructor.");
    }

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
      }

    ngOnInit(): void {
        interval(2000).subscribe(a=> {this.getDataService.getLocations().subscribe(
            locations => {
               this.locations = locations;
               this.locations.location.forEach(item => {
                this.coords.push(locations.location[0]);
               });
              // console.log("coords array: "+this.coords);
               console.log("printing each lat and lon in coords")
               this.coords.forEach(element => { 
                this.lat_init = element.lat;
                this.lng_init = element.lon;
                   console.log(element.lat);
                   console.log(element.lon);
               });
               //debugger;
            }
        );})
        
    }
}