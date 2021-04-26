import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { Content } from './content';
import { map } from 'rxjs/operators';

@Injectable()
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Content>;
  contents: Observable<Content[]>;


  constructor(public afs: AngularFirestore) { 
    //this.items = this.afs.collection('items').valueChanges();

    this.itemsCollection = this.afs.collection('content');

    this.contents = this.itemsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Content;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getItems(){
    return this.contents;
  }

 
}