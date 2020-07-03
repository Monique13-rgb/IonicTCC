import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { FirestoreProgramacaoProvider } from '../../providers/firestore-programacao/firestore-programacao';
import { Observable } from 'rxjs';
import { Programacao } from '../../models/programacao.interface';
import { Evento } from '../../models/evento.interface';
@IonicPage()
@Component({
  selector: 'page-programacao-evento',
  templateUrl: 'programacao-evento.html',
})
export class ProgramacaoEventoPage {
  prog: Observable<Programacao[]>;
  idEvento: string;
  evento: Evento;
  id: string;
  public dataInicio: string = new Date().toDateString();
  public dataFinal: string = new Date().toDateString();

  

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public firestoreprogramacaoProvider: FirestoreProgramacaoProvider) {
     
  }
    ionViewDidLoad() {
    this.prog = this.firestoreprogramacaoProvider.getAll().valueChanges();

    }

  voltarHome() {
    this.navCtrl.push("HomeEventoPage");
  }
  voltar(){
    this.navCtrl.pop();
  }
}

