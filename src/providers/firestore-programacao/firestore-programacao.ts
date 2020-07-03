import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Programacao } from '../../models/programacao.interface';


@Injectable()
export class FirestoreProgramacaoProvider {

  constructor(public firestore: AngularFirestore) {
  }
  getAll():AngularFirestoreCollection<Programacao> {
    return this.firestore.collection('programação');
    }
}
