import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { AngularFireAuthModule } from 'angularfire2/auth'; 
import { RouterModule } from '@angular/router'; 
import { NgxCarouselModule } from 'ngx-carousel';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 
import 'hammerjs';
import { FormsModule } from '@angular/forms';
import {CommonModule, registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

import { AppComponent } from './app.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { ProductsComponent } from './products/products.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './shared/category.service';
import { ProductService } from './shared/product.service';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { ProductSortComponent } from './products/product-sort/product-sort.component';
import { ColorsService } from './shared/colors.service';
import { SizesService } from './shared/sizes.service';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    ProductsComponent,
    AdminProductsComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductSortComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxCarouselModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/details/:id', component: ProductDetailsComponent },
      { path: 'admin/products/new', component: ProductFormComponent },
      { path: 'admin/products', component: AdminProductsComponent },
      { path: 'admin/products/:id', component: ProductFormComponent },
    ])    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [CategoryService, ProductService, ColorsService, SizesService, { provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
