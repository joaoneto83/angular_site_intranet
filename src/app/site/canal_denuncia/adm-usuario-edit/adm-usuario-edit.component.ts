import { OnInit, Component, Input, ViewChild, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

import { LoadingService } from '../../../_shared/services/loading.service';



import { CpfCnpjValidator } from '../../../_shared/validators/cpf-cnpj.validator/cpf-cnpj.validator';


import { TipoUsuario } from '../../../intranet/_models/tipoUsuario';
import { Dependente } from '../../../intranet/_models/dependente';
import { TipoDependente } from '../../../intranet/_models/tipoDependente';
import { Arquivo } from '../../../_models/Arquivo';
import { CadastrosExternoService } from '../cadastrosExterno.service';
import { SetorService } from 'src/app/intranet/_shared/services/setor.service';
import { Setor } from 'src/app/intranet/_models/setor';
import { UploadFileComponent } from 'src/app/intranet/_shared/upload-file/upload.file.component';
import { Perfil } from 'src/app/intranet/_models/perfil';
import { PerfilService } from 'src/app/intranet/adm/adm-perfil/adm-perfil.service';
import { Denuncia } from '../../_models/denuncia';

@Component({
    selector: 'app-adm-denuncia-edit',
    templateUrl: 'adm-usuario-edit.component.html',
    styleUrls: ['adm-usuario-edit.component.css']
})
export class CriaUsuarioExternoComponent implements OnInit, OnChanges {


    
    denuncia: Denuncia;
    messagemProtocolo: string;
    perguntas:Boolean;
    simQuero:boolean;
    isRepresentante: boolean = false;
    protocolo:boolean;

    @ViewChild("upload")
    upload: UploadFileComponent;

    @Output()
    atualizar: EventEmitter<null> = new EventEmitter<null>();

    denunciaForm: FormGroup;

    constructor(private service: CadastrosExternoService,
        private perfilService: PerfilService,
        private formBuilder: FormBuilder,
        private loadingService: LoadingService,
        private setorService: SetorService,
        private activatedRoute: ActivatedRoute) {

         
         }

   
         ngOnInit(): void {
            this.activatedRoute.params.subscribe(routeParams => {
                this.denuncia = this.activatedRoute.snapshot.data['denuncia'];
            
            });
    
            if (!this.denuncia) {
                this.denuncia = {  ativo: true } as Denuncia;
            }
         
              this.protocolo = true;
            this.montaForm();
        }

    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        this.montaForm();
    }
   sim(){
       console.log(this.simQuero )
       this.perguntas = true;
       this.simQuero = true;
   }
   nao(){
    this.perguntas = true;
    this.simQuero = false;
   }

    montaForm() {
        this.denunciaForm = this.formBuilder.group({
            nome: [this.denuncia.nome],
            empresa: [this.denuncia.empresa],
            email: [this.denuncia.email],
            telefone: [this.denuncia.telefone],
            celular: [this.denuncia.celular],
            protocolo: [this.denuncia.protocolo],
            permitir: [true],
            ativo: [false],
            pergunta1: [this.denuncia.pergunta1],
            pergunta2: [this.denuncia.pergunta2],
            pergunta3: [this.denuncia.pergunta3],
            pergunta4: [this.denuncia.pergunta4],
            pergunta5: [this.denuncia.pergunta5],
            pergunta6: [this.denuncia.pergunta6],
            pergunta7: [this.denuncia.pergunta7],
            pergunta8: [this.denuncia.pergunta8],
            pergunta9: [this.denuncia.pergunta9],
            pergunta10: [this.denuncia.pergunta10],
            pergunta11: [this.denuncia.pergunta11],
            pergunta12: [this.denuncia.pergunta12]
        });
    }

    pesquisaProtolo(){
        const denuncia = this.denunciaForm.getRawValue() as Denuncia;
        console.log(denuncia.protocolo);

        this.service.getProtocolo(denuncia.protocolo).subscribe(
            res => this.denuncia = res,
            err => console.log(err)
        )
      this.protocolo = false;
    }

   volta(){
    this.protocolo = true; 
   }

    getPerfisError(err: any): void {
        console.log(err);
    }

    salvar() {

        if (this.denunciaForm.valid && !this.denunciaForm.pending) {
            this.loadingService.show();
           

            const denuncia = this.denunciaForm.getRawValue() as Denuncia;

            const aleatorio = Math.floor(Math.random() * 65536);
            const texto = Math.random().toString(36).replace(/[^a-z]+/s, '').substr(0, 3);
            const pr =  texto + aleatorio ;
            
            denuncia.protocolo = pr;
          
            denuncia.id = "3dee605a-5d33-5e3e-1491-95e84dc82eb3";

        //     const formData = new FormData(); 
        // formData.append("model", JSON.stringify(this.denuncia)); 

        // this.service.salvar(formData).subscribe(
        //     res => this.salvarSuccess(res),
        //     err => this.salvarError(err)
        // );

            this.service.salvar(denuncia).subscribe(
                res => this.salvarSuccess(res),
                err => this.salvarError(err)
            );
            this.messagemProtocolo = denuncia.protocolo;
            console.log("messagem",   this.messagemProtocolo);
           
            }
            
            else {
                Object.keys(this.denunciaForm.controls).forEach(key => {
                    this.denunciaForm.get(key).markAsTouched();
                });
                
            }
           
    }

   

    validaLoginSuccess(res: boolean): void {

        const denuncia = this.denunciaForm.getRawValue() as Denuncia;
        const formData = new FormData();

        if (this.upload && this.upload.file) {
            formData.append("idPai", this.upload.idPai);
            formData.append("caminho", this.upload.caminho);
            formData.append("nomeArquivo", this.upload.nomeArquivo);

            formData.append(this.upload.file.name, this.upload.file);
        }

        formData.append("model", JSON.stringify(this.denuncia)); 

        this.service.salvar(denuncia).subscribe(
            res => this.salvarSuccess(res),
            err => this.salvarError(err)
        );
        this.service.denuncia(denuncia).subscribe(
            );
    }

    enviaEmail(){
        const denuncia = this.denunciaForm.getRawValue() as Denuncia;
        const formData = new FormData();
        formData.append("model", JSON.stringify(this.denuncia));
        this.service.denuncia(denuncia).subscribe(
        );
    }

    salvarError(err: any): void {
        console.log(err);
        this.loadingService.hide();
    }

    salvarSuccess(res: boolean): void {
        this.loadingService.hide();

        if (res) {
            // this.atualizar.emit();

            Swal.fire(
                this.messagemProtocolo,
                 'protocolo' ,
                 
            );
            // this.enviaEmail();
            this.enviaEmail();
        }
        else {
            Swal.fire(
                'Erro',
                'problema na conexão',
                'error'
            );
        }
    }
   
}