import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

import { ILocation } from "./location";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  locUrl: string = "assets/loc.json";
  constructor(private http: HttpClient) { }

  getLocations(): Observable<ILocation> {
    return this.http.get<ILocation>(this.locUrl).pipe(
      tap(data => console.log('Loc: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);

  }
}