import { OnInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from '../../../../app/_shared/services/loading.service';
import { EmailService } from '../../../../app/_shared/services/email.service';
import Swal from 'sweetalert2';
import { Contato } from '../../../../app/_shared/services/contato';

@Component({
    selector: 'app-site-automacao-email',
    templateUrl: 'site-automacao-email.component.html',
    styleUrls: ['site-automacao-email.component.css']
})
export class SiteAutomacaoEmailComponent implements OnInit{

    form: FormGroup;

    constructor(private formBuilder: FormBuilder,
        private loadingService: LoadingService,
        private emailService: EmailService) { }

    ngOnInit(): void {
        this.montaForm();
    }

    montaForm() {
        this.form = this.formBuilder.group({
            nome: ["", Validators.required],
            empresaAreaAtuacao: ["", Validators.required],
            email: ["", [Validators.required, Validators.email]],
            telefone: ["", Validators.required],
            assunto: ["", Validators.required],
            mensagem: ["", Validators.required],
        });
    }

    enviar() {
        if (this.form.valid) {
            let modelForm = this.form.getRawValue() as Contato;
            modelForm.tipo = 'Automacao';
            
            this.loadingService.show();

            this.emailService.enviarContato(modelForm).subscribe(
                res => this.enviarSuccess(res),
                err => this.enviarError(err)
            );
        }
        else {
            Object.keys(this.form.controls).forEach(key => {
                this.form.get(key).markAsTouched();
            });
        }

    }
    enviarError(err: any): void {
        console.log(err);
        this.loadingService.hide();

        Swal.fire(
            'Ocorreu um erro!',
            'Tente novamente mais tarde.',
            'error'
        )
    }
    abrirChamado(){
        window.open('https://elginbematech.com.br/chamado');
    }
    enviarSuccess(res: Object): void {
        this.loadingService.hide();
        this.form.reset();
        
        Swal.fire(
            'Contato enviado com sucesso!',
            '',
            'success'
        )
    }

}