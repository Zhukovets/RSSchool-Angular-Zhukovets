import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product = {}; 
  id;


  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private productService: ProductService) {

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.get(this.id).subscribe(p => this.product = p);
  }

  ngOnInit() {
  }

}
