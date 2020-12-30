import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostagemBlog } from '../Postagem-blog';
import { SiteBlogService } from '../site.blog.service';

@Component({
    selector: 'app-site-blog-home',
    templateUrl: 'site-blog-home.component.html',
    styleUrls: ['site-blog-home.component.css']
})
export class SiteBlogHomeComponent implements OnInit {

    postagens: PostagemBlog[] = [];
    idProduto: number;
    slugCategoria: string;
    pesquisaOn: boolean;

    linkCarregarMais: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private service: SiteBlogService) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(routeParams => {
            this.slugCategoria = this.activatedRoute.snapshot.params['idCategoria'];

            if (this.slugCategoria != undefined) {
                this.CarregaPostsCategoria();
            }
        });

        if (this.slugCategoria == undefined) {
            this.service.getPostagens().subscribe(
                ret => this.montaModelPost(ret),
                err => console.log(err)
            );
        }
    }


    realizaPesquisa(texto) {
        this.postagens = [];

        this.service.searchPostagens(texto).subscribe(
            ret => this.montaModelPost(ret),
            err => console.log(err)
        );
    }

    CarregaPostsCategoria() {
        this.postagens = [];

        this.service.getPostsCategoria(this.slugCategoria).subscribe(
            ret => this.montaModelPost(ret),
            err => console.log(err)
        );
    }

    montaModelPost(ret) {
        this.linkCarregarMais = ret.next_page;

        ret.forEach(element => {

            let tags: string[] = [];

            for (let prop in element.tags) {
                tags.push(element.tags[prop].name);
            }

            let item = {
                id: element.id,
                content: element.content,
                titulo: element.title,
                embedded: element._embedded,
                descricao: element.excerpt.toString().length > 150 ? element.excerpt.substring(0, 150) + "[...]</p>" : element.excerpt,
                tags: tags
            } as PostagemBlog

            if (element.post_thumbnail) {
                item.foto = element.post_thumbnail.URL;
            }
            else {
                item.foto = '/assets/img/noimage.jpg';
            }
            this.postagens.push(item);
           console.log(item.embedded['wp:featuredmedia'][0]['source_url']);
        });
    }

    carregarMais() {
        this.service.morePostagens(this.linkCarregarMais).subscribe(
            ret => this.montaModelPost(ret),
            err => console.log(err)
        );
    }
}