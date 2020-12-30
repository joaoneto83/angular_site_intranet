import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ElginNews } from '../../../../app/_models/elginNews';
import { ElginNewsService } from '../../../../app/_shared/services/elgin.news.service';

@Injectable({ providedIn: 'root'})
export class SiteDetalheElginNewsResolver implements Resolve<Observable<ElginNews[]>>{

    constructor(private service: ElginNewsService ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ElginNews[]> {
 
        const pagina = route.params.codigo
        
        if(pagina == "ElginNews")
            return this.service.get();

        return null;
    }
}