import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './data';


@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {
    public transform(products: IProduct[], searchText: string, onlyFavourites: boolean = false): IProduct[] {
        if (searchText.length > 1) {
            products = products.filter((p: IProduct) => {
                return `${p.title} ${p.price}`.toLowerCase().includes(searchText.toLowerCase());
            });
        }

        if (onlyFavourites) {
            products = products.filter((p: IProduct) => p.isFavorite);
        }

        return products;
    }
}
