import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SizesService {

  constructor(private db: AngularFireDatabase) { }
    
  getAll(){
    return this.db.list('/size');
  }
}