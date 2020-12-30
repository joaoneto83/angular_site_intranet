import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Postagem } from '../Postagem';
import { PostagemRelacionada } from './site-detalhe-relacionado/postagemRelacionada';
import { SiteDicasUsoService } from '../site.dicas.uso.service';
import { Post2 } from '../post2';

@Component({
  selector: 'app-site-detalhe-dicas',
  templateUrl: './site.detalhe-dicas.component.html',
  styleUrls: ['./site.detalhe-dicas.component.css']
})
export class SiteDetalheDicasComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private service: SiteDicasUsoService,
    private sanitizer: DomSanitizer) { }

  postagem: Postagem;
  idPostagem: number;
  banner: string;
  relacionados: PostagemRelacionada[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routeParams => {
      this.idPostagem = this.activatedRoute.snapshot.params['idPostagem'];

      if (this.idPostagem != undefined) {

        this.service.getPost(this.idPostagem).subscribe(
          ret => this.montaModelPost(ret),
          err => console.log(err)
        );

        this.service.getPostNew(this.idPostagem).subscribe(
          ret => this.montaModelPostNew(ret),
          err => console.log(err)
        )
      }
    });

  }

  montaModelPostNew(ret: Post2): void {
    let lista: PostagemRelacionada[] = [];
    ret["jetpack-related-posts"].forEach(function (item) {
      lista.push(
        {
          id: item.id,
          titulo: item.title
        }
      )
    });

    this.relacionados = lista;
  }

  montaModelPost(post) {

    let tags: string[] = [];

    for (let prop in post.tags) {
      tags.push(post.tags[prop].name);
    }

    this.postagem = {
      id: post.ID,
      content: this.sanitizer.bypassSecurityTrustHtml(post.content),
      titulo: post.title,
      descricao: post.excerpt.length > 150 ? post.excerpt.substring(0, 150) + "[...]</p>" : post.excerpt,
      tags: tags
    };

  }
}