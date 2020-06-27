import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Evento } from '../../app/models/evento.iterface';
import { Programacao } from '../../app/models/programacao.interface';
import { Observable } from 'rxjs/Observable';
import { FirestoreProgramacaoProvider } from '../../providers/firestore-programacao/firestore-programacao';

@IonicPage()
@Component({
  selector: 'page-programacao-evento',
  templateUrl: 'programacao-evento.html',
})
export class ProgramacaoEventoPage {
  idEvento: any;
  public evento: Evento;
  public programacoes: Observable<Programacao[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public firestoreprogramacaoProvider: FirestoreProgramacaoProvider) {}

  
  ionViewDidLoad() {
    this.idEvento = this.navParams.get('idEvento');
    this.programacoes = this.firestoreprogramacaoProvider.getprogramacao(this.idEvento).valueChanges();
    console.log(this.idEvento);
  }
 
  voltarHome() {
    this.navCtrl.push("HomeEventoPage");
  }
  voltar(){
    this.navCtrl.pop();
  }
}

