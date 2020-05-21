import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-open',
  templateUrl: 'open.html',
})
export class OpenPage {

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams) {

  }
  ionViewDidLoad() {}
  
  irparaHome(){
    this.navCtrl.push("HomeEventoPage");
  }
}
//