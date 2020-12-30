import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenService } from '../../../_core/services/token.service';
import { LojaFuncionarioService } from './loja-funcionario.service';
import { FormularioLojaFuncionario } from './formularioLojaFuncionario';
import { Usuario } from '../../_models/usuario';
import { HeaderService } from '../../header/header.service';

@Component({
    templateUrl: './loja-funcionario.component.html',
    styleUrls: ['./loja-funcionario.component.css']
})
export class LojaFuncionarioComponent{
    form: FormGroup;

    constructor(private formBuilder: FormBuilder, 
        private tokenService: TokenService,
        private lojaFuncionarioService: LojaFuncionarioService,
        private headerService: HeaderService) { 
        this.headerService.menuAtivo('RH');
    }

    ngOnInit(): void {

        this.form = this.formBuilder.group({
            produto: ['', Validators.required],
            modeloProduto: ['', Validators.required],
            codigoCatalogo: ['', Validators.required],
            quantidade: ['', Validators.required],
            observacoes: ['', Validators.required]
        });
    }

    confirmarPedido() {
        if (this.form.valid && !this.form.pending) {
            const formulario = this.form.getRawValue() as FormularioLojaFuncionario;

            let usuario: Usuario;
            this.tokenService.getUser().subscribe(
                ret => usuario = ret,
                err => console.log('erro ao obter usuário ',err)
            );
            
            formulario.nomeCompleto = usuario.nome;
            formulario.email = usuario.email;
            formulario.setor = usuario.nomeSetor;
            formulario.telefone = usuario.telefone;

            this.lojaFuncionarioService.enviarFormulario(formulario).subscribe(
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