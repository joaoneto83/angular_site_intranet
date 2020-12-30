import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { TokenService } from '../../../_core/services/token.service';
import { SugestaoService } from './sugestao.service';
import { FormularioSugestao } from './formularioSugestao';
import { Usuario } from '../../_models/usuario';
import { HeaderService } from '../../header/header.service';

@Component({
  selector: 'app-sugestao',
  templateUrl: './sugestao.component.html',
  styleUrls: ['./sugestao.component.css']
})
export class SugestaoComponent implements OnInit {

  form: FormGroup;

    constructor(private formBuilder: FormBuilder, 
        private tokenService: TokenService,
        private sugestaoService: SugestaoService,
        private headerService: HeaderService) { 
            this.headerService.menuAtivo('TI');
        }

    ngOnInit(): void {

        this.form = this.formBuilder.group({
            sugestao: ['', Validators.required]
        });
    }

    enviarSugestao() {
        if (this.form.valid && !this.form.pending) {
            const formulario = this.form.getRawValue() as FormularioSugestao;

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

            this.sugestaoService.enviarFormulario(formulario).subscribe(
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