import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from './data';


@Injectable()
export class ProductsService {
    constructor(
        private readonly httpClient: HttpClient,
        @Inject('server') private readonly server: any
    ) {}

    public getProducts(): Observable<IProduct[]> {
        return this.httpClient.get<any>(`${this.server.baseUrl}/products`);
    }
}
