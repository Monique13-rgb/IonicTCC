import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Evento } from '../../app/models/evento.iterface';

@Injectable()
export class FirestoreProvider {

  constructor(public firestore: AngularFirestore) {
  }
 getEventos(): AngularFirestoreCollection<Evento> {
    return this.firestore.collection('eventos');
  }
  
}
