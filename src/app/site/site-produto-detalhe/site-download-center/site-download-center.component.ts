import { Component, Input } from '@angular/core';
import { Arquivo } from "../../../../app/_models/Arquivo";

@Component({
    selector: 'app-site-download-center-produto',
    templateUrl: './site-download-center.component.html',
    styleUrls: ['./site-download-center.component.css']
})
export class SiteDownloadCenterComponent{

    @Input()
    arquivos: Arquivo[];

}