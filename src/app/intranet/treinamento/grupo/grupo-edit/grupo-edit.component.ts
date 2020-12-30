import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { LoadingService } from '../../../../_shared/services/loading.service';
import { Usuario } from '../../../_models/usuario';
import { GrupoService } from '../grupo.service';
import { Grupo } from '../grupo';

@Component({
    selector: 'app-grupo-edit',
    templateUrl: 'grupo-edit.component.html',
    styleUrls: ['grupo-edit.component.css']
})
export class GrupoEditComponent implements OnInit {

    grupo: Grupo;
    usuarios: Usuario[];
    formGrupo: FormGroup;
    nomePessoa: string;
    nomeGrupo: string;
    isPessoa: boolean = false;
    isGrupo: boolean = false;
    model;

    closeResult: string;

    constructor(private service: GrupoService,
        private loadingService: LoadingService,
        private activatedRoute: ActivatedRoute,
        private modalService: NgbModal,
        private router: Router,
        private formBuilder: FormBuilder) { }
 
    ngOnInit(): void {
        this.activatedRoute.params.subscribe(routeParams => {
            this.grupo = this.activatedRoute.snapshot.data['grupo'];
            if (!this.grupo)
                this.grupo = { nomeGrupo: '', ativo: true, pessoas: [] } as Grupo;

            this.montaForm();
        });

    }

    montaForm() {
        if (this.grupo) {
            this.formGrupo = this.formBuilder.group({
                nomeGrupo: [this.grupo.nomeGrupo, Validators.required],
                ativo: [this.grupo.ativo, Validators.required]
            });
        }
        else {
            this.formGrupo = this.formBuilder.group({
                nomeGrupo: ['', Validators.required],
                ativo: [true, Validators.required]
            });
        }

    }

    salvar() {
        if (this.formGrupo.valid && !this.formGrupo.pending) {

            let modelForm = this.formGrupo.getRawValue() as Grupo;

            this.grupo.nomeGrupo = modelForm.nomeGrupo;
            this.grupo.ativo = modelForm.ativo;

            this.loadingService.show();

            this.service.salvar(this.grupo).subscribe(
                res => this.salvarSuccess(res),
                err => this.salvarError(err)
            );
        }
        else {
            Object.keys(this.formGrupo.controls).forEach(key => {
                this.formGrupo.get(key).markAsTouched();
            });


        }
    }


    salvarError(err: any): void {
        console.log(err);
        this.loadingService.hide();
    }

    salvarSuccess(res: boolean): void {
        this.loadingService.hide();

        if (res) {
            Swal.fire(
                'Grupo salvo com sucesso!',
                '',
                'success'
            );

            this.router.navigate(['/PortaldeApoio/Treinamentos/Grupos']);
        }
        else {
            Swal.fire(
                'Erro',
                'Ocorreu um erro ao salvar o Grupo.',
                'error'
            );
        }
    }

    retornaUsuario($event) {
        this.grupo.pessoas.push($event);
    }

    removeUsuario($event){
        this.grupo.pessoas = this.grupo.pessoas.filter(x => x.id != $event.id);
    }

    removerUsuario(index){
        this.grupo.pessoas.splice(index,1);
    }

    open(content) {
        this.modalService.open(content, { ariaLabelledBy: '', windowClass: 'modalGrupoUsuario' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed`;
        });
    }
}