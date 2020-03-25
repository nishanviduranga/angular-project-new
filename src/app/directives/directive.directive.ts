import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {createHostListener} from "@angular/compiler/src/core";

@Directive({
  selector: '[setmycolor]'
})
export class DirectiveDirective {

  constructor(private element: ElementRef) {

    element.nativeElement.style.color = 'yello';

  }
  @HostListener('mouseenter') setColoronMouseEnter(){
    this.element.nativeElement.style.color= 'brown';
  }
  @HostListener('mouseleave') setColoronMouseLeave(){
    this.element.nativeElement.style.color= 'green';
  }

}

