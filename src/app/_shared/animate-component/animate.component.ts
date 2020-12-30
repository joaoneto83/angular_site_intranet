import { Component, HostListener, ElementRef, Input, OnInit, AfterViewInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'animate-box',
  templateUrl: 'animate.component.html',
  styleUrls: ['animate.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translate{{axis}}(0)"
      }), { params: { position: '80', axis: 'X' } }),
      state('hide', style({
        opacity: 0,
        transform: "translate{{axis}}({{position}}px)"
      }), { params: { position: '80', axis: 'X' } }),
      // transition('show => hide', animate('1s ease-out')),
      transition('hide => show', animate('0.65s {{delay}}ms ease-in'))
    ])
  ]
})
export class AnimateComponent implements OnInit, AfterViewInit {


  state = 'hide'

  @Input()
  position: number = 80;

  @Input()
  axis: string = 'X';

  @Input()
  delay: number = 0;

  constructor(public el: ElementRef) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animation();
    }, 0);
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.animation();
  }

  animation() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset + 800

    if (scrollPosition >= componentPosition) {
      this.state = 'show'
    }
    // else {
    //   this.state = 'hide'
    // }
  }

}