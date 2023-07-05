import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'a[no-open]',
})
export class NoOpenDirective {
  @HostListener('click') // Ecouteur d'evenements
  onClickLink() {
    // event.preventDefault();
    console.log('Le lien est bloqué');
    return false;
  }
}
