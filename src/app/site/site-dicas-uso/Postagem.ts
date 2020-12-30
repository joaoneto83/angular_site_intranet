import { SafeHtml } from '@angular/platform-browser';

export interface Postagem{
    id: number;
    titulo: string;
    content: SafeHtml;
    descricao: string;
    tags: string[];
}