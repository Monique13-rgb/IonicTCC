import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Evento } from '../../models/evento.interface';

@Injectable()
export class FirestoreProvider {

private eventsCollection: AngularFirestoreCollection<Evento>

  constructor(public firestore: AngularFirestore, public afs: AngularFirestore) {
   
  }
  getObservable(): Observable<Evento[]> {
    const ref = this.firestore
      .collection<Evento>("eventos", (ref) => ref.orderBy("nomeEvento"));
    return ref.valueChanges();
  }

  getEvents(){
    const ref = this.firestore.collection<Evento>("eventos");
    const array = ref.snapshotChanges().map(changes =>{
      return changes.map(a => {
        const data = a.payload.doc.data() as Evento;
        const id = a.payload.doc.id;
        return { id, ...data };
    });
  })
  array.forEach(data => {
    console.log(data);
  })
}

}
