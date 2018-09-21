import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product){
    return this.db.list('/product').push(product);
  }

  getAll(){
    return this.db.list('/product');
  }

  get(productId){
    return this.db.object('/product/'+productId);
  }

  update(productId, product){
    return this.db.object('/product/'+productId).update(product);
  }

  delete(productId,product){
    return this.db.object('/product/'+productId).remove();
  }

  sortByField(field, arr) {
		function sorted(a, b) {
			if (field == 'price') {
				if (a[field] < b[field])
					return -1;
				if (a[field] > b[field])
					return 1;
				return 0;
			}
			else {
				if (a[field].toString().toUpperCase() < b[field].toString().toUpperCase())
					return -1;
				if (a[field].toString().toUpperCase() > b[field].toString().toUpperCase())
					return 1;
				return 0;
			}
		}
		arr.sort(sorted);
	}
}
