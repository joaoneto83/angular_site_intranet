import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioAssistenciaTecnica } from './formularioAssistenciaTecnica';
import { SiteSejaAssistenciaService } from './site-seja-assistecia.service';
import Swal from 'sweetalert2';

@Component({
    templateUrl: './site-seja-assistencia-tecnica.component.html',
    styleUrls: ['./site-seja-assistencia-tecnica.component.css']
})
export class SiteSejaAssistenciaTecnicaComponent implements OnInit {

    form: FormGroup;
    uf: string;

 

    constructor(
        private formBuilder: FormBuilder,
        private sejaAssistenciaService: SiteSejaAssistenciaService
    ) { }

    ngOnInit(): void {
        this.montaForm();
    }

    montaForm() {
        this.form = this.formBuilder.group({
            razaoSocial: ["", Validators.required],
            telefone: ["", Validators.required],
            email: ["", Validators.required],
            cidade: ["", Validators.required],
            estado: ["", Validators.required],
            bairro: ["", Validators.required],
            produtos: ["", Validators.required],
            comentarios: ["", Validators.required],
        });
    }
    
       
    carregarEstado(id){
    
        this.uf = id;
        console.log(this.uf)
    }

    salvar() {
        if (this.form.valid && !this.form.pending) {
            const formulario = this.form.getRawValue() as FormularioAssistenciaTecnica;

            this.sejaAssistenciaService.enviarFormulario(formulario).subscribe(
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
        console.log('erro ao enviar formulário:' + err.message);
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