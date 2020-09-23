import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHidden]'
})
export class HiddenDirective {
    @HostBinding('style.visibility')
    public visibility: 'visible' | 'hidden' = 'hidden';
}
