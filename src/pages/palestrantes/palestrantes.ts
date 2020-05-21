import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OpenPage } from '../open/open';

@IonicPage()
@Component({
  selector: 'page-palestrantes',
  templateUrl: 'palestrantes.html',
})
export class PalestrantesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  
  }
  voltar(){
    this.navCtrl.push(OpenPage);
  }
  gotoPotato(){
    this.navCtrl.push("ProgramacaoEventoPage");
  }
}
