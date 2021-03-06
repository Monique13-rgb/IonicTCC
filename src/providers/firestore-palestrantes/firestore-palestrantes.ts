import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Palestrante } from '../../models/palestrante.interface';



@Injectable()
export class FirestorePalestrantesProvider {

  constructor(public firestore: AngularFirestore) {
  }
  getAll():AngularFirestoreCollection<Palestrante> {
    return this.firestore.collection('palestrantes');
    }
}
