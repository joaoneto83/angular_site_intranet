import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioCompra } from './formularioCompra';
import { CpfCnpjValidator } from '../../../../_shared/validators/cpf-cnpj.validator/cpf-cnpj.validator';

@Component({
  selector: 'app-site-formulario-compra',
  templateUrl: './site-formulario-compra.component.html',
  styleUrls: ['./site-formulario-compra.component.css']
})
export class SiteFormularioCompraComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private carrinhoService: CarrinhoService) { }

  form: FormGroup;
  //formularioCompra: FormularioCompra = { isPessoaFisica: true } as FormularioCompra;
  isPessoaFisica: boolean = true;
  caminhoEmpresa = '/assets/img/Site/Gelatta/icon-empresa.svg';
  caminhoPessoaFisica = '/assets/img/Site/Gelatta/icon-pessoa-fisica.svg';

  ngOnInit() {
    this.montaForm();
    this.mudarImagem();
  }

  public tel8 = [/\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public tel9 = [/\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  mudarImagem() {
    if (!this.isPessoaFisica) {
      this.caminhoEmpresa = '/assets/img/Site/Gelatta/icon-empresa-branco.svg';
      this.caminhoPessoaFisica = '/assets/img/Site/Gelatta/icon-pessoa-fisica.svg';
    }
    else if (this.isPessoaFisica) {
      this.caminhoPessoaFisica = '/assets/img/Site/Gelatta/icon-pessoa-fisica-branco.svg';
      this.caminhoEmpresa = '/assets/img/Site/Gelatta/icon-empresa.svg';
    }
  }

  montaForm() {
    let formCarrinho = this.carrinhoService.getFormulario();
    if (!formCarrinho) {
      this.form = this.formBuilder.group({
        nomeCompleto: ["", Validators.required],
        endereco: ["", Validators.required],
        numero: ["", Validators.required],
        cep: ["", Validators.required],
        cidade: ["", Validators.required],
        estado: ["", Validators.required],
        bairro: ["", Validators.required],
        telefone: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        cpf: ["", [Validators.required, CpfCnpjValidator]],
        rg: ["", Validators.required],
        razaoSocial: ["", Validators.required],
        cnpj: ["", [Validators.required, CpfCnpjValidator]],
        inscricaoEstadual: ["", Validators.required]
      });
    }
    else {
      this.form = this.formBuilder.group({
        nomeCompleto: [formCarrinho.nomeCompleto, Validators.required],
        endereco: [formCarrinho.endereco, Validators.required],
        numero: [formCarrinho.numero, Validators.required],
        cep: [formCarrinho.cep, Validators.required],
        cidade: [formCarrinho.cidade, Validators.required],
        estado: [formCarrinho.estado, Validators.required],
        bairro: [formCarrinho.bairro, Validators.required],
        telefone: [formCarrinho.telefone, Validators.required],
        email: [formCarrinho.email, [Validators.required, Validators.email]],
        cpf: [formCarrinho.cpf, [Validators.required, CpfCnpjValidator]],
        rg: [formCarrinho.rg, Validators.required],
        razaoSocial: [formCarrinho.razaoSocial, Validators.required],
        cnpj: [formCarrinho.cnpj, [Validators.required, CpfCnpjValidator]],
        inscricaoEstadual: [formCarrinho.inscricaoEstadual, Validators.required]
      });

    }
  }

  mask(): any {
    return {
      mask: (value) => {
        if (value.length <= 12)
          return this.tel8;
        else
          return this.tel9;
      },
      modelClean: false,
      guide: false
    };
  }

  validarFormulario() {
    if (!this.form.valid && !this.form.pending) {
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key).markAsTouched();
      });

      let invalid = [];
      let controls = this.form.controls;
      for (const name in controls) {
        if (controls[name].invalid) {
          invalid.push(name);
        }
      }

      if (this.isPessoaFisica) {
        if (invalid.includes("razaoSocial") && invalid.includes("cnpj") && invalid.includes("inscricaoEstadual") && invalid.length == 3) {
          return true;
        }
        return false;
      }
      else {
        if (invalid.includes("nomeCompleto") && invalid.includes("cpf") && invalid.includes("rg") && invalid.length == 3) {
          return true;
        }
        return false;
      }

    }
    else {
      return true;
    }
  }
}
