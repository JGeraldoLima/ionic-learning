import { Platform, NavController, NavParams } from 'ionic-angular';

import { Component } from '@angular/core';

import { SocialSharing } from '@ionic-native/social-sharing';

import { ToastProvider } from './../../providers/toast-provider';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toastService: ToastProvider,
    private socialSharing: SocialSharing,
    public platform: Platform) { }

  shareApp() {
    // TODO: refactor this on some more beautiful way!
    let appUrl = "";
    if (this.platform.is("android")) {
      appUrl = "https://github.com/JGeraldoLima"
    } else if (this.platform.is("windows")) {
      appUrl = "https://goo.gl/vLkbTu"
    } else {
      appUrl = "Not available for iOS yet, I'm not a rich guy :/"
    }

    this.socialSharing.share("Check out my app!", "", "", appUrl).then(() => {
      this.toastService.showToast("App shared successfully! Thank you :)", 3000, false);
    }).catch((error) => {
      this.toastService.showToast("I'm sorry, but something wrong happened: " + error +
        ". Try to share for yourself, send this link to a friend! " + appUrl, 25000, true);
    });;
  }
}
