import { Injectable, OnInit } from '@angular/core';
import { Arquivo as ArquivoOld } from '../../../../app/intranet/_models/arquivo';
import { Logo } from '../../../../app/intranet/_models/logo';
import { Icone } from '../../../../app/intranet/_models/icone';
import { Notificacao } from '../../../../app/intranet/_models/notificacao';
import { ListaTi } from '../../../../app/intranet/_models/lista-ti';
import { Campanha } from '../../../../app/intranet/_models/campanha';

@Injectable({
    providedIn: 'root',
})
export class UtilService implements OnInit {

    ngOnInit(): void {
    }

    retornaLogos(): Logo[] {
        let arquivo1: ArquivoOld[];
        arquivo1 = [{ descricao: '', link: 'teste', tipoArquivo: 'JPG', linque:''  },
        { descricao: '', link: 'teste', tipoArquivo: 'PNG', linque:''  },
        { descricao: '', link: 'teste', tipoArquivo: 'PDF', linque:''  }];

        let arquivo2: ArquivoOld[];
        arquivo2 = [{ descricao: '', link: 'teste', tipoArquivo: 'PDF', linque:''  },
        { descricao: '', link: 'teste', tipoArquivo: 'JPG', linque:''  }];

        let arquivo3: ArquivoOld[];
        arquivo3 = [{ descricao: '', link: 'teste', tipoArquivo: 'JPG', linque:''  },
        { descricao: '', link: 'teste', tipoArquivo: 'PNG', linque:''  }];

        let logos: Logo[];

        logos = [{ nome: 'Logo1', imagemUrl: '../../assets/img/noImage.png', arquivos: arquivo3 },
        { nome: 'Logo2', imagemUrl: '../../assets/img/noImage.png', arquivos: arquivo2 },
        { nome: 'Logo3', imagemUrl: '../../assets/img/noImage.png', arquivos: arquivo3 },
        { nome: 'Logo4', imagemUrl: '../../assets/img/noImage.png', arquivos: arquivo2 },
        { nome: 'Logo5', imagemUrl: '../../assets/img/noImage.png', arquivos: arquivo1 },
        { nome: 'Logo6', imagemUrl: '../../assets/img/noImage.png', arquivos: arquivo1 },
        { nome: 'Logo7', imagemUrl: '../../assets/img/noImage.png', arquivos: arquivo3 },
        { nome: 'Logo8', imagemUrl: '../../assets/img/noImage.png', arquivos: arquivo2 }];

        return logos;
    }

    retornaIcones(): Icone[] {
        let arquivo1: ArquivoOld[];
        arquivo1 = [{ descricao: '', link: 'teste', tipoArquivo: 'JPG', linque:''  },
        { descricao: '', link: 'teste', tipoArquivo: 'PNG', linque:'' },
        { descricao: '', link: 'teste', tipoArquivo: 'PDF', linque:''  }];

        let arquivo2: ArquivoOld[];
        arquivo2 = [{ descricao: '', link: 'teste', tipoArquivo: 'PDF', linque:''  },
        { descricao: '', link: '', tipoArquivo: 'JPG', linque:''  }];

        let arquivo3: ArquivoOld[];
        arquivo3 = [{ descricao: '', link: 'teste', tipoArquivo: 'JPG', linque:''  },
        { descricao: '', link: 'teste', tipoArquivo: 'PNG', linque:''  }];

        let icones: Icone[];

        icones = [{ nome: 'Ícone1', imagemUrl: '../../assets/img/noImage.png', arquivos: arquivo3 },
        { nome: 'Ícone2', imagemUrl: '../../assets/img/noImage.png', arquivos: arquivo2 },
        { nome: 'Ícone3', imagemUrl: '../../assets/img/noImage.png', arquivos: arquivo3 },
        { nome: 'Ícone4', imagemUrl: '../../assets/img/noImage.png', arquivos: arquivo2 },
        { nome: 'Ícone5', imagemUrl: '../../assets/img/noImage.png', arquivos: arquivo1 },
        { nome: 'Ícone6', imagemUrl: '../../assets/img/noImage.png', arquivos: arquivo1 },
        { nome: 'Ícone7', imagemUrl: '../../assets/img/noImage.png', arquivos: arquivo3 },
        { nome: 'Ícone8', imagemUrl: '../../assets/img/noImage.png', arquivos: arquivo2 }];

        return icones;
    }

