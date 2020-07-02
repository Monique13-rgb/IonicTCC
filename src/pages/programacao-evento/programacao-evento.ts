import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { FirestoreProgramacaoProvider } from '../../providers/firestore-programacao/firestore-programacao';
import { Observable } from 'rxjs';
import { Evento } from '../../app/models/evento.iterface';
import { Programacao } from '../../models/programacao.interface';
@IonicPage()
@Component({
  selector: 'page-programacao-evento',
  templateUrl: 'programacao-evento.html',
})
export class ProgramacaoEventoPage {
  prog: Observable<Programacao[]>;
  idEvento: string;
  evento: Evento;
  public dataInicio: string = new Date().toDateString();
  public dataFinal: string = new Date().toDateString();

  

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public firestoreprogramacaoProvider: FirestoreProgramacaoProvider) {
  }

  
  ionViewDidLoad() {
    this.idEvento = this.navParams.get('idEvento');
    console.log(this.idEvento);
    this.prog = this.firestoreprogramacaoProvider.getAll(this.idEvento).valueChanges();
    }

  voltarHome() {
    this.navCtrl.push("HomeEventoPage");
  }
  voltar(){
    this.navCtrl.pop();
  }
}

