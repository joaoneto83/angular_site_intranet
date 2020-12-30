import { Component, Input, ViewChild } from '@angular/core';
import { ResponsavelSetor } from './responsavel-setor';
import { RHService } from '../rh.service';
import { EditResponsavelSetorComponent } from './edit-responsavel-setor/edit-responsavel-setor.component';
import { ResponsavelSetorService } from './responsavel-setor.service';

@Component({
    selector: 'app-responsaveis-setor',
    templateUrl: './responsavel-setor.component.html',
    styleUrls: ['./responsavel-setor.component.css']
})
export class ResponsavelSetorComponent {
    constructor(private service: ResponsavelSetorService, 
        private rhService: RHService) {}

    @Input() responsaveis: ResponsavelSetor[];
    @Input() perfilAdmin: string;
    @ViewChild('modalResponsavelSetor') modalResponsavelSetor: EditResponsavelSetorComponent;

    open() {
        let model = {
            setor: '',
            nome: '',
            telefones: [],
            ativo: true
        } as ResponsavelSetor;

        this.modalResponsavelSetor.open(model);
    }

    editResponsavelSetor(responsavelSetor: ResponsavelSetor) {
        let model = responsavelSetor;
        this.modalResponsavelSetor.open(model);
    }

    atualiza(){
        this.rhService.getResponsaveisSetor().subscribe(
            res => this.responsaveis = res,
            err => console.log(err)
        )
    }
}