    retornaBannerMerchan(): Campanha[]{
        let textoExemplo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget rhoncus tortor, '
        + 'at eleifend felis. Phasellus molestie libero id sapien ultrices fringilla. Praesent dapibus ut quam '
        + 'vitae efficitur. Praesent commodo eleifend diam, ac sodales leo placerat eu. Duis iaculis nisi ipsum, '
        + 'convallis fermentum ex porta id. Donec mauris nibh, ultrices et dictum in, sagittis vel nisi. '
        + 'Aenean in dictum massa. In hac habitasse platea dictumst. Nulla eget nisl nisl. Suspendisse '
        + 'potenti. Donec suscipit, quam sit amet dignissim sollicitudin, nulla mauris posuere turpis, nec '
        + 'elementum augue odio vitae turpis. Sed non placerat mi. Nulla rhoncus aliquam magna et dapibus. '
        + 'Proin bibendum volutpat dolor quis vulputate. Nunc mattis elementum lorem ac blandit. Fusce hendrerit '
        + 'venenatis arcu non tempus. Donec at elit quis felis vulputate pulvinar at ac velit. Donec nec magna'
        + 'risus. Phasellus sit amet vestibulum ex, a gravida lacus. Nulla sit amet nisl cursus, pulvinar mauris '
        + 'at, sollicitudin eros. Etiam velit nisi, pulvinar sed accumsan ac, aliquet ac elit. Vivamus sem metus, '
        + 'pharetra vel nunc a, porta cursus mi. Nulla luctus eros at malesuada tempor. Vestibulum mattis '
        + 'vestibulum auctor. Vivamus mattis interdum nisi eget vestibulum. Ut vehicula rutrum nunc, vel viverra '
        + 'lorem vestibulum eu. Morbi ante sapien, porta et tellus vel, consectetur varius elit. Praesent tempus lacus '
        + 'vitae diam ultricies molestie. Sed cursus dui et ante vestibulum, at efficitur turpis commodo. Sed arcu enim, '
        + 'semper pellentesque placerat non, sodales id tortor. Fusce malesuada diam et nunc malesuada rutrum. '
        + 'Pellentesque lectus ex, scelerisque eu nibh dignissim, euismod semper est. Praesent quis augue accumsan.'

        let campanha: Campanha[] = [
            { 
                titulo: 'Ação Verão 2019', 
                descricao: 'Confira os detalhes da campanha que esfriou os ambientes e esquentaram as vendas.',
                id: 1, 
                urlImagem: '/assets/img/Prototipo/Merchandising/banner-merchan.png', 
                cor:'#367fc5', 
                texto: textoExemplo,
                data:'11.02.2019'
            }
        ];

        return campanha;
    }


