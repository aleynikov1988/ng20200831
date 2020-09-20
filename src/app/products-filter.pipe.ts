import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './data';


@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {
    public transform(products: IProduct[], searchText: string): IProduct[] {
        if (searchText.length > 1) {
            return products.filter((p: IProduct) => {
                return `${p.title} ${p.price}`.toLowerCase().includes(searchText.toLowerCase());
            });
        }
        return products;
    }
}
