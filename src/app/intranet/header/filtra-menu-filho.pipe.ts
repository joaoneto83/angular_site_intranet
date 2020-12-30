import { Pipe, PipeTransform } from '@angular/core';
import { Menu } from '../_models/menu';

@Pipe({ name: 'FiltraMenuFilho'})
export class FiltraMenuFilho implements PipeTransform {

    transform(menus: Menu[], idMenuPai: string): Menu[]{
        return menus.filter(x => x.idMenuPai == idMenuPai);
    }

}