import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Programacao } from '../../app/models/programacao.interface';

@Injectable()
export class FirestoreProgramacaoProvider {

  constructor(public firestore: AngularFirestore) {
  }
  getprogramacao(id: string):AngularFirestoreCollection<Programacao> {
    return this.firestore.collection('programação', ref => ref.where('idEvento', '==', id));
    }
}
