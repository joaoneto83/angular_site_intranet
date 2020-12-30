import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import { Video } from '../../../../_models/video';
import { VideoService } from '../../../../_shared/services/video.service';

@Injectable({ providedIn: 'root'})
export class VideosHomeAutomacaoResolver implements Resolve<Observable<Video[]>>{

    constructor(private service: VideoService) {}

    resolve(): Observable<Video[]> {
        return this.service.getVideos('Automacao-Home');
    }
}