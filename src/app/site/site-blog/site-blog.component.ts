import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-site-blog',
    templateUrl: 'site-blog.component.html',
    styleUrls: ['site-blog.component.css']
})
export class SiteBlogComponent implements OnInit {

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    ngOnInit(): void {

    }

    onActivate(event) {
        if (isPlatformBrowser(this.platformId)) {
            window.scroll(0, 0);
        }
    }
}