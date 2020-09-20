import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IProduct, products$} from './data';
import { Subscription } from 'rxjs';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    public title = "Book Market";
    public drawer: MatDrawer;
    public searchText = "";
    public products: IProduct[];
    public subscriptions: Subscription[] = [];
    public onlyFavourites: boolean;

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
        console.log("click Me");
    }

    public search(text: string) {
        this.searchText = text;
    }
}
