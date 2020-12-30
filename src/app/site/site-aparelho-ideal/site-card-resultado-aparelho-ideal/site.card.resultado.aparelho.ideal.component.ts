import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { AparelhoIdealResultado } from '../aparelhoIdealResultado';
import { Router } from '@angular/router';
import { Produto } from 'src/app/_models/produto';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-site-card-resultado-aparelho-ideal',
    templateUrl: 'site.card.resultado.aparelho.ideal.component.html',
    styleUrls: ['site.card.resultado.aparelho.ideal.component.css']
})
export class SiteCardResultadoAparelhoIdealComponent implements OnInit{

    @Input()
    item: AparelhoIdealResultado;

    @Output()
    sair: EventEmitter<null> = new EventEmitter<null>();


    @Input()
    produto: Produto;

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,){
            this.produto = this.activatedRoute.snapshot.data['produtos'];
            console.log("aqui", this.produto);
            console.log("aqui1");
        }

    ngOnInit(): void {

    }

    abrirProduto()
    {        
        this.router.navigate([`/Produtos/${this.item.codigoLinha}/${this.item.codigoSublinha}/${this.item.codigoProduto}`]);
        this.sair.emit();

        console.log("aqui", this.produto);
    }
}