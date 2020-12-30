import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SiteSejaIntegradorService } from './site-seja-integrador.service';
import { FormularioIntegrador } from './formularioIntegrador';
import Swal from 'sweetalert2';

@Component({
    selector:'',
    templateUrl: './site-seja-integrador.component.html',
    styleUrls: ['./site-seja-integrador.component.css']
})
export class SiteSejaIntegradorComponent implements OnInit {

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private sejaIntegradorService: SiteSejaIntegradorService
    ) { }

    ngOnInit(): void {
        this.montaForm();
    }

    montaForm() {
        this.form = this.formBuilder.group({
            razaoSocial: ["", Validators.required],
            nomeFantasia: ["", Validators.required],
            cidade: ["", Validators.required],
            estado: ["", Validators.required],
            endereco: ["", Validators.required],
            cep: ["", Validators.required],
            telefone: ["", Validators.required],
            celular: ["", Validators.required],
            email: ["", [Validators.required, Validators.email]],
            cnpj: ["", Validators.required],
            inscricaoEstadual: ["", Validators.required],
            descricao: ["", Validators.required]
        });
    }

    salvar() {
        if (this.form.valid && !this.form.pending) {
            const formulario = this.form.getRawValue() as FormularioIntegrador;

            this.sejaIntegradorService.enviarFormulario(formulario).subscribe(
                ret => this.enviarFormularioSuccess(ret),
                err => this.enviarFormularioError(err)
            );
        }
        else {
            Object.keys(this.form.controls).forEach(key => {
                this.form.get(key).markAsTouched();
            });
        }
    }

    enviarFormularioError(err: any): void {
        console.log('erro ao enviar formulário: ' + err.message);
    }

    enviarFormularioSuccess(ret: boolean): void {
        this.form.reset();
        Swal.fire(
            'E-mail enviado com sucesso!',
            '',
            'success'
        );
    }

}