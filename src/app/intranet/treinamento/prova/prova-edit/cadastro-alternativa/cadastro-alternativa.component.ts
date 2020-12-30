import { Component, Input } from '@angular/core';
import { Alternativa } from '../../../../../../app/intranet/_models/alternativa';
import { ProvaService } from '../../prova.service';
import { LoadingService } from '../../../../../../app/_shared/services/loading.service';

@Component({
    selector: 'app-cadastro-alternativa',
    templateUrl: './cadastro-alternativa.component.html',
    styleUrls: ['./cadastro-alternativa.component.css']
})
export class CadastroAlternativaComponent {

    @Input()
    idQuestao: string;

    @Input()
    alternativas: Alternativa[] = [];

    constructor(private service: ProvaService,
        private loadingService: LoadingService) { }

    adicionaAlternativa() {
        this.loadingService.show();
        this.service.addAlternativa({ idQuestao: this.idQuestao } as Alternativa).subscribe(
            res => this.addAlternativaSuccess(res),
            err => {
                this.loadingService.hide();
                console.log(err)
            }
        )
    }

    addAlternativaSuccess(res: any) {
        this.alternativas.push(res);
        this.loadingService.hide();
    }

    verificarCorreta(id: string) {
        this.alternativas.filter(x => x.correta == true && x.id != id)
        .forEach(elem => {
            this.alternativas.find(x => x.id == elem.id).correta = false;
        });
    }
}