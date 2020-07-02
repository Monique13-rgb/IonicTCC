import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { Evento } from '../../app/models/evento.iterface';
import { Observable } from 'rxjs/Observable';
import { OpenPage } from '../open/open';

@IonicPage()
@Component({
  selector: 'page-home-evento',
  templateUrl: 'home-evento.html',
})
export class HomeEventoPage {
  public eventos: Observable<Evento[]>;
  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public firestoreProvider: FirestoreProvider) {
  }

  ionViewDidLoad() {
    this.eventos = this.firestoreProvider.getEventos().valueChanges();
  }
  navegarProgramacao(evento: Evento): void {
    this.navCtrl.push("ProgramacaoEventoPage",evento.id);
    
  }
  irParaPalestrantes(evento: Evento): void {
    this.navCtrl.push("PalestrantesPage",evento.id);
    }
  voltar(){
    this.navCtrl.push(OpenPage);
  }
}
