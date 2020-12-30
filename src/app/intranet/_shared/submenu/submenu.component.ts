import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Linha } from '../../../../app/_models/linha';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubMenuComponent implements OnInit, OnChanges {
  
  @Input()
  linhas: Linha[];

  @Input()
  link: string;
  
  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
  }
}