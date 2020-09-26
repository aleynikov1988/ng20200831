import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ProductComponent } from './product/product.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './exchange-rates.directive';
import { HiddenDirective } from './hidden.directive';
import { ProductsService } from './products.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CustomInterceptorService } from './custom-interceptor.service';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SideMenuComponent,
        ProductComponent,
        ProductsFilterPipe,
        ExchangeRatesComponent,
        ExchangeRatesDirective,
        HiddenDirective
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: 'server',
            useValue: environment.server
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomInterceptorService,
            multi: true
        },
        ProductsService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
