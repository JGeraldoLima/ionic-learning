import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class ToastProvider {

  constructor(public toastCtrl: ToastController) {}

  showToast(msg, delay, showclose) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: delay,
      showCloseButton: showclose
    });
    toast.present();
  }
}
