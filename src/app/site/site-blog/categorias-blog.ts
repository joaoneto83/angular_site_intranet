export interface CategoriasBlog{
    found: number,
    categories:[{
        ID: number,
        name: string,
        slug: string,
        post_count: number;
        parent: number
    }]
}