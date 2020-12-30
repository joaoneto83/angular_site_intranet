import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-site-blog-cases',
    templateUrl: 'site-blog-cases.component.html',
    styleUrls: ['site-blog-cases.component.css']
})
export class SiteBlogCasesComponent implements OnInit {

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    ngOnInit(): void {

    }

    onActivate(event) {
        if (isPlatformBrowser(this.platformId)) {
            window.scroll(0, 0);
        }
    }
}