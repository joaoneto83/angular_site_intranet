import { SafeHtml } from '@angular/platform-browser';
import { PostagemBlogEmbedded } from './Postagem-blog-embedded';



export interface PostagemBlog{
    id: number;
    titulo: string;
    foto: string;
    content: SafeHtml;
    descricao: string;
    tags: string[];
    embedded: PostagemBlogEmbedded;
}