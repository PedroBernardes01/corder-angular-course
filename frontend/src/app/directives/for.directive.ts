import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[MyFor]'
})
export class ForDirective implements OnInit{

  @Input('MyForEm') numbers: number[]
  constructor() { 

  }

  ngOnInit(): void {
      
  }
}
