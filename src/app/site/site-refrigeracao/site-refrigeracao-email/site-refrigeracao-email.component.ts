import { OnInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from '../../../../app/_shared/services/loading.service';
import { EmailService } from '../../../../app/_shared/services/email.service';
import Swal from 'sweetalert2';
import { Contato } from '../../../../app/_shared/services/contato';
import { TraducaoService } from '../../_shared/services/traducao.service';

@Component({
    selector: 'app-site-refrigeracao-email',
    templateUrl: 'site-refrigeracao-email.component.html',
    styleUrls: ['site-refrigeracao-email.component.css']
})
export class SiteRefrigeracaoEmailComponent implements OnInit {

    form: FormGroup;
    idioma: number;

    constructor(private formBuilder: FormBuilder,
        private loadingService: LoadingService,
        private emailService: EmailService,
        private traducao: TraducaoService) {

        let idiomaSelecionado = this.traducao.getIdioma();
        this.idioma = idiomaSelecionado == 'pt' ? 1 : idiomaSelecionado == 'en' ? 2 : 3;
    }

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
            modelForm.tipo = 'Refrigeracao';

            this.loadingService.show();

            this.emailService.enviarContatoIdioma(modelForm, this.idioma).subscribe(
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