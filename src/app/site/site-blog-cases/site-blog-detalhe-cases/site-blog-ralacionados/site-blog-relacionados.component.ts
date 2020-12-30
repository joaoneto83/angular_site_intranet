import { Component, OnInit, Input } from '@angular/core';
import { PostagemBlog } from '../../Postagem-blog';

@Component({
    selector: 'app-site-blog-relacionados',
    templateUrl: 'site-blog-relacionados.component.html',
    styleUrls: ['site-blog-relacionados.component.css']
})
export class SiteBlogRelacionadosComponent implements OnInit{

    @Input()
    relacionados: PostagemBlog[];

    @Input()
    codigoBlog: string;

    constructor(){}

    ngOnInit(): void {
    
    }

}