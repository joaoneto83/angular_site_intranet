import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ElginNews } from '../../../../_models/elginNews';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css']
})
export class CardNewsComponent implements OnInit {

  @Input()
  itens: ElginNews;

  @Output()
  recarregar = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  retornaCarregamento(){
    this.recarregar.emit();
  }
}
