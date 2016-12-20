import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = 'ProductDetail';
    product: IProduct;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute, private _router: Router, private _productService: ProductService) {
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProductById(id);
            });
    }

    getProductById(id: number) {
        this._productService.getProductById(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}