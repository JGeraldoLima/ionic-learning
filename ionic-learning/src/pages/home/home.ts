import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';

import { ToastProvider } from './../../providers/toast-provider';
import { CountryProvider } from '../../providers/country-provider'

import { City } from './../../models/city';
import { CityDetailsPage } from "../city-details/city-details";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  country: String;
  cities: City[];

  constructor(private countryService: CountryProvider,
    private toastService: ToastProvider,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController) { }

  searchCountry() {
    let loader = this.loadingCtrl.create({
      content: "Loading \"" + this.country + "\" most populous cities..."
    });
    loader.present();
    this.countryService.getCitiesByCountry(this.country).subscribe(cities => {
      this.cities = cities.map(data => {
        return <City>{
          id: data.geonameId,
          name: data.name,
          country: data.countryName,
          countryCode: data.countryCode,
          latitude: data.lat,
          longitude: data.lng,
          population: data.population
        };
      });

      loader.dismiss();
      this.toastService.showToast(this.cities.length + ' cities found!', 3000, false);
    });
  }

  openCityDetails(event, city) {
    this.navCtrl.push(CityDetailsPage, {
      item: city
    });
  }
}