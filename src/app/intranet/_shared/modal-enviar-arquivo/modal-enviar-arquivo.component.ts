import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LoadingService } from '../../../../app/_shared/services/loading.service';
import Swal from 'sweetalert2';
import { EmailService } from '../../../../app/_shared/services/email.service';
import { Usuario } from '../../_models/usuario';
import { TokenService } from '../../../../app/_core/services/token.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-modal-enviar-arquivo',
    templateUrl: './modal-enviar-arquivo.component.html',
    styleUrls: ['./modal-enviar-arquivo.component.css']
})
export class ModalEnviarArquivoComponent implements OnInit {

    @Input()
    idArquivo: string;

    emailPara: string;
    formEmail: FormGroup;
    usuario: Usuario;
    closeResult: string;

    @ViewChild('content')
    divContent: ElementRef<HTMLInputElement>;

    constructor(private modalService: NgbModal,
        private emailService: EmailService,
        private loadingService: LoadingService,
        private formBuilder: FormBuilder,
        private tokenService: TokenService) { }

    ngOnInit(): void {
        this.montaForm();
        this.tokenService.getUser().subscribe(
            res => this.usuario = res
        )
    }

    montaForm() {
        this.formEmail = this.formBuilder.group({
            emailPara: ["", [Validators.required, Validators.email]]
        });
    }

    open(idArquivo) {
        this.idArquivo = idArquivo;
        
        this.modalService.open(this.divContent, { size: "lg" }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    close() {
        this.modalService.dismissAll();
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    enviar() {
        if (this.formEmail.valid && !this.formEmail.pending) {
            let modelForm = this.formEmail.getRawValue();
            this.emailPara = modelForm.emailPara;

            this.emailService.getEnviarArquivo(this.idArquivo, this.usuario.id, this.emailPara).subscribe(
                res => this.getEnviarArquivoSuccess(res),
                err => this.getEnviarArquivoError(err),
            );

        }
        else {
            Object.keys(this.formEmail.controls).forEach(key => {
                this.formEmail.get(key).markAsTouched();
            });
        }
    }

    getEnviarArquivoSuccess(res) {
        this.modalService.dismissAll();
        this.loadingService.hide();
        this.formEmail.reset();
        setTimeout(() => {
            Swal.fire('Sucesso!', 'Arquivo enviado com sucesso.', 'success');
        }, 500);
    }

    getEnviarArquivoError(err) {
        this.loadingService.hide();
        console.log('erro enviando email de arquivo: ' + err.message);
        Swal.fire('Erro', 'Erro ao enviar Email.', 'error');
    }

    validarEmail() {
        let formgroup = $('#inputNomeTabela');
        let labelObrigatorio = $('#spanObrigatorio');
        let labelEmailInvalido = $('#spanEmailInvalido');

        if (this.emailPara == '') {
            formgroup.classList.add('has-danger');
            labelObrigatorio.style.display = 'block';
        }
        else {
            formgroup.classList.remove('has-danger');
            labelObrigatorio.style.display = 'none';
        }
    }
}