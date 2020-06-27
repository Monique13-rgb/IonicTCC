import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Evento } from '../../app/models/evento.iterface';
import { Palestrante } from '../../app/models/palestrante.iterface';
import { Observable } from 'rxjs';
import { FirestorePalestrantesProvider } from '../../providers/firestore-palestrantes/firestore-palestrantes';
import { HomeEventoPage } from '../home-evento/home-evento';

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
    this.idEvento = this.navParams.get('idEvento');
    console.log(this.idEvento);
    this.palestrantes = this.firestorepalestrantesProvider.getAll(this.idEvento).valueChanges();
    console.log(this.idEvento);
  } 
  voltar(){
    this.navCtrl.push(HomeEventoPage);
  }
}
