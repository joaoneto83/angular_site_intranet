import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElginNews } from '../../../_models/elginNews';
import { ElginNewsService } from '../../../_shared/services/elgin.news.service';

@Component({
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private elginNewsService: ElginNewsService) { }

  elginNews: ElginNews[];

  tituloPagina: string = "Elgin News";

  ngOnInit(): void {
    this.elginNews = this.activatedRoute.snapshot.data['elginNews'];
  }

  retornaCarregamento(){
    this.elginNewsService.get().subscribe(
      res => this.elginNews = res,
      err => console.log(err));
  }
}
