import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ToastProvider } from '../providers/toast-provider';

const API_URL = 'http://api.geonames.org/searchJSON?username=jgeraldo&country=';

@Injectable()
export class CountryProvider {

  constructor(private http: Http, private toastService: ToastProvider) { }

  getCitiesByCountry(countryName: String) {
    return this.http.get(API_URL + countryName)
      .map(this.extractCities)
      .catch(this.handleError);
  }

  private extractCities(res: Response) {
    return res.json().geonames;
  }

  private handleError(err) {
    let error = 'Error: ' + JSON.stringify(err);
    this.toastService.showToast(error, 5000, false);
    return Observable.throw(error);
  }
}