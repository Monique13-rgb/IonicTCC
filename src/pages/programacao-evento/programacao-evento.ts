import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Programacao } from '../../models/programacao.model';

import { FirestoreProgramacaoProvider } from '../../providers/firestore-programacao/firestore-programacao';
import { Evento } from '../../models/evento.model';
import { Observable } from 'rxjs';
@IonicPage()
@Component({
  selector: 'page-programacao-evento',
  templateUrl: 'programacao-evento.html',
})
export class ProgramacaoEventoPage {
  idEvento: any;
  public evento: Evento;
  public programacoes:Observable<Programacao[]>;
  public dataInicio: string = new Date().toDateString();
  public dataFinal: string = new Date().toDateString();

  

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public firestoreprogramacaoProvider: FirestoreProgramacaoProvider) {
  }

  
  ionViewDidLoad() {
    this.idEvento = this.navParams.get('idEvento');
    console.log(this.idEvento);
    this.programacoes = this.firestoreprogramacaoProvider.getAll(this.idEvento).valueChanges();
    console.log(this.idEvento);
    }

  voltarHome() {
    this.navCtrl.push("HomeEventoPage");
  }
  voltar(){
    this.navCtrl.pop();
  }
}

