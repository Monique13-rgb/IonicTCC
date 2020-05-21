import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Programacao } from '../../app/models/programacao.interface';
import { Evento } from '../../app/models/evento.iterface';

@Injectable()
export class FirestoreProgramacaoProvider {

  constructor(public firestore: AngularFirestore) {
  }
  getprogramacao():AngularFirestoreCollection<Programacao> {
    return this.firestore.collection('programação');
  }
}
