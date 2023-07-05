import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'a[confirm]',
})
export class ConfirmDirective {
  @Input('confirm-message') // vérifie si il éxiste un atttribut confirm-message et si oui on change par sa valeur
  message = 'Etes vous sur?';

  @HostListener('click') // si false => event.preventDefault
  onClickTweetLink() {
    return window.confirm(this.message);
  }
}
