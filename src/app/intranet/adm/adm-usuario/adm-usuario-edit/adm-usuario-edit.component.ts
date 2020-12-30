import { OnInit, Component, Input, ViewChild, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../../../_models/usuario';
import { AdmUsuarioService } from '../adm-usuario.service';
import { LoadingService } from '../../../../_shared/services/loading.service';
import { PerfilService } from '../../adm-perfil/adm-perfil.service';
import { Perfil } from '../../../_models/perfil';
import { UploadFileComponent } from '../../../_shared/upload-file/upload.file.component';
import { CpfCnpjValidator } from '../../../../_shared/validators/cpf-cnpj.validator/cpf-cnpj.validator';
import { Setor } from '../../../_models/setor';
import { SetorService } from '../../../_shared/services/setor.service';
import { TipoUsuario } from '../../../../intranet/_models/tipoUsuario';
import { Dependente } from '../../../../intranet/_models/dependente';
import { TipoDependente } from '../../../../intranet/_models/tipoDependente';
import { Arquivo } from '../../../../_models/Arquivo';
@Component({
    selector: 'app-adm-usuario-edit',
    templateUrl: 'adm-usuario-edit.component.html',
    styleUrls: ['adm-usuario-edit.component.css']
})
export class AdmUsuarioEditComponent implements OnInit, OnChanges {


    @Input()
    usuario: Usuario = { dependentes: [], arquivo: {} as Arquivo } as Usuario;

    perfis: Perfil[];

    setores: Setor[];

    @Input()
    tiposUsuario: TipoUsuario[];

    @Input()
    tiposDependente: TipoDependente[];

    isRepresentante: boolean = false;

    @Input()
    meusDados: boolean = false;

    @ViewChild("upload")
    upload: UploadFileComponent;

    @Output()
    atualizar: EventEmitter<null> = new EventEmitter<null>();

    usuarioForm: FormGroup;

    public cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    public tel8 = [/\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    public tel9 = [/\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    constructor(private service: AdmUsuarioService,
        private perfilService: PerfilService,
        private formBuilder: FormBuilder,
        private loadingService: LoadingService,
        private setorService: SetorService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
       
        this.carregaForm();
          

        this.perfilService.getPerfis().subscribe(
            res => this.getPerfisSuccess(res),
            err => this.getPerfisError(err)
        );

        this.setorService.getSetores().subscribe(
            res => this.setores = res,
            err => console.log(err)
        );
    }

    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        this.carregaForm();
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

    carregaForm() {
        if (this.usuario) {
            this.usuarioForm = this.formBuilder.group({
                nome: [this.usuario.nome, Validators.required],
                login: [this.usuario.login, [Validators.required, CpfCnpjValidator]],
                //ativo: [this.usuario.ativo, Validators.required],
                email: [this.usuario.email, [Validators.required, Validators.email]],
                idPerfil: [this.usuario.idPerfil ? this.usuario.idPerfil : '', Validators.required],
                dataNascimento: [this.usuario.dataNascimento, Validators.required],
                idSetor: [this.usuario.idSetor ? this.usuario.idSetor : ''],
                telefone: [this.usuario.telefone],
                registro: [this.usuario.registro],

                endereco: [this.usuario.endereco],
                bairro: [this.usuario.bairro],
                cidade: [this.usuario.cidade],
                escolaridade: [this.usuario.escolaridade],
                estadoCivil: [this.usuario.estadoCivil],
                comoSerChamado: [this.usuario.comoSerChamado],
                celular: [this.usuario.celular],
                contatoEmergencia: [this.usuario.contatoEmergencia],
                nomeContatoEmergencia: [this.usuario.nomeContatoEmergencia],
                //emailAniversariante: [this.usuario.emailAniversariante],
                idTipoUsuario: [this.usuario.idTipoUsuario ? this.usuario.idTipoUsuario : '', Validators.required],
            });

            //if (!this.meusDados)
            this.tipoUsuarioSelecionado(this.usuario.idTipoUsuario);

            if (!this.usuario.arquivo)
                this.usuario.arquivo = {} as Arquivo;

        } else {
            this.usuarioForm = this.formBuilder.group({
                nome: ['', Validators.required],
                login: ['', [Validators.required, CpfCnpjValidator]],
                //ativo: [false, Validators.required],
                email: ['', [Validators.required, Validators.email]],
                idPerfil: ['', Validators.required],
                dataNascimento: ['', Validators.required],
                idSetor: [''],
                telefone: [''],
                registro: [''],
                endereco: [''],
                bairro: [''],
                cidade: [''],
                escolaridade: [''],
                estadoCivil: [''],
                comoSerChamado: [''],
                celular: [''],
                contatoEmergencia: [''],
                nomeContatoEmergencia: [''],
                //emailAniversariante: [false],
                idTipoUsuario: ['', Validators.required]
            });

        }
    }

    getPerfisError(err: any): void {
        console.log(err);
    }

    getPerfisSuccess(res: Perfil[]): void {
        this.perfis = res;
    }

    retornaArquivo(file: File) {
    }

    salvar() {
        console.log(this.usuario)
        if (!this.usuarioForm.valid && !this.usuarioForm.pending) {
            Swal.fire(
                'Atenção',
                'Preencha os campos obrigatórios.',
                'warning'
            );
            return;
        }

        if(!this.dependentesValidos()){
            Swal.fire(
                'Atenção',
                'Algum dependente não possui o nome ou o tipo preenchido. Por favor verifique os campos.',
                'warning'
            );
            return;
        }

        const usuario = this.usuarioForm.getRawValue() as Usuario;

        if (!this.isRepresentante && !usuario.comoSerChamado) {
            Swal.fire(
                'Atenção',
                'Preencha o campo: "Como quer ser chamado".',
                'warning'
            );
            return;
        }

        this.usuario.nome = usuario.nome;
        this.usuario.login = usuario.login;
        this.usuario.email = usuario.email;
        this.usuario.dataNascimento = usuario.dataNascimento;
        this.usuario.idSetor = usuario.idSetor;
        this.usuario.telefone = usuario.telefone;
        this.usuario.registro = usuario.registro;
        this.usuario.endereco = usuario.endereco;
        this.usuario.bairro = usuario.bairro;
        this.usuario.cidade = usuario.cidade;
        this.usuario.escolaridade = usuario.escolaridade;
        this.usuario.estadoCivil = usuario.estadoCivil;
        this.usuario.comoSerChamado = usuario.comoSerChamado;
        this.usuario.celular = usuario.celular;
        this.usuario.contatoEmergencia = usuario.contatoEmergencia;
        this.usuario.idTipoUsuario = usuario.idTipoUsuario;
        this.usuario.nomeContatoEmergencia = usuario.nomeContatoEmergencia;

        if (!this.meusDados) {
            this.usuario.idPerfil = usuario.idPerfil;
        }

        this.loadingService.show();

        this.service.validaLogin(this.usuario).subscribe(
            res => this.validaLoginSuccess(res),
            err => this.validaLoginError(err)
        )


    }

    dependentesValidos() {
        let cont = 0
        this.usuario.dependentes.forEach(x => {
            if(!x.nomeDependente || !x.idTipoDependente){
                cont++;
            }
        });
        
        return cont == 0;
    }

    validaLoginError(err: any): void {
        console.log(err);

        this.loadingService.hide();

        Swal.fire(
            'Erro',
            'Ocorreu um erro ao validar o CPF.',
            'error'
        );
    }

    validaLoginSuccess(res: boolean): void {

        if (!res) {
            Swal.fire(
                'Atenção',
                'CPF já cadastrado.',
                'warning'
            );

            this.loadingService.hide();

            return;
        }

        const formData = new FormData();

        if (this.upload && this.upload.file) {
            formData.append("idPai", this.upload.idPai);
            formData.append("caminho", this.upload.caminho);
            formData.append("nomeArquivo", this.upload.nomeArquivo);

            formData.append(this.upload.file.name, this.upload.file);
        }

        formData.append("model", JSON.stringify(this.usuario));

        this.service.salvar(formData).subscribe(
            res => this.salvarSuccess(res),
            err => this.salvarError(err)
        );
    }

    salvarError(err: any): void {
        console.log(err);
        this.loadingService.hide();
    }

    salvarSuccess(res: boolean): void {
        this.loadingService.hide();

        if (res) {
            this.atualizar.emit();

            Swal.fire(
                'Usuário salvo com sucesso!',
                '',
                'success'
            );
        }
        else {
            Swal.fire(
                'Erro',
                'Ocorreu um erro ao salvar o usuário.',
                'error'
            );
        }
    }

    removerFoto(caminho: string) {
        this.usuario.caminhoFoto = null;
    }

    tipoUsuarioSelecionado(id) {
        if (id) {
            let tipoUsuarioSelecionado = this.tiposUsuario.find(x => x.id == id).codigoTipoUsuario;

            if (tipoUsuarioSelecionado == 'Representante')
                this.isRepresentante = true;
            else
                this.isRepresentante = false;
        }
    }

    adicionarDependente() {
        this.usuario.dependentes.push({ id: '00000000-0000-0000-0000-000000000000', idTipoDependente: '' } as Dependente);
    }


    removeDependente(index) {
        Swal.fire({
            title: 'Deseja excluir este dependente?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {
                this.usuario.dependentes.splice(index, 1);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Exclusão Cancelada',
                    'Operação cancelada pelo usuário',
                    'error'
                )
            }
        });
    }

    getRespostaArquivo(event) {
        this.usuario.arquivo.nomeArquivo = event.arquivo.split('_').pop();
        this.usuario.arquivo.caminho = event.caminho;
        this.usuario.arquivo.codigoTipoArquivo = 'curriculo';
        this.usuario.arquivo.id = '00000000-0000-0000-0000-000000000000';
        this.usuario.arquivo.idPai = '00000000-0000-0000-0000-000000000000';
    }
}