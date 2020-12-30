import { Component, OnInit, Input, OnChanges, SimpleChanges, ɵConsole } from '@angular/core';
import { Postagem } from '../Postagem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-card-postagem',
  templateUrl: './site.card-postagem.component.html',
  styleUrls: ['./site.card-postagem.component.css']
})
export class SiteCardPostagemComponent implements OnInit {

  constructor(private router: Router) {}

  @Input()
  item: Postagem;
  @Input()
  divPesquisaAberta: boolean;
  
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }
}
