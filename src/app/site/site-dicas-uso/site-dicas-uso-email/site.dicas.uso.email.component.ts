import { OnInit, Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from '../../../../app/_shared/services/loading.service';
import { EmailService } from '../../../../app/_shared/services/email.service';
import { Contato } from '../../../../app/_shared/services/contato';
import Swal from 'sweetalert2';
import { Linha } from '../../../../app/_models/linha';

@Component({
    selector: 'app-site-dicas-uso-email',
    templateUrl: 'site.dicas.uso.email.component.html',
    styleUrls: ['site.dicas.uso.email.component.css']
})
export class SiteDicasUsoEmailComponent implements OnInit {

    form: FormGroup;

    @Input()
    linhas: Linha[];


    nomeLinha:string; 

    constructor(private formBuilder: FormBuilder,
        private loadingService: LoadingService,
        private emailService: EmailService) { }

    ngOnInit(): void {
        this.montaForm();
    }

    montaForm() {
        this.form = this.formBuilder.group({
            nome: ["", Validators.required],
            cpf: ["", Validators.required],
            email: ["", [Validators.required, Validators.email]],
            telefone: ["", Validators.required],
            idLinha: ["", Validators.required],
            mensagem: ["", Validators.required],
        });
    }

    enviar() {
        if (this.form.valid) {
            let modelForm = this.form.getRawValue() as Contato;
        if (modelForm.idLinha == "fb0026c2-8025-40ce-9b83-b73c45aaf0c0"){
            modelForm.tipo = 'Automacao';
            this.loadingService.show();
            this.emailService.enviarContato(modelForm).subscribe(
                res => this.enviarSuccess(res),
                err => this.enviarError(err)
            );
        }
        else if (modelForm.idLinha == "41a60c5f-214c-48a3-8790-ce5f09df0c6f"){
            modelForm.tipo = 'ElginPay';
            this.loadingService.show();
            this.emailService.enviarContato(modelForm).subscribe(
                res => this.enviarSuccess(res),
                err => this.enviarError(err)
            );
        }
        else if (modelForm.idLinha == "ca36c340-6114-4f9e-8ae2-9dd0c48811a4"){

            modelForm.tipo = "Climatizacao";

            this.loadingService.show();

            this.emailService.enviarContato(modelForm).subscribe(
                res => this.enviarSuccess(res),
                err => this.enviarError(err)
            );

        }
        if (modelForm.idLinha == "93c8097a-6b91-476c-af2b-ae594f944bf1"){

            modelForm.tipo = "MaquinaSorvete";

            this.loadingService.show();

            this.emailService.enviarContato(modelForm).subscribe(
                res => this.enviarSuccess(res),
                err => this.enviarError(err)
            );

        }
        if (modelForm.idLinha == "5a5db81d-1d1f-4b3a-9076-b191a9004545"){

            modelForm.tipo = "Informatica";

            this.loadingService.show();

            this.emailService.enviarContato(modelForm).subscribe(
                res => this.enviarSuccess(res),
                err => this.enviarError(err)
            );

        }
        if (modelForm.idLinha == "9ba3f3a1-7759-4d2d-8cf4-d536abfc3041"){

            modelForm.tipo = "Refrigeracao";

            this.loadingService.show();

            this.emailService.enviarContato(modelForm).subscribe(
                res => this.enviarSuccess(res),
                err => this.enviarError(err)
            );

        }
        if (modelForm.idLinha == "a0864ed1-c2bd-4064-9ade-e188d0492867"){

            modelForm.tipo = "Costura"; 

            this.loadingService.show();

            this.emailService.enviarContato(modelForm).subscribe(
                res => this.enviarSuccess(res),
                err => this.enviarError(err)
            );

        }
        if (modelForm.idLinha == "7976fbc7-bfd9-4165-81bb-4832497483d4"){

            modelForm.tipo = "Telefonia";

            this.loadingService.show();

            this.emailService.enviarContato(modelForm).subscribe(
                res => this.enviarSuccess(res),
                err => this.enviarError(err)
            );

        }
        if (modelForm.idLinha == "ae38bec9-6ef3-491e-9801-083706f40dfb"){

            modelForm.tipo = "EnergiaSolar";

            this.loadingService.show();

            this.emailService.enviarContato(modelForm).subscribe(
                res => this.enviarSuccess(res),
                err => this.enviarError(err)
            );

        }
        if (modelForm.idLinha == "76d54a01-f858-4275-8cd8-6fcc0c820f91"){

            modelForm.tipo = "Iluminacao";

            this.loadingService.show();

            this.emailService.enviarContato(modelForm).subscribe(
                res => this.enviarSuccess(res),
                err => this.enviarError(err)
            );

        }
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