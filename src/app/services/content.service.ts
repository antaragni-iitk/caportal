import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

    private colName: string = environment.contentCollectionName;

    constructor(private afs: AngularFirestore) {}

    getArray(name: string) {
        return this.afs.doc(`${this.colName}/${name}`).valueChanges();
    }
}
