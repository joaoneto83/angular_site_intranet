import { Pipe, PipeTransform } from '@angular/core';
import { Menu } from '../_models/menu';

@Pipe({ name: 'FiltraMenuPai'})
export class FiltraMenuPai implements PipeTransform {

    transform(menus: Menu[], descriptionQuery: string): Menu[]{
        return menus.filter(x => x.idMenuPai == "00000000-0000-0000-0000-000000000000");
    }

}