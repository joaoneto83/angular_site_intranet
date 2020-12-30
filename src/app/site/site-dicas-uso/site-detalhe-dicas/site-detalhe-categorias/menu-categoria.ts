export interface MenuCategoria{
    id: number;
    nome: string;
    slug: string;
    post_count: number;
    filhos: MenuCategoria[]
}