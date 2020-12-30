import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../../app/_shared/services/loading.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from '../../../app/_core/services/token.service';
import Swal from 'sweetalert2';
import { PasswordValidation } from '../../../app/_shared/validators/password/password.validator';
import * as CryptoJS from 'crypto-js';
import { AdmUsuarioService } from '../adm/adm-usuario/adm-usuario.service';
import { NovaSenha } from './novaSenha';
import { Linha } from '../../../app/_models/linha';
import { SubLinha } from '../../../app/_models/subLinha';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

    passo: number = 1;

    formLogin: FormGroup

    formResetar: FormGroup

    formNovaSenha: FormGroup
    linhas: Linha[];

    constructor(private loadingService: LoadingService,
        private tokenService: TokenService,
        private usuarioService: AdmUsuarioService,
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private router: Router) { }

    ngOnInit(): void {
        this.linhas = this.activatedRoute.snapshot.data['linhas'];
    
        this.formLogin = this.formBuilder.group({

            login: ['', [Validators.required]],
            senha: ['', [Validators.required]]
        });
    }

    initFormResetar(){
        this.formResetar = this.formBuilder.group({
            codigo: ['', [Validators.required]]
        });
    }

    initFormNovaSenha(){
        this.formNovaSenha = this.formBuilder.group({
            password: ['', [Validators.required]],
            confirmPassword: ['', [Validators.required]]
        });

        this.formNovaSenha.setValidators([PasswordValidation.MatchPassword]);
    }

    hasErrorLogin(id): boolean {
        return this.formLogin.get(id).invalid && (this.formLogin.get(id).dirty || this.formLogin.get(id).touched)
    }

    hasErrorResetar(id): boolean {
        return this.formResetar.get(id).invalid && (this.formResetar.get(id).dirty || this.formResetar.get(id).touched)
    }

    hasErrorNovaSenha(id): boolean {
        return this.formNovaSenha.get(id).invalid && (this.formNovaSenha.get(id).dirty || this.formNovaSenha.get(id).touched)
    }

    recuperarSenha() {

        if (this.formLogin.controls["login"].valid) {
            this.loadingService.show();

            this.usuarioService.resetarSenha(this.formLogin.controls["login"].value).subscribe(
                res => this.resetarSuccess(res),
                err => this.resetarError(err)
            )
        }
        else {
            this.formLogin.get("login").markAsTouched();

            Swal.fire(
                'Atenção',
                'Preencha o CPF para resetar a senha.',
                'warning'
            );

            return;
        }

        
    }
    resetarError(err: any): void {

        console.log(err);

        this.loadingService.hide();

        Swal.fire(
            'Atenção',
            'Não foi possível resetar a senha. Verifique o CPF informado.',
            'warning'
        );
    }
    resetarSuccess(res: boolean): void {
        this.loadingService.hide();

        if(res){
            this.passo = 2;
            this.initFormResetar();

            Swal.fire(
                'Alteração de Senha',
                'Para prosseguir você precisará do código que foi enviado para o seu e-mail.',
                'warning'
            );
        }
        else{
            Swal.fire(
                'Atenção',
                'Não foi possível resetar a senha. Verifique o CPF informado.',
                'warning'
            );
        }
    }

    enviarCodigo() {

        if (this.formResetar.controls["codigo"].valid) {

            this.loadingService.show();

            this.usuarioService.validarCodigo(
                this.formLogin.controls["login"].value, 
                this.formResetar.controls["codigo"].value
            ).subscribe(
                res => this.validarSuccess(res),
                err => this.validarError(err)
            )

        }        
    }

    validarError(err: any): void {
        console.log(err);
        
        this.loadingService.hide();

        Swal.fire(
            'Atenção',
            'Código inválido.',
            'warning'
        );
    }

    validarSuccess(res: string): void {
        this.loadingService.hide();

        if(res){
            this.passo = 3;
            this.initFormNovaSenha();
        }
        else{
            Swal.fire(
                'Atenção',
                'Código inválido.',
                'warning'
            );
        }
    }

    login() {
        if (this.formLogin.valid && !this.formLogin.pending) {

            this.loadingService.show();

            let senha = CryptoJS.HmacSHA1(this.formLogin.controls["senha"].value, 'PorElg2ER019intal').toString();
            
            this.tokenService
                    .setToken(this.formLogin.controls["login"].value, senha)
                    .subscribe(
                        res => this.loginSuccess(res),
                        err => this.loginError(err)
                    );
        }
        else {
            Object.keys(this.formLogin.controls).forEach(key => {
                this.formLogin.get(key).markAsTouched();
            });
            return;
        }
    }

    loginError(err: any): void {
        console.log(err);
        
        this.loadingService.hide();

        Swal.fire(
            'Atenção',
            'Login/Senha inválidos.',
            'warning'
        );
    }

    loginSuccess(res: string): void {
        this.loadingService.hide();

        this.tokenService.getTokenSuccess(res);

        this.router.navigate(["PortaldeApoio/RH"]);
    }

    alterarSenha() {
        if (this.formNovaSenha.valid && !this.formNovaSenha.pending) {

            let senha = CryptoJS.HmacSHA1(this.formNovaSenha.controls["password"].value, 'PorElg2ER019intal').toString();
            
            let model = {
                login: this.formLogin.controls["login"].value,
                codigo:  this.formResetar.controls["codigo"].value,
                senha: senha
            } as NovaSenha;

            this.usuarioService.alterarSenha(model).subscribe(
                res => this.alterarSenhaSuccess(res),
                err => this.alterarSenhaError(err)
            );
        }
        else {
            Object.keys(this.formNovaSenha.controls).forEach(key => {
                this.formNovaSenha.get(key).markAsTouched();
            });

            if(this.formNovaSenha.controls["password"].value != this.formNovaSenha.controls["confirmPassword"].value)
            {
                Swal.fire(
                    'Atenção',
                    'Senhas não são iguais.',
                    'warning'
                );
            }
            else if(this.formNovaSenha.controls["password"].value.length < 6){
                Swal.fire(
                    'Atenção',
                    'A senha deve ter no mínimo 6 dígitos.',
                    'warning'
                );
            }
            else{
                Swal.fire(
                    'Atenção',
                    'Preencha os campos.',
                    'warning'
                );
            }

            return;
        }
    }
    alterarSenhaError(err: any): void {
        console.log(err);
        
        this.loadingService.hide();

        Swal.fire(
            'Erro',
            'Não foi possível alterar a senha.',
            'error'
        );
    }
    alterarSenhaSuccess(res: boolean): void {
        if(res){
            this.passo = 1;

            Swal.fire(
                'Senha alterada com sucesso',
                '',
                'success'
            );
        }else{
            Swal.fire(
                'Erro',
                'Não foi possível alterar a senha.',
                'error'
            );
        }
    }

    cancelar(){
        this.passo = 1;
    }
}