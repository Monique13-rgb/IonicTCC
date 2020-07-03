import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { FirestoreProvider } from '../../providers/firestore/firestore';

import { Observable } from 'rxjs/Observable';
import { OpenPage } from '../open/open';
import { Evento } from '../../models/evento.interface';


@IonicPage()
@Component({
  selector: 'page-home-evento',
  templateUrl: 'home-evento.html',
})
export class HomeEventoPage {
  public eventos: Observable<Evento[]>;
  public evento: Evento;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public firestoreProvider: FirestoreProvider) { }


  ionViewDidLoad() {
    this.eventos = this.firestoreProvider.getObservable();
  }

  navegarProgramacao(evento: Evento): void {
    this.navCtrl.push("ProgramacaoEventoPage",{idEvento:evento.id});

  }
  irParaPalestrantes(evento: Evento): void {
    this.navCtrl.push("PalestrantesPage", {idEvento:evento.id});
  }
  voltar() {
    this.navCtrl.push(OpenPage);
  }

 
}
