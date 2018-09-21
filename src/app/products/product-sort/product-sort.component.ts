import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-sort',
  templateUrl: './product-sort.component.html',
  styleUrls: ['./product-sort.component.css']
})
export class ProductSortComponent {
@Input() result;
  constructor() { }

  filter(sortedBy){
    if(sortedBy == 'price'){
      this.result.forEach(f=>f.values.sort(function(obj1, obj2) {return obj1.price - obj2.price}))
    } else if(sortedBy == 'name'){
      this.result.forEach(f=>f.values.sort(function(obj1, obj2) {return obj1.title.localeCompare(obj2.title)}));
    }
  }
}
