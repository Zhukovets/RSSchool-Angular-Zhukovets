import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from '../../shared/product.service';
import { CategoryService } from '../../shared/category.service';
import { ColorsService } from '../../shared/colors.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take'; 
import { SizesService } from '../../shared/sizes.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  colors$;
  sizes$;
  product = {}; 
  id;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private colorsService: ColorsService, 
    private sizeService: SizesService, 
    private productService: ProductService) {
    this.categories$ = categoryService.getAll();
    this.colors$ = colorsService.getAll();
    this.sizes$ = sizeService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.get(this.id).subscribe(p => this.product = p);
  }

  save(product){
    if (this.id) this.productService.update(this.id,product);
    else this.productService.create(product);
    
    this.router.navigate(['/admin/products']);
  }

  delete(product){
     if (this.id) this.productService.delete(this.id,product);    
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }

}
