import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})


export class ProductListComponent implements OnInit {

    constructor(private _productService: ProductService) {
    };

    pageTitle: string = "Product Listings";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    listFilter: string;
    products: IProduct[];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        this.products = this._productService.getProducts();
    }
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

}