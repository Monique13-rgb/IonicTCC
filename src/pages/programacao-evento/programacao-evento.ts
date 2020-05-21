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
  idEvento: string;
  public evento: Evento;
  public prog: Observable<Programacao[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public firestoreprogramacaoProvider: FirestoreProgramacaoProvider) {
    this.evento = this.navParams.get('eventos');
  }
  ionViewDidLoad() {
    this.prog = this.firestoreprogramacaoProvider.getprogramacao().valueChanges();
  }


  goToPalestrantes() {
    this.navCtrl.push("PalestrantesPage");
  }
  voltarHome() {
    this.navCtrl.push("HomeEventoPage");
  }
  voltar(){
    this.navCtrl.pop();
  }
}
