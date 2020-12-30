import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { ResultadoInputBusca } from '../../site-dicas-uso/resultadoInputBusca';
import { debounceTime } from 'rxjs/operators';
import { SiteBlogService } from '../site.blog.service';

@Component({
    selector: 'app-site-blog-pesquisa',
    templateUrl: 'site-blog-pesquisa.component.html',
    styleUrls: ['site-blog-pesquisa.component.css']
})
export class SiteBlogPesquisaComponent implements  OnInit, OnDestroy {

    debounce: Subject<string> = new Subject<string>();

    resultaInput: ResultadoInputBusca[];
    temResultado: boolean;
    isAberta: boolean;

    private texto_: string;

    @Input()
    isProduto: boolean;

    @Output()
    divAberta = new EventEmitter<boolean>();

    @Output()
    pesquisarOutput = new EventEmitter<string>();

    @ViewChild('inputPesquisa')
    inputPesquisa: ElementRef<HTMLInputElement>;

    constructor(private service: SiteBlogService) { }

    ngOnInit(): void {
        this.debounce
            .pipe(debounceTime(300))
            .subscribe(filter => this.montaModalResposta(filter));
    }

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }

    pesquisaAberta() {
        this.isAberta = true;
        this.divAberta.emit(this.isAberta);
    }

    pesquisaFechada() {
        this.isAberta = false;
        this.divAberta.emit(this.isAberta);
    }

    enterPesquisa(texto: string) {
        this.inputPesquisa.nativeElement.blur();
        this.resultaInput = null;
        this.pesquisaFechada();
        this.pesquisarOutput.emit(texto);
    }

    montaModalResposta(texto: string) {
        if (this.texto_ == texto) return;

        this.texto_ = texto;

        if (texto != '')
            this.service.searchPostagens(texto).subscribe(
                res => this.pesquisarSuccess(res),
                err => this.pesquisarError(err)
            );

    }
    pesquisarError(err: any): void {
        throw new Error("Method not implemented.");
    }

    async limpar() {
        await this.delay(300);

        this.resultaInput = null;
        this.pesquisaFechada();
    }

    private delay(ms: number): Promise<boolean> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, ms);
        });
    }

    pesquisarSuccess(res: any): void {
        this.temResultado = res.posts.length > 0;
        this.resultaInput = [];

        if (this.temResultado) {
            let listaMenor = res.posts.slice(0, 3);
            listaMenor.forEach(element => {
                this.resultaInput.push({
                    imagemUrl: '/assets/img/Site/Home/icons/dicas.png',
                    produto: false,
                    texto: element.title,
                    link: '/Blog/Post/' + element.ID
                })
            });
        }
        this.pesquisaAberta();
    }
}
