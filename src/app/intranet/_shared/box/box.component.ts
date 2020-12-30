import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit  {
    
  @Input()
  de: string;

  @Input()
  ate: string;

  @Input()
  height: string;

  @Input() 
  customStyle: {};

  style: string;

  ngOnInit(): void {
    this.style = 'linear-gradient(to right, ' + this.de + ', ' + this.ate + ')';
  }

}