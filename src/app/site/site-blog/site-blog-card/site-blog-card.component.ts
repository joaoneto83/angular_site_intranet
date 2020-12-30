import { Component, OnInit, Input } from '@angular/core';
import { PostagemBlog } from '../Postagem-blog';

@Component({
    selector: 'app-site-blog-card',
    templateUrl: 'site-blog-card.component.html',
    styleUrls: ['site-blog-card.component.css']
})
export class SiteBlogCardComponent implements OnInit{

    @Input()
    postagem: PostagemBlog

    rendered:string;

    constructor(){}

    ngOnInit(): void {
  
    }

}