import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/models/product';
import {switchMap} from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products: Product[] = [];
  filteredProducts: Product[] = [];
  groupedProducts:any[];
  groups;
  category: string;
  subscription: Subscription;


  constructor(
    private route:ActivatedRoute, 
    private productService: ProductService) {
   }

   ngOnInit(){
    this.populateProducts();
    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 3, lg: 3, all: 0},
      slide: 2,
      speed: 300,
      animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
  }

  public carouselTileLoad(evt: any) {

    const len = this.carouselTileItems.length
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push(i);
      }
    }
  }

  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;
  

  private populateProducts(){ 
    this.subscription = this.productService
      .getAll().pipe(switchMap((products:Product[]) => {
        this.products = products;
        return this.route.queryParamMap;
      }))
      .subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();      
      });
  }

  private applyFilter(){
    this.filteredProducts = (this.category) ? 
    this.products.filter(p => p.category === this.category) : 
    this.products;
    this.groupProducts();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private groupProducts(){
    var groups = new Set(this.filteredProducts.map(item => item.category)); 
    this.groupedProducts = [];
    groups.forEach(g => 
      this.groupedProducts.push({
        name: g, 
        values: this.filteredProducts.filter(i => i.category === g)
      }
    ))    
  } 
}


