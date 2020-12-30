import { OnDestroy, OnInit, Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SiteDicasUsoService } from '../site.dicas.uso.service';
import { ResultadoInputBusca } from '../resultadoInputBusca';
import { Postagem } from '../Postagem';

@Component({
    selector: 'app-site-dicas-uso-pesquisa',
    templateUrl: 'site.dicas.uso.pesquisa.component.html',
    styleUrls: ['site.dicas.uso.pesquisa.component.css']
})
export class SiteDicasUsoPesquisaComponent implements OnInit, OnDestroy {

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

    @ViewChild('inputPesquisaDicasUso')
    inputPesquisaDicasUso: ElementRef<HTMLInputElement>;

    constructor(private service: SiteDicasUsoService) { }

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
        this.inputPesquisaDicasUso.nativeElement.blur();
        this.resultaInput = null;
        this.pesquisaFechada();
        this.pesquisarOutput.emit(texto);
    }

    montaModalResposta(texto: string) {
        if (this.texto_ == texto) return;

        this.texto_ = texto;

        if (texto != '')
            this.service.getResultadoBusca(texto).subscribe(
                res => this.resultadoBuscaSuccess(res, texto),
                err => this.resultadoBuscaError(err));

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
        if (this.temResultado) {

            if (this.resultaInput == null)
                this.resultaInput = [];

            let listaMenor = res.posts.slice(0, 3);
            listaMenor.forEach(element => {
                this.resultaInput.push({
                    imagemUrl: '/assets/img/Site/Home/icons/dicas.png',
                    produto: false,
                    texto: element.title,
                    link: '/DicasUso/' + element.ID
                })
            });
        }
        this.pesquisaAberta();
    }

    resultadoBuscaSuccess(res, texto) {
        this.temResultado = res.length > 0;

        this.resultaInput = res;

        this.service.searchPostagens(texto).subscribe(
            res => this.pesquisarSuccess(res),
            err => this.pesquisarError(err)
        );
    }

    resultadoBuscaError(err) {
        console.log(err);
    }
}
