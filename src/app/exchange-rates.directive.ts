import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appExchangeRates]'
})
export class ExchangeRatesDirective implements OnInit {
    public autoplay = 'on';
    public context: any;
    public index: number = 0;

    @Input('appExchangeRatesINterval')
    public interval: number;
    private intervalId: number | null = null;

    @Input('appExchangeRatesFrom')
    public rates: { val: number, currency: string }[];

    @Input('appExchangeRatesAutoplay')
    public set playAuto(mode: 'off' | 'on') {
        this.autoplay = mode;
    }

    constructor(
        private readonly tpl: TemplateRef<any>,
        private readonly vcr: ViewContainerRef
    ) {}

    public ngOnInit() {
        this.context = {
            $implicit: this.rates[this.index],
            controller: {
                next: () => this.next(),
                prev: () => this.prev()
            }
        };
        this.vcr.createEmbeddedView(this.tpl, this.context);
    }

    public next(): void {
        this.index += 1;
        
        if (this.index > (this.rates.length - 1)) {
            this.index = 0;
        }

        this.context.$implicit = this.rates[this.index];
    }

    public prev(): void {
        this.index -= 1;

        if (this.index < 0) {
            this.index = (this.rates.length - 1);
        }

        this.context.$implicit = this.rates[this.index];
    }

    // start - interval functions
    private initInterval(): this {
        this.intervalId = setInterval(() => {
            this.next();
        }, 5000)
        return this;
    }

    private clearInterval(): this {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        return this;
    }

    private resetInterval(): this {
        if (this.autoplay === 'on') {
            this.clearInterval()
                .initInterval();
        }
        return this;
    }
    // end - interval functions
}
