import { SafeHtml } from '@angular/platform-browser';

export interface PostagemBlog{
    id: number;
    titulo: string;
    foto: string;
    embedded: string;
    content: SafeHtml;
    descricao: string;
    tags: string[];
}