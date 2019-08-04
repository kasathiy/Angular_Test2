import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  @HostBinding('style.backgroundColor') backgroundColor;

  @HostListener('mouseenter') onMouseEnter (){
    this.backgroundColor = "yellow";
  }

  @HostListener('mouseleave') onMouseLeave (){
    this.backgroundColor = "red";
  }

  constructor(public elementRef:ElementRef) { 
    // console.log("elementRef",elementRef);
    // this.elementRef.nativeElement.style.backgroundColor = "blue";
    this.backgroundColor = "red";
  }

}
