import { Pipe, PipeTransform } from '@angular/core';
import { Banner } from '../../../app/_models/banner';

@Pipe({ name: 'FiltraBannerAtivo'})
export class FiltraBannerAtivo implements PipeTransform {

    transform(banners: Banner[]) {
        if(banners !== undefined && banners !== null)
        {
            return banners.filter(item => item.id  && item.ativo);
        }
    }

}