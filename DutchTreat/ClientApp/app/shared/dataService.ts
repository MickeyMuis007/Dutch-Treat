import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product';
import * as OrderNS from './order';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {

    }

    public products: Product[] = [];
    public order: OrderNS.Order = new OrderNS.Order();

    loadProducts(): Observable<boolean> {
        return this.http.get('/api/products')
            .pipe(
            map((data: any[]) => {
                this.products = data;
                return true;
            }));
    }

    public addToOrder(product: Product) {

        let item: OrderNS.OrderItem = this.order.items.find(i => i.productId == product.id);

        if (item) {
            item.quantity++;
        } else {
            item = new OrderNS.OrderItem();
            item.productId = product.id;
            item.productArtist = product.artist;
            item.productArtId = product.artId;
            item.productCategory = product.category;
            item.productSize = product.size;
            item.productTitle = product.title;
            item.unitPrice = product.price;
            item.quantity = 1;

            this.order.items.push(item);
        }

    }
}