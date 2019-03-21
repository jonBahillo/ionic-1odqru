import { Component } from '@angular/core';
import { NavController, LoadingController  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }
presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/img/gif.gif" />',
      duration: 5000
    });

    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });

    loading.present();
  }
}
