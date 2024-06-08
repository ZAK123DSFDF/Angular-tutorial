import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  inject,
  input,
} from '@angular/core';

@Directive({
  selector: '[appGlobal]',
  standalone: true,
})
export class GlobalDirective {
  el = inject(ElementRef);
  // @Input('appGlobal') backgroundColor: string = 'blue';
  constructor() {}
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#C0B9DD');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
