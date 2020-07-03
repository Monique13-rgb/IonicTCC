import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs';
import { FirestorePalestrantesProvider } from '../../providers/firestore-palestrantes/firestore-palestrantes';
import { Evento } from '../../models/evento.interface';
import { Palestrante } from '../../models/palestrante.interface';

@IonicPage()
@Component({
  selector: 'page-palestrantes',
  templateUrl: 'palestrantes.html',
})
export class PalestrantesPage {
  idEvento: string;
  public evento: Evento;
  public palestrantes: Observable<Palestrante[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public firestorepalestrantesProvider: FirestorePalestrantesProvider) {}

  
  ionViewDidLoad() {
    this.palestrantes = this.firestorepalestrantesProvider.getAll().valueChanges();
  } 
  voltar(){
    this.navCtrl.push('HomeEventoPage');
  }
}
