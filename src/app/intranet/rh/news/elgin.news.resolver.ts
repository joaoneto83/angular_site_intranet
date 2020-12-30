import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ElginNews } from '../../../_models/elginNews';
import { ElginNewsService } from '../../../_shared/services/elgin.news.service';

@Injectable({ providedIn: 'root'})
export class ElginNewsResolver implements Resolve<Observable<ElginNews[]>>{

    constructor(private service: ElginNewsService ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ElginNews[]> {
 
        return this.service.get();
    }
}