    retornaCampanhas(): Campanha[]{
        let textoExemplo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget rhoncus tortor, '
        + 'at eleifend felis. Phasellus molestie libero id sapien ultrices fringilla. Praesent dapibus ut quam '
        + 'vitae efficitur. Praesent commodo eleifend diam, ac sodales leo placerat eu. Duis iaculis nisi ipsum, '
        + 'convallis fermentum ex porta id. Donec mauris nibh, ultrices et dictum in, sagittis vel nisi. '
        + 'Aenean in dictum massa. In hac habitasse platea dictumst. Nulla eget nisl nisl. Suspendisse '
        + 'potenti. Donec suscipit, quam sit amet dignissim sollicitudin, nulla mauris posuere turpis, nec '
        + 'elementum augue odio vitae turpis. Sed non placerat mi. Nulla rhoncus aliquam magna et dapibus. '
        + 'Proin bibendum volutpat dolor quis vulputate. Nunc mattis elementum lorem ac blandit. Fusce hendrerit '
        + 'venenatis arcu non tempus. Donec at elit quis felis vulputate pulvinar at ac velit. Donec nec magna'
        + 'risus. Phasellus sit amet vestibulum ex, a gravida lacus. Nulla sit amet nisl cursus, pulvinar mauris '
        + 'at, sollicitudin eros. Etiam velit nisi, pulvinar sed accumsan ac, aliquet ac elit. Vivamus sem metus, '
        + 'pharetra vel nunc a, porta cursus mi. Nulla luctus eros at malesuada tempor. Vestibulum mattis '
        + 'vestibulum auctor. Vivamus mattis interdum nisi eget vestibulum. Ut vehicula rutrum nunc, vel viverra '
        + 'lorem vestibulum eu. Morbi ante sapien, porta et tellus vel, consectetur varius elit. Praesent tempus lacus '
        + 'vitae diam ultricies molestie. Sed cursus dui et ante vestibulum, at efficitur turpis commodo. Sed arcu enim, '
        + 'semper pellentesque placerat non, sodales id tortor. Fusce malesuada diam et nunc malesuada rutrum. '
        + 'Pellentesque lectus ex, scelerisque eu nibh dignissim, euismod semper est. Praesent quis augue accumsan.'

        let campanha: Campanha[] = [
            { 
                titulo: 'A Elgin, mais de 66 nos de história não se faz presente apenas', 
                descricao: 'Confira os detalhes da campanha que esfriou os ambientes e esquentaram as vendas.',
                id: 1, urlImagem: '../../../assets/img/Prototipo/Merchandising/banner.png', 
                cor:'#FF2233', 
                texto: textoExemplo,
                data:'11.11.2019'
            },
            { 
                titulo: 'Sempre com o foco no bem-estar das pessoas não se faz presente apenas', 
                descricao: 'Veja aqui a Missão, Visão e Valores da nossa marca. Somos todos Elgin.', 
                id: 2, 
                urlImagem: '../../../assets/img/Prototipo/RH/banner.png', 
                cor:'#52bbce', 
                texto: textoExemplo,
                data:'15.02.2019'
            },
            { 
                titulo: 'Respeito ao cliente não se faz presente apenas através da qualidade', 
                descricao: 'Veja aqui a Missão, Visão e Valores da nossa marca. Somos todos Elgin.', 
                id: 2, 
                urlImagem: '../../../assets/img/Prototipo/RH/banner.png', 
                cor:'#52bbce', 
                texto: textoExemplo,
                data:'15.02.2019'
            },
            { 
                titulo: 'Confiança adquirida ao longo dos anos', 
                descricao: 'Veja aqui a Missão, Visão e Valores da nossa marca. Somos todos Elgin.', 
                id: 2, 
                urlImagem: '../../../assets/img/Prototipo/RH/banner.png', 
                cor:'#52bbce', 
                texto: textoExemplo,
                data:'15.02.2019'
            },
            { 
                titulo: 'Calendário e datas do fim do ano não se faz presente apenas', 
                descricao: 'Veja aqui a Missão, Visão e Valores da nossa marca. Somos todos Elgin.', 
                id: 2, 
                urlImagem: '../../../assets/img/Prototipo/RH/banner.png', 
                cor:'#52bbce', 
                texto: textoExemplo,
                data:'15.02.2019'
            }
        ];

        return campanha;
    }

    retornaCampanhaAviso(): Notificacao[] {
        let listaCampanhas: Campanha[] = this.retornaCampanhas();

        let campanhaAviso: Notificacao[] = [];

        listaCampanhas.forEach(element => {
            campanhaAviso.push({
                descricao: element.titulo,
                data: element.data,
                tipo: ""
            });
        });

        return campanhaAviso;
    }
}