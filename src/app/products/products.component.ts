import { Product } from '../model/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Component, ViewEncapsulation } from '@angular/core';
import 'rxjs/add/operator/switchmap'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  category;
  constructor(productService: ProductService, route: ActivatedRoute) {
    productService.getAll().
      switchMap(products => {
        this.products = products;
        return route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) : this.products;
      });
  }
}
