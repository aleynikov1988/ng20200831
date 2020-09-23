import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css']
})
export class ExchangeRatesComponent implements OnInit {
    public rates: {val: number, currency: string}[] = [
        {
            val: 10,
            currency: 'USD'
        },
        {
            val: 12,
            currency: 'EUR'
        },
        {
            val: 14,
            currency: 'UAH'
        }
    ];
    public mode: 'off' | 'on' = 'off';

    ngOnInit(): void {
    }
}
