import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { SiteAutomacaoQueroComprarService } from './site-automacao-quero-comprar.service';
import { FormularioQueroComprar } from './formularioQueroComprar';
import { CpfCnpjValidator } from '../../../_shared/validators/cpf-cnpj.validator/cpf-cnpj.validator';

@Component({
    selector:'',
    templateUrl: './site-automacao-quero-comprar.component.html',
    styleUrls: ['./site-automacao-quero-comprar.component.css']
})
export class SiteAutomacaoQueroComprarComponent implements OnInit {

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private service: SiteAutomacaoQueroComprarService
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
            cnpj: ["", [Validators.required, CpfCnpjValidator]],
            descricao: ["", Validators.required]
        });
    }

    salvar() {
        if (this.form.valid && !this.form.pending) {
            const formulario = this.form.getRawValue() as FormularioQueroComprar;

            this.service.enviarFormulario(formulario).subscribe(
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
        Swal.fire('E-mail enviado com sucesso!','','success');
    }

}