import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../data';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    @Input()
    public product: IProduct;

    ngOnInit(): void {
        // console.log(this.product);
    }
}
