import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { PostagemBlog } from '../Postagem-blog';
import { SiteBlogCasesService } from '../site.blog-cases.service';

@Component({
    selector: 'app-site-blog-home-cases',
    templateUrl: 'site-blog-home-cases.component.html',
    styleUrls: ['site-blog-home-cases.component.css']
})
export class SiteBlogHomeCasesComponent implements OnInit {

    postagens: PostagemBlog[] = [];
    idProduto: number;
    slugCategoria: string;
    pesquisaOn: boolean;
    linkCarregarMais: string;
    codigoBlog: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private service: SiteBlogCasesService,
        private router: Router) {

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

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(routeParams => {
            this.slugCategoria = this.activatedRoute.snapshot.params['idCategoria'];

            if (this.slugCategoria != undefined) {
                this.CarregaPostsCategoria();
            }
        });

        if (this.slugCategoria == undefined) {
            this.service.getPostagens(this.codigoBlog).subscribe(
                ret => this.montaModelPost(ret),
                err => console.log(err)
            );
        }
    }


    realizaPesquisa(texto) {
        this.postagens = [];

        this.service.searchPostagens(texto, this.codigoBlog).subscribe(
            ret => this.montaModelPost(ret),
            err => console.log(err)
        );
    }

    CarregaPostsCategoria() {
        this.postagens = [];

        this.service.getPostsCategoria(this.slugCategoria, this.codigoBlog).subscribe(
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
              
            console.log(item);
            this.postagens.push(item);
        });
    }

    carregarMais() {
        this.service.morePostagens(this.linkCarregarMais, this.codigoBlog).subscribe(
            ret => this.montaModelPost(ret),
            err => console.log(err)
        );
    }
}