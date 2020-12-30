import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { PostagemBlog } from '../Postagem-blog';
import { Post2Blog } from '../post2-blog';
import { isPlatformBrowser } from '@angular/common';
import { SiteBlogCasesService } from '../site.blog-cases.service';

@Component({
  selector: 'app-site-blog-detalhe-cases',
  templateUrl: 'site-blog-detalhe-cases.component.html',
  styleUrls: ['site-blog-detalhe-cases.component.css']
})
export class SiteBlogDetalheCasesComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: SiteBlogCasesService,
    private sanitizer: DomSanitizer,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object) {

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('Automacao'))
          this.codigoBlog = 'Automacao';
      }
      if (event instanceof NavigationEnd) {
        if (event.url.includes('Refrigeracao'))
          this.codigoBlog = 'Refrigeracao';
      }
    });
    
  }

  postagem: PostagemBlog;
  idPostagem: number;
  banner: string;
  relacionados: PostagemBlog[];
  codigoBlog: string

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routeParams => {
      this.idPostagem = this.activatedRoute.snapshot.params['idPostagem'];

      if (this.idPostagem != undefined) {

        this.service.getPost(this.idPostagem, this.codigoBlog).subscribe(
          ret => this.montaModelPost(ret),
          err => console.log(err)
        );

        this.service.getPostNew(this.idPostagem, this.codigoBlog).subscribe(
          ret => this.montaModelPostNew(ret),
          err => console.log(err)
        )
      }
    });

  }

  montaModelPostNew(ret: Post2Blog): void {

    let lista: PostagemBlog[] = [];
    if (ret["jetpack-related-posts"]) {
      ret["jetpack-related-posts"].forEach(function (item) {

        var newItem = {
          id: item.id,
          titulo: item.title,
        } as PostagemBlog;

        if (item.img) {
          newItem.foto = item.img.src;
        }
        else {
          newItem.foto = '/assets/img/noimage.jpg';
        }

        lista.push(newItem)
      });

      this.relacionados = lista.splice(0, 3);
    }
  }

  montaModelPost(post) {

    let tags: string[] = [];

    for (let prop in post.tags) {
      tags.push(post.tags[prop].name);
    }

    this.postagem = {
      id: post.id,
      // content: this.sanitizer.bypassSecurityTrustHtml(post.content),
      content: post.content,
      titulo: post.title,
      descricao: post.excerpt.length > 150 ? post.excerpt.substring(0, 150) + "[...]</p>" : post.excerpt,
      tags: tags
    } as PostagemBlog;

    if (isPlatformBrowser(this.platformId)) {
      window.scroll(0, 0);
    }
  }
}