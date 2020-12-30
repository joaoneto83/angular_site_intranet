import { OnInit, Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolarIntegradorService } from '../solar-integrador.service';
import { SolarIntegrador } from '../solarIntegrador';
import { Estado } from '../../../../../_shared/services/estado';
import { Cidade } from '../../../../../_shared/services/cidade';
import { LoadingService } from '../../../../../_shared/services/loading.service';
import { DominioService } from '../../../../../_shared/services/dominio.service';

@Component({
    selector: 'app-subsite-solar-edit',
    templateUrl: 'subsite-solar-edit.component.html',
    styleUrls: ['subsite-solar-edit.component.css']
})
export class SubsiteSolarEditComponent implements OnInit {

    integrador: SolarIntegrador;
    formIntegrador: FormGroup;
    estados: Estado[];
    cidades: Cidade[];

    closeResult: string;

    public cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/,];

    constructor(private service: SolarIntegradorService,
        private loadingService: LoadingService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private dominioService: DominioService) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(routeParams => {
            this.integrador = this.activatedRoute.snapshot.data['integrador'];
            this.montaForm();

            this.dominioService.getEstados().subscribe(
                ret => this.getEstadosSuccess(ret),
                err => this.getEstadosError(err)
            );
        });
    }

    montaForm() {
        if (this.integrador) {
            this.formIntegrador = this.formBuilder.group({
                nome: [this.integrador.nome, Validators.required],
                cnpj: [this.integrador.cnpj, Validators.required],
                uf: [this.integrador.uf, Validators.required],
                email: [this.integrador.email, Validators.email],
                endereco: [this.integrador.endereco],
                telefone: [this.integrador.telefone],
                site: [this.integrador.site],
                idCidade: [this.integrador.idCidade],
                ativo: [this.integrador.ativo]
            });
        }
        else {
            this.integrador = {} as SolarIntegrador;
            
            this.formIntegrador = this.formBuilder.group({
                nome: ['', Validators.required],
                cnpj: ['', Validators.required],
                uf: ['', Validators.required],
                email: ['', Validators.email],
                endereco: [''],
                telefone: [''],
                site: [''],
                idCidade: [''],
                ativo:[true]
            });
        }

    }

    getEstadosSuccess(ret: Estado[]): void {
        this.loadingService.hide();
        this.estados = ret;

        if (this.integrador)
                if (this.integrador.uf)
                    this.carregarCidades(this.integrador.uf);
    }

    getEstadosError(err: any): void {
        console.log('erro obtendo os estados: ' + err.message);
        this.loadingService.hide();
    }

    carregarCidades(estado): void {
        this.loadingService.show();

        this.dominioService.getCidades(estado).subscribe(
            ret => this.getCidadesSuccess(estado, ret),
            err => this.getEstadosError(err)
        );
    }

    getCidadesSuccess(estado: string, ret: Cidade[]): void {
        this.cidades = ret;
        this.loadingService.hide();
    }

    salvar() {
        if (this.formIntegrador.valid && !this.formIntegrador.pending) {

            let modelForm = this.formIntegrador.getRawValue() as SolarIntegrador;

            this.integrador.nome = modelForm.nome;
            this.integrador.cnpj = modelForm.cnpj;
            this.integrador.uf = modelForm.uf;
            this.integrador.email = modelForm.email;
            this.integrador.endereco = modelForm.endereco;
            this.integrador.telefone = modelForm.telefone;
            this.integrador.site = modelForm.site;
            this.integrador.idCidade = modelForm.idCidade;
            this.integrador.ativo = modelForm.ativo;
            
            this.loadingService.show();

            this.service.salvar(this.integrador).subscribe(
                res => this.salvarSuccess(res),
                err => this.salvarError(err)
            );
        }
        else {
            Object.keys(this.formIntegrador.controls).forEach(key => {
                this.formIntegrador.get(key).markAsTouched();
            });

            Swal.fire(
                'Atenção',
                'Preencha todos os campos corretamente.',
                'warning'
            );
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
                'Integrador Solar salvo com sucesso!',
                '',
                'success'
            );

            this.router.navigate(['/PortaldeApoio/Adm/Subsite/Solar']);
        }
        else {
            Swal.fire(
                'Erro',
                'Ocorreu um erro ao salvar o Integrador.',
                'error'
            );
        }
    }
}