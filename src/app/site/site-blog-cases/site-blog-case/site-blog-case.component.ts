import { Component, OnInit, Input } from '@angular/core';
import { PostagemBlog } from '../Postagem-blog';
import { SiteBlogCasesService } from '../site.blog-cases.service';

@Component({
    selector: 'app-site-blog-case',
    templateUrl: 'site-blog-case.component.html',
    styleUrls: ['site-blog-case.component.css']
})
export class SiteBlogCaseComponent implements OnInit {

    postagens: PostagemBlog[] = [];
    rows: any[];

    @Input()
    codigoBlog: string = '';

    constructor(private service: SiteBlogCasesService) { }

    ngOnInit(): void {
        this.postagens = [];

        this.service.getUltimosCases(this.codigoBlog).subscribe(
            ret => this.montaModelPost(ret),
            err => console.log(err)
        );
    }

    montaModelPost(ret) {

        for (let element of ret) {
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

            if ((this.codigoBlog == 'Refrigeracao' && this.postagens.length == 6) ||
                (this.codigoBlog != 'Refrigeracao' && this.postagens.length == 4)) { break; }
        } 
        console.log(this.postagens);

        this.rows = this.groupColumns(this.postagens);
    }

    groupColumns(postagens: PostagemBlog[]) {
        const newRows = [];
        if (this.codigoBlog == 'Refrigeracao') {
            for (let index = 0; index < postagens.length; index += 3) {
                newRows.push(postagens.slice(index, index + 3));
            }
        }
        else {
            for (let index = 0; index < postagens.length; index += 2) {
                newRows.push(postagens.slice(index, index + 2));
            }
        }
        return newRows;
    }

}