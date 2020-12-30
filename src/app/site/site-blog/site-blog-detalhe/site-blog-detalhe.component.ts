import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SiteBlogService } from '../site.blog.service';
import { PostagemBlog } from '../Postagem-blog';
import { Post2Blog } from '../post2-blog';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-site-blog-detalhe',
  templateUrl: 'site-blog-detalhe.component.html',
  styleUrls: ['site-blog-detalhe.component.css']
})
export class SiteBlogDetalheComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: SiteBlogService,
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object) { }

  postagem: PostagemBlog;
  idPostagem: number;
  banner: string;
  relacionados: PostagemBlog[];

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
    console.log(this.postagem);
  }
}