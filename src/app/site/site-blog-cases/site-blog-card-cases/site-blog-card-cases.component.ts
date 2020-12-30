import { Component, OnInit, Input } from '@angular/core';
import { PostagemBlog } from '../Postagem-blog';

@Component({
    selector: 'app-site-blog-card-cases',
    templateUrl: 'site-blog-card-cases.component.html',
    styleUrls: ['site-blog-card-cases.component.css']
})
export class SiteBlogCardCasesComponent implements OnInit{

    @Input()
    postagem: PostagemBlog

    constructor(){}

    ngOnInit(): void {
    
    }

}