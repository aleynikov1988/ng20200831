import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IProduct, products$} from './data';
import { Observable, Subscription } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ProductsService } from './products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    public title = 'Book Market';
    public drawer: MatDrawer;
    public searchText = '';
    public subscriptions: Subscription[] = [];
    public onlyFavourites: boolean = false;
    public products$: Observable<IProduct[]> = this.productsService.getProducts();
    public products: IProduct[];

    public constructor(
         @Inject(ProductsService) private productsService: ProductsService
        // private productsService: ProductsService
    ) {}

    public ngOnInit() {
        const subscribe = products$.subscribe((p) => {
            this.products = p.products;
        });
        this.subscriptions.push(subscribe);
    }

    public ngOnDestroy() {
        this.subscriptions.forEach((s) => {
            s.unsubscribe();
        });
    }

    public sideNavControl(drawer: MatDrawer) {
        this.drawer = drawer;
    }

    public clickMe() {
        console.log('click Me');
    }

    public search(text: string) {
        this.searchText = text;
    }

    public toggleOnlyFavourites(event: MatCheckboxChange): void {
        this.onlyFavourites = event.checked;
    }
}
