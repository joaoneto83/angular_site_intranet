import { Directive, Renderer, OnInit, Inject, PLATFORM_ID } from "@angular/core";
import { Input } from "@angular/core";
import { ElementRef } from "@angular/core";
import { SessaoService } from '../../../../app/_core/sessao/sessao.service';
import { TokenService } from '../../../../app/_core/services/token.service';
import { isPlatformBrowser } from '@angular/common';

@Directive({
    selector: '[showIfAdmin]'
})
export class ShowIfAdminDirective implements OnInit {

    @Input('showIfAdmin') showIfAdmin: string;

    currentDisplay: string;

    constructor(
        private element: ElementRef<any>,
        private renderer: Renderer,
        private tokenService: TokenService,
        private sessaoService: SessaoService,
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    ngOnInit(): void {

        if (isPlatformBrowser(this.platformId)) {
            this.currentDisplay = getComputedStyle(this.element.nativeElement).display;

            if (this.tokenService.Acessos.find(x => x == this.showIfAdmin)) {
                this.sessaoService.getSession().subscribe(session => {
                    if (session && session.isAdmin) {
                        this.renderer.setElementStyle(this.element.nativeElement, 'display', this.currentDisplay);
                    } else {
                        this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
                        this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
                    }
                });
            }
            else {
                this.renderer.selectRootElement(this.element.nativeElement).remove();
            }
        }
    }
}