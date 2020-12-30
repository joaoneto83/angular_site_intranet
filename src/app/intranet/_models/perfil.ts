import { Menu } from './menu';

export interface Perfil{
    id: string
    nome: string
    ativo: boolean
    menus: Menu[]
}