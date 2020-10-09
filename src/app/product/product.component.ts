import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../data';
import { ModalService } from '../modal/modal.service';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    @Input()
    public product: IProduct;  

    constructor(
        private readonly modalService: ModalService
    ) {}

    ngOnInit(): void {
        // console.log(this.product);
    }

    public add2cart(): void {
        this.modalService.open(this.product);
    }
}
