import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SiteSolarService } from '../site-solar-calculo/site.solar.service';
import { ResultadoSolar } from '../site-solar-calculo/resultadoSolar';
import Swal from 'sweetalert2';
import { LoadingService } from '../../../../app/_shared/services/loading.service';

@Component({
  selector: 'app-email-solar',
  templateUrl: './site.email-solar.component.html',
  styleUrls: ['./site.email-solar.component.css']
})
export class SiteEmailSolarComponent implements OnInit {

  emailForm: FormGroup;

  @Input()
  resultado: ResultadoSolar;

  constructor(
    private solarService: SiteSolarService,
    private loadingService: LoadingService,
    private formBuilder: FormBuilder) { }



  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      nome: ["", [Validators.required]]
    });
  }

  enviarEmail() {
    if (this.emailForm.valid && !this.emailForm.pending) {

      this.resultado.nome = this.emailForm.controls["nome"].value;
      this.resultado.email = this.emailForm.controls["email"].value;

      this.loadingService.show();

      this.solarService.postEmail(this.resultado).subscribe(
        ret => this.getEmailSuccess(ret),
        err => this.getEmailError(err)
      );
    }
    else {
      Swal.fire(
        'Atenção',
        'Preencha corretamente os campos Nome e E-mail',
        'warning'
      );
    }
  }

  getEmailSuccess(ret: boolean): void {

    this.loadingService.hide();

    Swal.fire(
      'E-mail enviado com sucesso!',
      '',
      'success'
    );

    this.emailForm.reset();
  }

  getEmailError(err: any): void {

    this.loadingService.hide();
    
    console.log('erro ao enviar email: ' + err.message);

    Swal.fire(
      'Ocorreu um erro ao tentar enviar o e-mail!',
      '',
      'error'
    );
  }
}