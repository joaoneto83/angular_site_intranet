import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { TokenService } from '../../../_core/services/token.service';
import { Usuario } from '../../_models/usuario';
import { SolicitacaoService } from './solicitacao.service';
import { FormularioSolicitacao } from './formularioSolicitacao';
import { HeaderService } from '../../header/header.service';

@Component({
    templateUrl: './solicitacao.component.html',
    styleUrls: ['./solicitacao.component.css']
})
export class SolicitacaoComponent implements OnInit {

    form: FormGroup;

    constructor(private formBuilder: FormBuilder, 
        private tokenService: TokenService,
        private solicitacaoService: SolicitacaoService,
        private headerService: HeaderService) { 
        this.headerService.menuAtivo('RH');
    }
    ngOnInit(): void {

        this.form = this.formBuilder.group({
            solicitacao: ['', Validators.required]
        });
    }

    enviarSolicitacao() {
        if (this.form.valid && !this.form.pending) {
            const formulario = this.form.getRawValue() as FormularioSolicitacao;

            let usuario: Usuario;
            this.tokenService.getUser().subscribe(
                ret => usuario = ret,
                err => console.log('erro ao obter usuário ',err)
            );
            
            formulario.nomeCompleto = usuario.nome;
            formulario.registro = usuario.registro;
            formulario.email = usuario.email;
            formulario.setor = usuario.nomeSetor;
            formulario.telefone = usuario.telefone;

            this.solicitacaoService.enviarFormulario(formulario).subscribe(
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