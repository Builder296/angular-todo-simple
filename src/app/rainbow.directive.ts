import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  constructor(public eleRef: ElementRef) { }

  ngOnInit() {
    // this.eleRef.nativeElement.style.backgroundColor = "red";
    this.eleRef.nativeElement.style.marginBottom = "10px";
    this.eleRef.nativeElement.style.background = "-webkit-linear-gradient(left, orange , yellow, green, cyan, blue, violet)"; /* For Safari 5.1 to 6.0 */
    this.eleRef.nativeElement.style.background = "-o-linear-gradient(right, orange, yellow, green, cyan, blue, violet)"; /* For Opera 11.1 to 12.0 */
    this.eleRef.nativeElement.style.background = "-moz-linear-gradient(right, orange, yellow, green, cyan, blue, violet)"; /* For Firefox 3.6 to 15 */
    this.eleRef.nativeElement.style.background = "linear-gradient(to right, orange , yellow, green, cyan, blue, violet)"; /* Standard syntax (must be last) */
  }

}
