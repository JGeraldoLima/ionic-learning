import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocialSharing } from '@ionic-native/social-sharing';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CityDetailsPage } from '../pages/city-details/city-details';
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage'; //local storage

import { CountryProvider } from '../providers/country-provider'
import { ToastProvider } from '../providers/toast-provider';

import { OrderBy } from "../pipes/order-by"

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CityDetailsPage,
    AboutPage,
    OrderBy
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule,
    IonicStorageModule.forRoot() // local storage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CityDetailsPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CountryProvider,
    ToastProvider,
    SocialSharing,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
