import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Programacao } from '../../app/models/programacao.interface';
import { Evento } from '../../app/models/evento.iterface';
import 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class FirestoreProgramacaoProvider {

  constructor(public firestore: AngularFirestore) {
  }
  getAll( idEvento: string ):Observable<Programacao> {
    return this.firestore.collection('programação').where("idEvento").get();
    }
}
