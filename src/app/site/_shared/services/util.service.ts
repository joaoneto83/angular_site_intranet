import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Link } from '../../_models/link';
import { BlocoCategoria } from '../../_models/blocoCategoria';
import { LinkGrupoElgin } from '../../_models/linkGrupoElgin';
import { ProdutoSolar } from '../../_models/produtoSolar';
import { DetalheGrupo } from '../../site-grupo-elgin/site-detalhe-grupo/DetalheGrupoElgin';
import { BlocoLinhaTempo } from '../../site-grupo-elgin/site-linha-tempo/site-bloco-linha-tempo/bloco-linha-tempo';
import { BlocoInstitucional } from '../../_models/blocoInstitucional';
import { ConteudoSegmento } from '../../_models/conteudoSegmento';
import { BlocoAutomacao } from '../../_models/blocoAutomacao';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    retornaLinksServicos(): Link[] {
        let windowWidth = 0;

        if (isPlatformBrowser(this.platformId)) {
            windowWidth = window.innerWidth;
        }

        if (windowWidth < 500) {
            let links: Link[];

            links = [{ id: 'linkAssistencia', texto: 'ASSISTÊNCIA TÉCNICA', imagemHoverOffUrl: '', imagemUrl: '/assets/img/Site/Home/icons/assistencia.png', imagemHoverUrl: '/assets/img/Site/Home/icons/assistencia.png', rota: '/SuporteTecnico/To/Contato', siteExterno: false },
            { id: 'linkDownloadCenter', texto: 'DOWNLOAD CENTER', imagemHoverOffUrl: '', imagemUrl: '/assets/img/Site/Home/icons/download.png', imagemHoverUrl: '/assets/img/Site/Home/icons/download.png', rota: '/SuporteTecnico/To/DownloadCenter', siteExterno: false },
            { id: 'linkDicasUso', texto: 'DICAS DE USO', imagemHoverOffUrl: '', imagemUrl: '/assets/img/Site/Home/icons/dicas.png', imagemHoverUrl: '/assets/img/Site/Home/icons/dicas.png', rota: '/SuporteTecnico/To/DicasUso', siteExterno: false },
            { id: 'linkContato', texto: 'CONTATO', imagemHoverOffUrl: '', imagemUrl: '/assets/img/Site/Home/icons/contato.png', imagemHoverUrl: '/assets/img/Site/Home/icons/contato.png', rota: '/SuporteTecnico/To/Contato', siteExterno: false }];
            return links;
        } else {

            let links: Link[];

            links = [{ id: 'linkAssistencia', texto: 'ASSISTÊNCIA TÉCNICA', imagemHoverOffUrl: '', imagemUrl: '/assets/img/Site/Home/icons/assistencia.png', imagemHoverUrl: '/assets/img/Site/Home/icons/assistencia.png', rota: '/SuporteTecnico/To/Contato', siteExterno: false },
            { id: 'linkDownloadCenter', texto: 'DOWNLOAD CENTER', imagemHoverOffUrl: '', imagemUrl: '/assets/img/Site/Home/icons/download.png', imagemHoverUrl: '/assets/img/Site/Home/icons/download.png', rota: '/SuporteTecnico/To/DownloadCenter', siteExterno: false },
            { id: 'linkDicasUso', texto: 'DICAS DE USO', imagemHoverOffUrl: '', imagemUrl: '/assets/img/Site/Home/icons/dicas.png', imagemHoverUrl: '/assets/img/Site/Home/icons/dicas.png', rota: '/SuporteTecnico/To/DicasUso', siteExterno: false },
            { id: 'linkEmail', texto: 'E-MAIL', imagemHoverOffUrl: '', imagemUrl: '/assets/img/Site/Home/icons/email.png', imagemHoverUrl: '/assets/img/Site/Home/icons/email.png', rota: '/SuporteTecnico/To/DicasUsoEmail', siteExterno: false },
            { id: 'linkContato', texto: 'CONTATO', imagemHoverOffUrl: '', imagemUrl: '/assets/img/Site/Home/icons/contato.png', imagemHoverUrl: '/assets/img/Site/Home/icons/contato.png', rota: '/SuporteTecnico/To/Contato', siteExterno: false }];
            return links;
        }
    }

    retornaLinksCanaisComunicacao(): Link[] {

        let links: Link[];

        links = [{ id: 'linkLinkedin', texto: 'Linkedin', imagemHoverOffUrl: '/assets/img/Site/Home/icons/Lk.png', imagemUrl: '', imagemHoverUrl: '/assets/img/Site/Home/icons/Lk_on.png', rota: 'https://br.linkedin.com/company/elgin-s.a.-brazil-', siteExterno: true },
        { id: 'linkFacebook', texto: 'Facebook', imagemHoverOffUrl: '/assets/img/Site/Home/icons/fb.png', imagemUrl: '', imagemHoverUrl: '/assets/img/Site/Home/icons/fb_on.png', rota: 'https://pt-br.facebook.com/GrupoElgin/', siteExterno: true },
        { id: 'linkInstagram', texto: 'Instagram', imagemHoverOffUrl: '/assets/img/Site/Home/icons/insta.png', imagemUrl: '', imagemHoverUrl: '/assets/img/Site/Home/icons/insta_on.png', rota: 'https://www.instagram.com/grupo_elgin/', siteExterno: true },
        { id: 'linkYoutube', texto: 'Youtube', imagemHoverOffUrl: '/assets/img/Site/Home/icons/yt.png', imagemUrl: '', imagemHoverUrl: '/assets/img/Site/Home/icons/yt_on.png', rota: 'https://www.youtube.com/channel/UC4EEMFjqb3zQcn0vpE0ewAg', siteExterno: true },
        { id: 'linkBlog', texto: 'Blog', imagemHoverOffUrl: '/assets/img/Site/Home/icons/blogger.png', imagemUrl: '', imagemHoverUrl: '/assets/img/Site/Home/icons/blogger_on.png', rota: 'http://blog.elgin.com.br/blog/', siteExterno: true }];

        return links;
    }

    retornaCategoriasBlocoSite(): BlocoCategoria[] {

        let categorias: BlocoCategoria[] =  [
            { imagemUrl: '../assets/img/Site/Home/climatizacao.jpg', rota: '/Produtos/Climatizacao/Climatizador', texto: 'Climatização' },
            { imagemUrl: '../assets/img/Site/Home/telefonia.jpg', rota: '/Produtos/Telefonia/Headset', texto: 'Telefonia' },
            { imagemUrl: '../assets/img/Site/Home/costura.jpg', rota: '/Produtos/Costura/ComMesa', texto: 'Costura' },
            { imagemUrl: '../assets/img/Site/Home/informatica.jpg', rota: '/Produtos/Informatica/Cabos', texto: 'Informática' },
            { imagemUrl: '../assets/img/Site/Home/iluminacao.jpg', rota: '/Produtos/Iluminacao/FilamentodeCarbono', texto: 'Iluminação' },
            { imagemUrl: '../assets/img/Site/Home/refrigeracao.jpg', rota: '/Refrigeracao', texto: 'Refrigeração' },
            { imagemUrl: '../assets/img/Site/Home/automacao.jpg', rota: '/Produtos/Automacao/AutoAtendimento', texto: 'Automação' },
            { imagemUrl: '../assets/img/Site/Home/solar.jpg', rota: '/Solar', texto: 'Solar' },
            { imagemUrl: '../assets/img/Site/Home/seguranca.jpg', rota: '/Produtos/Seguranca/Baterias', texto: 'Segurança' },
        ]
        return categorias;
    }

    retornaLinksBloco1(): LinkGrupoElgin[] {
        let links: LinkGrupoElgin[];
        links = [
            {
                titulo: 'Home & Office',
                descricao: 'Uma linha de produtos completa para deixar seu ambiente mais agradável e inteligente.',
                link: '/SaibaMais/HomeOffice',
                cor: '#168993',
                urlImagem: '../../assets/img/Site/GrupoElgin/home_office.jpg',
                alinhaDireita: false,
                transparencia: '0.75'
            },
            {
                titulo: 'Informática',
                descricao: 'Toda a facilidade e qualidade no seu dia a dia.',
                link: '/SaibaMais/Informatica',
                cor: '#8B3914',
                urlImagem: '../../assets/img/Site/GrupoElgin/informatica.jpg',
                alinhaDireita: false,
                transparencia: '0.7'
            },
            {
                titulo: 'Refrigeração',
                descricao: 'Tradição e excelência em refrigeração industrial.',
                link: '/SaibaMais/Refrigeracao',
                cor: '#195C9F',
                urlImagem: '../../assets/img/Site/GrupoElgin/refrigeracao.jpg',
                alinhaDireita: true,
                transparencia: '0.7'
            },
            {
                titulo: 'Automação Comercial',
                descricao: 'Produtos que fazem a diferença no sucesso do seu negócio.',
                link: '/SaibaMais/Automacao',
                cor: '#174C69',
                urlImagem: '../../assets/img/Site/GrupoElgin/automacao.jpg',
                alinhaDireita: true,
                transparencia: '0.6'
            }
        ];

        return links;
    }

    retornaLinksBloco2(): LinkGrupoElgin[] {
        let links: LinkGrupoElgin[];
        links = [
            {
                titulo: 'Política de Qualidade',
                descricao: 'Princípios que adotamos para atendermos você melhor.',
                link: '/SaibaMais/Politica',
                cor: '#254C81',
                urlImagem: '../../assets/img/Site/GrupoElgin/politica.jpg',
                alinhaDireita: false,
                transparencia: '0.8'
            },
            {
                titulo: 'Elgin News',
                descricao: 'Conheça mais do que acontece por dentro da Elgin.',
                link: '/SaibaMais/ElginNews',
                cor: '#001622',
                urlImagem: '../../assets/img/Site/GrupoElgin/elgin_news.jpg',
                alinhaDireita: false,
                transparencia: '0.8'
            },
            {
                titulo: 'Exportações',
                descricao: 'Do Brasil para o mundo, exportamos com orgulho.',
                link: '/SaibaMais/Exportacoes',
                cor: '#061826',
                urlImagem: '../../assets/img/Site/GrupoElgin/exportacoes.jpg',
                alinhaDireita: true,
                transparencia: '0.8'
            },
            {
                titulo: 'Certificações',
                descricao: 'Veja todas as certificações que a Elgin possui.',
                link: '/SaibaMais/Certificacoes',
                cor: '#084D88',
                urlImagem: '../../assets/img/Site/GrupoElgin/certificacoes.jpg',
                alinhaDireita: true,
                transparencia: '0.85'
            }
        ];

        return links;
    }

    retornaProdutosSolar(): ProdutoSolar[] {

        let produtos: ProdutoSolar[] = [
            { imagemUrl: '/assets/img/Site/Solar/placa_solar.png', descricao: 'Painéis Solares', link: "https://www.elgin.com.br/institucional/lista.php?l=NDg=&cat=MTky&titulo=UGFpbsOpaXMgU29sYXJlcw==" },
            { imagemUrl: '/assets/img/Site/Solar/inversor.png', descricao: 'Inversores', link: "https://www.elgin.com.br/institucional/lista.php?l=NDg=&cat=MTkz&titulo=SW52ZXJzb3Jfc29sYXI=" },
            { imagemUrl: '/assets/img/Site/Solar/string_box.png', descricao: 'String Box', link: "https://www.elgin.com.br/institucional/produto.php?ln=NDg=&l=TVRrMA==&cat=MTk0&titulo=U3RyaW5nIEJveA==&prod=ODky&filtro=&t=&u=" },
            { imagemUrl: '/assets/img/Site/Solar/cabos.png', descricao: 'Cabos', link: "https://www.elgin.com.br/institucional/produto.php?ln=NDg=&l=TVRrMg==&cat=MTk2&titulo=Q2Fib3M=&prod=ODk0&filtro=&t=&u=" },
            { imagemUrl: '/assets/img/Site/Solar/microinversores.png', descricao: 'Micro Inversores', link: "https://www.elgin.com.br/institucional/produto.php?ln=NDg=&l=TWpJMg==&cat=MjI2&titulo=TWljcm8gSW52ZXJzb3Jlcw==&prod=MTA0NA==&filtro=&t=&u=" },
            { imagemUrl: '/assets/img/Site/Solar/suporte.png', descricao: 'Suporte e Fixação', link: "https://www.elgin.com.br/institucional/produto.php?ln=NDg=&l=TVRrMQ==&cat=MTk1&titulo=RXN0cnV0dXJhcyBlIFN1cG9ydGVz&prod=ODkz&filtro=&t=&u=" }
        ]

        return produtos;
    }

    retornaInfo(): any[] {
        let infos: any[];
        infos = [
            {
                pergunta: 'Qual a diferença entre a tecnologia monocristalino e policristalino?',
                resposta: 'Os termos supracitados demonstram as principais tecnologias comerciais baseado em Silício (Si), onde painéis monocristalino são produzidos somente com base deste cristal.' +
                    '<br/>Já o Policristalino, utiliza vários cristais com propriedades semicondutores misturados na formação de uma célula fotovoltaica. ' +
                    '<br/>Na prática, sistemas monocristalino conseguem uma eficiência melhor comparada ao policristalino, desde que as características do clima sejam estáveis, caso contrário, o policristalino poderá ter a mesma eficiência que o monocristalino dependendo da localização e clima.',
                id: 'pgt1',
                tipo: 'comercial'
            },
            {
                pergunta: 'Diferença entre On-grid e Off-Grid?',
                resposta: 'Sistemas On-grid possuem por características ser dependentes das concessionárias, sistemas que o seu propósito é a redução da conta de energia elétrica, diferentemente de sistemas off-grid que a principal característica é ser independente de fontes públicas.',
                id: 'pgt2',
                tipo: 'residencial'
            },
            {
                pergunta: 'Diferença entre sistema de Aquecimento de água e sistema Fotovoltaico Elgin?',
                resposta: 'A diferença consiste em que o Aquecimento Solar (fonte energética calor) manter água aquecida suficiente para chuveiro e torneiras distribuídas nos estabelecimentos, enquanto o sistema fotovoltaico gera energia elétrica com outra fonte energética proveniente do sol (Irradiação). A Elgin possui somente sistema fotovoltaico que consiste em gerar energia elétrica para ser utilizado nos estabelecimentos e caso haja excedentes, abater e reduzir a conta de energia do cliente.',
                id: 'pgt3',
                tipo: 'residencial'
            },
            {
                pergunta: 'Como obter o melhor desempenho do sistema fotovoltaico Elgin?',
                resposta: 'As nossas ferramentas dimensionam os kits com base na média anual do cliente, considerando sazonalidades que possam ocorrer no período vigente discriminado na conta de energia Elétrica. Com um sistema bem dimensionado, é importante haver manutenções preventivas realizadas em período adequado a cada tipo de cliente, sendo a melhor forma de avaliar é em 2 ou 3 meses de geração, desde que as condições climáticas destes meses sejam similares, identificar uma queda de 15% na geração do kit. Com isso, identificamos então o período que deverá efetuar a manutenção do kit.',
                id: 'pgt4',
                tipo: 'comercial'
            },
            {
                pergunta: 'Qual a manutenção necessária após a instalação do sistema fotovoltaico Elgin?',
                resposta: 'Considerando que não houve surto elétrico, a manutenção do sistema consiste em manter os painéis sempre limpos para melhor absorção de irradiação e eficiência do kit. A limpeza deverá ser feita somente com água dispensando panos, produtos químicos em geral, porquê podem haver resíduos por má limpeza que irá dirimir a irradiação para o painel.',
                id: 'pgt5',
                tipo: 'residencial'
            },
            {
                pergunta: 'Qual a manutenção necessária após a instalação do sistema fotovoltaico Elgin?',
                resposta: 'Considerando que não houve surto elétrico, a manutenção do sistema consiste em manter os painéis sempre limpos para melhor absorção de irradiação e eficiência do kit. A limpeza deverá ser feita somente com água dispensando panos, produtos químicos em geral, porquê podem haver resíduos por má limpeza que irá dirimir a irradiação para o painel.',
                id: 'pgt51',
                tipo: 'comercial'
            },
            {
                pergunta: 'Qual a diferença entre Potência (kW) e Energia (kWh)?',
                resposta: 'kW é a potência pico do sistema de compensação de energia, Demanda contratada ou carga. Já kWh é a quantidade de energia consumida ou gerada por um certo período de tempo.' +
                    '<br/>Ex: Em nossas faturas de energia, é mencionada XXX “kWh”, ou seja, que em um período de 30 dias, por muitas horas, nossos equipamentos ficaram ligados em potência máxima. Como por exemplo, uma lâmpada de 6w; (6w * 8 horas * 30 dias) = 1440 Wh. Entretanto, nossas faturas discriminam em unidade de grandeza “k” [10³], onde é necessário converter o resultado anterior em número igual ao mencionado nas faturas, que seria: 1440 Wh/1000 = 1,44 kWh/mês. ' +
                    '<br/>' +
                    '<br/>O exemplo anterior mencionamos somente uma lâmpada, mas basicamente esta é a forma de compreender estas diferenças. ',
                id: 'pgt6',
                tipo: 'comercial'
            },
            {
                pergunta: 'Caso a produção de energia seja maior que o consumo, como posso usar esse excedente?',
                resposta: 'De Acordo com a resolução 482/2012 da Aneel que regulamenta sistemas de compensação de Energia, o titular da Unidade consumidora poderá repassar estes créditos para mais de uma Unidade consumidora, desde que todas estejam na mesma concessionária e titular. Com isso, podemos repassar percentual para cada Unidade consumidora desejada reduzindo as contas de energia.',
                id: 'pgt7',
                tipo: 'residencial'
            },
            {
                pergunta: 'Como tornar-se integrador Elgin?',
                resposta: 'Em nosso site temos a opção de um pré cadastro, onde posteriormente nosso departamento comercial irá contata-lo. Link: <a href="https://www.elgin.com.br/institucional/cadastro-empresa.php?t=Energia%20Solar" target="_blank">Cadastro</a> ',
                id: 'pgt8',
                tipo: 'comercial'
            },
            {
                pergunta: 'Como praticar dos treinamentos sobre energia Solar da Elgin?',
                resposta: 'Como exemplo, a melhor recomendação é que comece instalando na sua residência, entendendo como é o funcionamento do sistema, verificando dificuldades e detalhes que devem ser levados em consideração.',
                id: 'pgt9',
                tipo: 'comercial'
            },
            {
                pergunta: 'Qual a legislação vigente no Brasil sobre sistema Fotovoltaico?',
                resposta: 'A resolução que envolvem diretamente estes sistemas é a resolução 482/2012 e alguns pontos da 414/2010. ',
                id: 'pgt10',
                tipo: 'residencial'
            },
            {
                pergunta: 'Qual a legislação vigente no Brasil sobre sistema Fotovoltaico?',
                resposta: 'A resolução que envolvem diretamente estes sistemas é a resolução 482/2012 e alguns pontos da 414/2010. ',
                id: 'pgt10',
                tipo: 'comercial'
            },
            {
                pergunta: 'Qual prazo de garantia dos equipamentos Elgin, como solicitar a garantia?',
                resposta: 'A garantia varia de acordo com as partes do Kit, e irão ser cedidos os prazos para instalações que foram realizados por integradores Credenciado pela Elgin e que passaram num exame com nota mínima de aprovação. Atendido os requisitos citados, as garantias são as seguintes: ' +
                    '<br/>- Painel com garantia de 10 anos contra defeitos de fabricação e 25 anos de garantia de rendimento; ' +
                    '<br/>- Estruturas com garantia de 20 anos; ' +
                    '<br/>- Cabos de corrente contínua com garantia de 3 anos; ' +
                    '<br/>- Conectores com garantia de 3 anos; ' +
                    '<br/>- Inversores com garantia de 6 anos; ' +
                    '<br/>- String box com garantia de 3 anos; ' +
                    '<br/>- Em kits com microinversor, esse recebe garantia de 10 anos. '
                ,
                id: 'pgt11',
                tipo: 'residencial'
            },
            {
                pergunta: 'Qual prazo de garantia dos equipamentos Elgin, como solicitar a garantia?',
                resposta: 'A garantia varia de acordo com as partes do Kit, e irão ser cedidos os prazos para instalações que foram realizados por integradores Credenciado pela Elgin e que passaram num exame com nota mínima de aprovação. Atendido os requisitos citados, as garantias são as seguintes: ' +
                    '<br/>- Painel com garantia de 10 anos contra defeitos de fabricação e 25 anos de garantia de rendimento; ' +
                    '<br/>- Estruturas com garantia de 20 anos; ' +
                    '<br/>- Cabos de corrente contínua com garantia de 3 anos; ' +
                    '<br/>- Conectores com garantia de 3 anos; ' +
                    '<br/>- Inversores com garantia de 6 anos; ' +
                    '<br/>- String box com garantia de 3 anos; ' +
                    '<br/>- Em kits com microinversor, esse recebe garantia de 10 anos. '
                ,
                id: 'pgt11',
                tipo: 'comercial'
            },
            {
                pergunta: 'O que é irradiação Solar?',
                resposta: 'É o potencial energético de cada região, aferição feita por equipamento chamado piranômetro com capacidade de registrar tal potencial energético 3 vezes por minuto sendo aplicado em um raio de 10 km para que seja possível realizar o dimensionamento dos kit’s de acordo com as cidades. A Elgin possui a incidência solar de todas as cidades do país, tornando mais próximo da realidade o dimensionamento oferecido ao cliente.',
                id: 'pgt12',
                tipo: 'comercial'
            },
            {
                pergunta: 'Como monitorar a produção de energia do sistema fotovoltaico Elgin?',
                resposta: 'Para inversores, existem aplicativos para iOS e Android que podem ser baixados nas respectivas lojas, entretanto, caso o cliente deseja analisar em seu trabalho, temos a opção de acessar a plataforma via qualquer navegador e conferir como está o rendimento do seu kit. ' +
                    '<br/>No caso de Microinversores é necessário a aquisição de um módulo vendido separadamente pela Elgin, que possui a capacidade de comunicar com os equipamentos da instalação e transmitir a informação de geração para a plataforma e puder ser analisada pelo cliente. Para os inversores, temos um vídeo explicativo de como é feita a configuração: ' +
                    '<br/>Link: <a href="https://www.youtube.com/watch?v=HOy-jc7fOPc&list=PL-Wx4U81qUnQk4yzsZhOwhyybw4ByQol5&index=3&t=214s" target="_blank">Vídeo</a>'
                ,
                id: 'pgt13',
                tipo: 'residencial'
            },
            {
                pergunta: 'Como monitorar a produção de energia do sistema fotovoltaico Elgin?',
                resposta: 'Para inversores, existem aplicativos para iOS e Android que podem ser baixados nas respectivas lojas, entretanto, caso o cliente deseja analisar em seu trabalho, temos a opção de acessar a plataforma via qualquer navegador e conferir como está o rendimento do seu kit. ' +
                    '<br/>No caso de Microinversores é necessário a aquisição de um módulo vendido separadamente pela Elgin, que possui a capacidade de comunicar com os equipamentos da instalação e transmitir a informação de geração para a plataforma e puder ser analisada pelo cliente. Para os inversores, temos um vídeo explicativo de como é feita a configuração: ' +
                    '<br/>Link: <a href="https://www.youtube.com/watch?v=HOy-jc7fOPc&list=PL-Wx4U81qUnQk4yzsZhOwhyybw4ByQol5&index=3&t=214s" target="_blank">Vídeo</a>'
                ,
                id: 'pgt13',
                tipo: 'comercial'
            },
            {
                pergunta: 'O sistema fotovoltaico Elgin funciona em qualquer região ou concessionaria do Brasil?',
                resposta: 'Sim, todos os nossos produtos atendem as normas e resoluções nacionais, não havendo qualquer empecilho para a instalação do sistema. Nossos inversores atendem as normas NBR 16149 e NBR 16150, que são as responsáveis por estabelecer parâmetros e ensaios dos inversores com propriedades das redes elétricas brasileiras. ',
                id: 'pgt14',
                tipo: 'residencial'
            },
            {
                pergunta: 'O significa a taxa de disponibilidade cobrada pelas concessionárias?',
                resposta: 'De acordo com a resolução 414/2010, taxa de disponibilidade é um valor cobrado com base no seu tipo de instalação. Por exemplo, instalação monofásica o mínimo é (30kWh* tarifa), mesmo que o cliente deixe desligado todos os equipamentos do estabelecimento. ' +
                    '<br/>Os valores das tarifas variam de acordo com as concessionárias do país e o mínimo poderá ser diferente para cada região, pois a Aneel estabelece como mínimo um certo consumo e não valor. ' +
                    '<br/>Instalação Monofásica – 30kWh' +
                    '<br/>Instalação Bifásica – 50 kWh ' +
                    '<br/>Instalação Trifásica – 100 kWh',
                id: 'pgt15',
                tipo: 'comercial'
            },
            {
                pergunta: 'Quais os requisitos necessários para conectar o sistema fotovoltaico Elgin a rede da concessionária da sua Cidade?',
                resposta: 'Cada concessionária do país exige uma série de documentações e padrões que devem ser respeitados, sendo a melhor opção é procura-la para receber essas normas. Seguindo o Módulo 3 do PRODIST que estabelece padrões para o acesso à concessionaria fica mencionado as seguintes orientações: ' +
                    '<br/>Fonte: Módulo 3, PRODIST, Revisão 7, vigência a partir de 01/06/2017, subcapítulo 2.2, pág. 11; ' +
                    '<br/>' +
                    '<br/><i>“A distribuidora acessada deve disponibilizar, de forma atualizada em sua página na internet, área especifica destinada a servir como guia de acesso ao sistema de distribuição, contendo, no mínimo: ' +
                    '<br/>a)	indicação de documentos regulatórios (Resoluções, Módulos do PRODIST, etc.) que tratam dos procedimentos de acesso, de modo a informar ao interessado sobre etapas, prazos e responsabilidades de acessada e acessante; ' +
                    '<br/>b)	 formulários padronizados por tipo de acessante a serem apresentados nas etapas de consulta de acesso e solicitação de acesso pelo acessante, assim como para solicitação de DAL, contendo as informações necessárias às análises para viabilização do acesso; ' +
                    '<br/>c)	relação de documentos a serem apresentados pelo acessante nas etapas de consulta de acesso e solicitação de acesso, assim como para solicitação de DAL; ' +
                    '<br/>d)	relação de estudos de responsabilidade do acessante a serem apresentados em cada etapa, indicando a forma de obtenção dos dados necessários para elaboração dos referidos estudos; e ' +
                    '<br/>e)	relação de normas e padrões técnicos e construtivos da acessada para elaboração de projetos de responsabilidade do acessante, assim como indicações das normas técnicas aplicáveis.”</i> – Módulo 3 PRODIST',
                id: 'pgt16',
                tipo: 'comercial'
            },
        ];
        return infos;
    }

    retornaDetalhesGrupoElgin(): DetalheGrupo[] {
        let lista: DetalheGrupo[];

        lista = [
            {
                titulo: 'A HISTÓRIA DA MARCA',
                texto: 'Os mármores Elgin são esculturas gregas atribuídas a Fídias, artista da Antiguidade. No século XIX, Thomas Bruce, o lorde Elgin, recém-nomeado embaixador britânico, em visita ao Partenon, ficou maravilhado diante dessas obras e, ao mesmo tempo, horrorizado ao ver que as esculturas serviam de alvo às práticas de tiro do exército turco. Imediatamente, Bruce, um grande amante das artes, tratou de usar seu prestígio político para providenciar a remoção dos mármores da Grécia, de maneira que ficassem a salvo da destruição. Algum tempo depois, as esculturas de Fídias foram transportadas para a Inglaterra e colocadas para exposição ao público no British Museum, em Londres. Em homenagem ao lorde e a seu ato, as obras passaram a ser conhecidas como Os Mármores Elgin. Um século mais tarde, os fundadores da Elgin (a empresa ainda não tinha este nome) faziam uma visita ao museu britânico e, como Thomas Bruce, ficaram maravilhados ao contemplarem as esculturas de mármore. O que mais lhes chamou a atenção foi a perfeição das imagens e cenas esculpidas com riqueza de detalhes, uma verdadeira inspiração artística. Decididos de que os mármores simbolizavam a filosofia da empresa que acabavam de fundar, deram o nome de Elgin à fábrica de máquinas de costura. Com o passar dos anos, ficou comprovado que o nome não poderia ter sido outro: além do princípio de fabricar e comercializar produtos com a mesma motivação artística, os mármores simbolizam a solidez que a Elgin conquistou no mercado brasileiro e internacional em mais de meio século.',
                imagemUrl: '/assets/img/Site/GrupoElgin/img_marca.jpg',
                codigo: 'Marca'
            },
            {
                titulo: 'A EVOLUÇÃO DA MARCA',
                texto: 'Há mais de 60 anos no mercado e dona de um portfólio com de mais de 2000 produtos, a Elgin é uma marca reconhecida por sua qualidade e respeito ao consumidor. Com a evolução e as mudanças ocorridas no Brasil e no mundo, a Elgin está se modernizando, seguindo as tendências de mercado e as exigências do consumidor, e esta mudança reflete o crescimento da empresa com elementos gráficos que representam melhor a época em que estamos. Com a importância que a Elgin tem conquistado no Brasil e no exterior, é essencial que a nossa marca seja utilizada seguindo o manual de identidade visual. Uma marca sempre bem aplicada reforça a presença corporativa de uma empresa. Dá credibilidade e transmite seriedade. A marca é a relação entre a empresa e o consumidor, por trás dela há um conjunto de informações e benefícios. É uma história contada com uma só palavra. E aí está a importância dela precisar ser tão clara e evidente. Por isso, observe sempre as cores, formatos, tamanhos e demais características da nossa marca. E, sempre que surgirem dúvidas, consulte o comitê de marketing. O manual de identidade visual da Elgin é destinado aos parceiros e colaboradores da companhia que possuam permissão legal ou contratual para utilizá-los. O uso comercial da marca Elgin sem autorização expressa e por escrito da empresa constitui ato ilícito.',
                imagemUrl: '',
                codigo: 'Marca'
            },
            {
                titulo: 'EXPORTAÇÕES',
                texto: 'Pioneirismo e inovação são características presentes na Elgin desde o início de sua história. A empresa foi a primeira a fabricar máquinas de costura domésticas no Brasil, e o aperfeiçoamento constante de seus produtos, fez com que em pouco tempo, a empresa exportasse suas máquinas para toda a América Latina. <br><br>Hoje o grupo exporta além das máquinas de costura, condicionadores de ar e produtos de refrigeração comercial, como Compressores, Unidades Condensadoras e Micromotores. <br><br>Atualmente o grupo exporta para Argentina, Venezuela, Paraguai, Bolívia, Colômbia, Chile, Peru, México, Arábia Saudita e alguns países da África. <br><br>A estratégia da ELGIN é levar produtos inovadores, de alta qualidade, pós-venda e apoio na certificação local dos produtos em cada país.',
                imagemUrl: '',
                codigo: 'Exportacoes'
            },
            {
                titulo: 'CERTIFICAÇÕES',
                texto: '',
                imagemUrl: '',
                subTopicos: [
                    { titulo: 'ISO 9001', texto: 'O Grupo Elgin tem certificações ISO 9001 desde 1995 concedidas pelo organismo certificador TÜV Rheinland do Brasil, credenciado pelo INMETRO, abrangendo os seguintes segmentos: <br><br>- Ar-Condicionado do tipo Split <br>- Balanças Computadoras <br>- Monitores de Vídeo <br>- Computadores para uso em automação comercial <br>- Caixas Registradoras <br>- Impressoras Térmicas e de Códigos de Barras <br>- Leitores de Códigos de Barras <br>- Aparelhos SAT Fiscal Linker <br>- Terminais de Autoatendimento' },
                    { titulo: 'CONAMA', texto: 'As Pilhas Elgin Energy são testadas periodicamente por laboratórios credenciados pelo INMETRO, para garantir a qualidade e conformidade com a Resolução CONAMA 401, que estabelece os limites máximos de chumbo, cádmio e mercúrio para pilhas e baterias comercializadas no território nacional e os critérios e padrões para o seu gerenciamento ambientalmente adequado.' },
                    { titulo: 'HOMOLOGADOS PELA ANATEL', texto: 'Todos os produtos da linha de telefonia da Elgin são Homologados pela Anatel, Agência Nacional de Telecomunicações. Isto garante que os aparelhos são compatíveis com as tecnologias adotadas no País e atendem requisitos técnicos de funcionamento e condições de garantia, de assistência técnica e de qualidade.' },
                    { titulo: 'CERTIFICAÇÂO INMETRO', texto: 'A Elgin tem certificação de segurança elétrica controlada pelo INMETRO, em obediência aos requisitos da Portaria 371/2009, com ensaios anuais conduzidos por laboratórios credenciados, para os produtos: <br><br>- Máquinas de Costura <br>- Carregadores de Pilhas <br>- Cortinas de Ar <br>- Climatizadores e Umidificadores de Ar <br>- Cortadores de Frios <br>- Compressores para linhas doméstica e comercial' },
                ],
                codigo: 'Certificacoes'
            },
            {
                titulo: 'POLÍTICA DE QUALIDADE',
                texto: 'A Direção da Elgin está comprometida em fornecer os produtos de ar condicionado, automação, costura, energia solar, iluminação, informática, refrigeração, segurança, telefonia e assegurar os objetivos em: <br><br>- Atendimento dos requisitos do cliente e partes interessadas. <br>- Atender os requisitos legais aplicáveis. <br>- Assegurar um ambiente adequado para operação de seus processos e alcançar melhoria contínua do sistema de gestão da qualidade.',
                imagemUrl: '',
                codigo: 'Politica'
            },
            {
                titulo: 'O GRUPO ELGIN',
                texto: 'A Elgin, em seus mais de 66 anos de história tornou-se uma marca conhecida por sua qualidade, credibilidade e inovações constantes, sempre com o objetivo de oferecer os melhores produtos aos seus consumidores. Começando pelo segmento de máquinas de costura, diversificou sua atuação no mercado brasileiro, e hoje conta com uma enorme variedade de produtos para uso comercial e residencial nos segmentos de Ar-Condicionado, Automação Comercial, Energia Solar, Escritório, Iluminação, Mídias, Informática, Pilhas e Carregadores, Refrigeração, Segurança e Telefonia. <br><br>Sempre com o foco no bem-estar das pessoas e na preservação ambiental, a Elgin procura agregar em suas linhas de produtos, atributos sustentáveis que colaboram com as metas de redução de emissão de poluentes e baixos níveis de consumo de energia. Esse respeito ao cliente não se faz presente apenas através da qualidade dos produtos oferecidos pela Elgin, mas também pelos serviços de pós-venda, disponibilizados pelo SAC e por diversas Assistências Técnicas Autorizadas espalhadas pelo Brasil, que garantem a satisfação de seus usuários e reforçam a confiança adquirida ao longo dos anos.',
                imagemUrl: '',
                codigo: 'GrupoElgin'
            },
            {
                titulo: 'AUTOMAÇÃO COMERCIAL',
                texto: 'Soluções em hardwares e softwares para estabelecimentos de todos os portes e segmentos, fornecendo produtos com a mais alta tecnologia: impressoras fiscais e impressoras de cupom, microterminais, terminais de consulta, leitores de código de barras, impressoras de cheques, impressoras de etiquetas, computadores destinados à automação comercial, balanças, gavetas para PDV, TEF, caixas registradoras e terminais de autoatendimento.',
                imagemUrl: '',
                codigo: 'Automacao'
            },
            {
                titulo: 'HOME & OFFICE',
                texto: '',
                subTopicos: [
                    { titulo: 'AR CONDICIONADO', texto: 'A Elgin desenvolve aparelhos modernos e silenciosos, com funcionalidades que trazem conforto e bem-estar aos usuários. São diversos modelos que atendem todas as necessidades tanto para fins comerciais quanto residenciais, todos fabricados com o mais alto padrão de qualidade e tecnologia, combinando potência com os mais baixos níveis de consumo de energia.' },
                    { titulo: 'CALCULADORAS', texto: 'A Elgin oferece uma vasta gama de produtos que vão desde calculadoras de bolso até as mais complexas como as científicas e financeiras.' },
                    { titulo: 'COSTURA', texto: 'A qualidade e a tecnologia das máquinas de costura Elgin o Brasil já conhece, tradição de seis décadas de clientes satisfeitos. A Elgin está sempre inovando para colocar à disposição dos consumidores, máquinas modernas e de fácil manuseio tanto para iniciantes quanto para profissionais.' },
                    { titulo: 'INFORMÁTICA', texto: 'Para sua diversão e entretenimento a Elgin coloca à sua disposição, equipamentos de última geração para mantê-lo sempre atualizado com o que há de mais moderno no mercado. Para som e imagem em alta definição os Cabos Elgin garantem velocidade e alta performance. Opções de qualidade em mídias como DVD’s e Blu-ray, impressoras e cartuchos, e a praticidade das Fontes Universais para Notebooks.' },
                    { titulo: 'ILUMINAÇÃO', texto: 'As novas Lâmpadas Elgin proporcionam maior eficiência energética com produtos para todas as necessidades, economize até 80% de energia elétrica com as Fluorescentes Tubulares e Compactas, decore seus ambientes com a diversidade e tecnologia das Lâmpadas de LED, e fique tranquilo, em caso de falta de energia, a Luminária de Emergência Elgin não te deixa no escuro, sua casa continua iluminada por até 6 horas, através de suas poderosas lâmpadas de LED.' },
                    { titulo: 'PILHAS E CARREGADORES', texto: 'No segmento de pilhas e baterias, a Elgin disponibiliza Uma linha completa capaz de atender a todas as aplicações: Pilhas Alcalinas, Pilhas de Zinco, Pilhas Recarregáveis, Baterias de 9V, Baterias Auditivas, Baterias Alcalinas, Baterias Recarregáveis e Baterias de Lítio, todas com alta durabilidade e o melhor preço. Os carregadores de pilhas Elgin completam a família Energy, garantindo seu bem estar e economia.' },
                    { titulo: 'TELEFONIA', texto: 'Com tecnologia de ponta e design moderno, os telefones Elgin possuem todas as funcionalidades que os consumidores precisam. São diversos modelos para casa ou escritório: Com fio, Sem fio, Interfone, Secretária Eletrônica; todos homologados pela Anatel.' },
                ],
                imagemUrl: '',
                codigo: 'HomeOffice'
            },
            {
                titulo: 'REFRIGERAÇÃO',
                texto: 'A Divisão de Refrigeração iniciou suas atividades em 1966 fabricando compressores herméticos e unidades condensadoras. Hoje, possui um portfólio de produtos visando atender às necessidades do mercado. <br><br>A Elgin Refrigeração atua no mercado nacional através de representantes comerciais que atendem revendas, fabricantes e instaladores, além de exportar para diversos países do mundo.',
                imagemUrl: '',
                codigo: 'Refrigeracao'
            },
            {
                titulo: 'INFORMÁTICA',
                texto: 'Criada em 1982, para atuar especificamente no segmento de Informática, a divisão ELGIN INFO PRODUCTS tem comercializado suas impressoras e scanners para o consumidor final através de seu canal de distribuição formado pelas maiores redes de varejo do Brasil, Revendas, Distribuidores e Integradores. <br><br>Comercializando produtos com marca própria, os Carregadores de Pilhas Elgin foram lançados, a princípio, para atender os consumidores de câmeras digitais. Entretanto a utilização de pilhas recarregáveis se popularizou astronomicamente e os carregadores Elgin deixaram de ter apenas uma utilidade: MP3 players, brinquedos, walkie-talkies e todos aparelhos que utilizam pilhas recarregáveis passaram a ser o segmento de mercado dos carregadores. <br><br>A ELGIN INFO PRODUCTS dedica um grande esforço para manter e aprimorar um padrão de atendimento ao consumidor. O principal objetivo é fornecer ao usuário informações detalhadas e precisas para a escolha do equipamento ideal às suas necessidades, antes mesmo de procurar o Revendedor ou Loja Autorizada Elgin. <br><br>A ELGIN INFO PRODUCTS também tem como prioridade o trabalho diferenciado nas grandes corporações, como acompanhamento técnico/comercial feito por profissionais qualificados, agregando ao produto um universo de soluções disponíveis para atender suas necessidades específicas. <br><br>Como consequência natural, a ELGIN mantém uma área exclusiva de distribuição de consumíveis para suas impressoras (cartuchos de tinta, toner, fitas e papéis especiais). Os suprimentos e consumíveis para os produtos ELGIN INFO PRODUCTS podem ser encontrados em todo Brasil. <br><br>Além da prestação de serviços ao consumidor, a ELGIN INFO PRODUCTS também preza seu canal de distribuição, dando um atendimento personalizado e oferecendo todas as ferramentas necessárias para a comercialização de seus produtos: treinamento, propaganda, material promocional, promotores de venda, campanhas de incentivo e preço competitivo. <br><br>Ciente da importância do atendimento pós-venda, a ELGIN mantém uma rede de mais de 200 postos autorizados em todo o Brasil, com técnicos devidamente treinados.',
                imagemUrl: '',
                codigo: 'Informatica'
            }

        ];

        return lista;
    }

    retornaLinhaTempo(): BlocoLinhaTempo[] {

        let blocos: BlocoLinhaTempo[] = [
            { ano: 1952, cor: "#77F799", descricao: "Instalação da primeira unidade fabril da Elgin - Mogi Das Cruzes - SP", imagemUrl: "/assets/img/Site/GrupoElgin/linha_tempo/1952.png" },
            { ano: 1953, cor: "#00DB98", descricao: "Primeiras máquinas de costura fabricadas no Brasil.", imagemUrl: "/assets/img/Site/GrupoElgin/linha_tempo/1953.png" },
            { ano: 1956, cor: "#15C9D0", descricao: "Produção de móveis e de gabinetes para máquinas de costura.", imagemUrl: "/assets/img/Site/GrupoElgin/linha_tempo/1956.png" },
            { ano: 1966, cor: "#3392E3", descricao: "Elgin Refrigeração, Fabricação de Compressores Herméticos e Unidades Condensadoras.", imagemUrl: "/assets/img/Site/GrupoElgin/linha_tempo/1966.png" },
            { ano: 1985, cor: "#005EB8", descricao: "ELGIN CUISINE - Com vasta experiência na produção de móveis para máquinas de costura, a Elgin entra no mercado de cozinhas planejadas de alto padrão.", imagemUrl: "/assets/img/Site/GrupoElgin/linha_tempo/1985.png" },
            { ano: 1986, cor: "#3392E3", descricao: "Inauguração da unidade industrial de Manaus.", imagemUrl: "/assets/img/Site/GrupoElgin/linha_tempo/1986.png" },
            { ano: 1994, cor: "#15C9D0", descricao: "Parceria com a gigante japonesa.", imagemUrl: "/assets/img/Site/GrupoElgin/linha_tempo/1994.png" },
            { ano: 1998, cor: "#00DB98", descricao: "Calculadoras e condicionadores de ar split.", imagemUrl: "/assets/img/Site/GrupoElgin/linha_tempo/1998.png" },
            { ano: 1999, cor: "#77F799", descricao: "Impressoras fiscais de automação comercial chegam ao mercado.", imagemUrl: "/assets/img/Site/GrupoElgin/linha_tempo/1999.png" },
            { ano: 2005, cor: "#00DB98", descricao: "Mídias de Gravação.", imagemUrl: "/assets/img/Site/GrupoElgin/linha_tempo/2005.png" },
            { ano: 2006, cor: "#15C9D0", descricao: "Terminais de autoatendimento com monitores touch screen.", imagemUrl: "/assets/img/Site/GrupoElgin/linha_tempo/2006.png" },
            { ano: 2010, cor: "#3392E3", descricao: "E-reader, linha de cabos, media players, pilhas, carregadores, telefonia, e cassete 360°", imagemUrl: "/assets/img/Site/GrupoElgin/linha_tempo/2010.png" },
            { ano: 2011, cor: "#005EB8", descricao: "ELGIN CUISINE virou ELGIN MOBILI & DESIGN e passou a produzir móveis para toda a casa.", imagemUrl: "/assets/img/Site/GrupoElgin/linha_tempo/2011.png" },
            { ano: 2012, cor: "#3392E3", descricao: "Lançamentos do ar-condicionado portátil, inverter, climatizadores, umidificadores e lâmpadas.", imagemUrl: "/assets/img/Site/GrupoElgin/linha_tempo/2012.png" },
            { ano: 2013, cor: "#15C9D0", descricao: "Carregador portátil, balanças comerciais, compressores e produtos para automação comercial.", imagemUrl: "/assets/img/Site/GrupoElgin/linha_tempo/2013.png" },
            { ano: 2014, cor: "#00DB98", descricao: "Expansão de produtos nos ramos de informática, automação, refrigeração, climatização e iluminação", imagemUrl: "/assets/img/Site/GrupoElgin/linha_tempo/2014.png" },
            { ano: 2015, cor: "#77F799", descricao: "Elgin entra no mercado de Segurança com as Câmeras, DVRs, Baterias Seladas e Cabos.", imagemUrl: "/assets/img/Site/GrupoElgin/linha_tempo/2015.png" },
            { ano: 2016, cor: "#00DB98", descricao: "50 anos no mercado de climatização. Lançamento de condicionadores de ar ecológicos.", imagemUrl: "/assets/img/Site/GrupoElgin/linha_tempo/2016.png" },
            { ano: 2017, cor: "#15C9D0", descricao: "Chegamos até a Energia Solar com o Sistema Fotovoltaico. Lançamento do Fox Self Checkout.", imagemUrl: "/assets/img/Site/GrupoElgin/linha_tempo/2017.png" },
        ];
        return blocos;
    }

    retornaSegmento(codigo, idioma: string): ConteudoSegmento {
        let segmentos: ConteudoSegmento[];

        if (idioma == 'pt')
            segmentos = [
                {
                    codigoBanner: 'Site-Refrigeracao-Industrial',
                    codigoGrupo: 'SegRefrigeracaoIndustrial',
                    codigoSegmento: 'RefrigeracaoIndustrial',
                    titulo: 'Refrigeração Industrial',
                    subtitulo: 'Solução completa em refrigeração, desenvolvida sob medida para cada aplicação.',
                    textoDestaque: 'Portfólio completo para suprir a cadeia do frio',
                    texto: 'Grandes armazéns, centros de distribuição e outras aplicações frigoríficas demandam um funcionamento silencioso, eficiente e confiável. Precisamente projetado para um melhor desempenho, os sistemas de refrigeração Elgin se superam em todos esses aspectos. <br><br>Nossos produtos de refrigeração industrial são construídos para controlar com precisão as condições de temperatura e umidade no interior das câmeras frias.',
                    icones: [
                        {
                            titulo: 'Centros Logísticos',
                            descricao: 'Centros de Distribuição<br> Operadores logísticos<br> Câmaras Pulmão',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/caminhao.svg'
                        },
                        {
                            titulo: 'Armazenagem de frutas',
                            descricao: 'Resfriamento de frutas<br> Túnel californiano<br> Congelamento',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/maca.svg'
                        },
                        {
                            titulo: 'Armazenagem de sementes',
                            descricao: 'Controle de temperatura e umidade relativa com recuperação de energia',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/ervilha.svg'
                        },
                        {
                            titulo: 'Indústria de proteína',
                            descricao: 'Resfriamento<br> Congelamento<br> Áreas de processo',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/coxinha.svg'
                        },
                        {
                            titulo: 'Panificação',
                            descricao: 'Túnel congelamento<br> Blast freezer<br> Câmara de congelamento',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/pao.svg'
                        },
                        {
                            titulo: 'Lacteos',
                            descricao: 'Resfriamento | Congelamento<br> Áreas de processo Armazenagem',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/leite.svg'
                        },
                        {
                            titulo: 'Pescados',
                            descricao: 'Túnel congelamento<br> Câmara de congelamento',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/pescado.svg'
                        },
                        {
                            titulo: 'Sorvetes',
                            descricao: 'Câmaras com Validação<br> Média alta e baixa temperaturas<br> Gelo Gel',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/sorvete.svg'
                        },
                        {
                            titulo: 'Medicamentos',
                            descricao: 'Câmaras com validação<br> Média alta e baixa temperaturas<br> Gelo Gel',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/medicamentos.svg'
                        },
                    ]
                },
                {
                    codigoBanner: 'Site-Refrigeracao-Comercial',
                    codigoGrupo: 'SegRefrigeracaoComercial',
                    codigoSegmento: 'RefrigeracaoComercial',
                    titulo: 'Refrigeração Comercial',
                    subtitulo: 'Solução completa em refrigeração, desenvolvida sob medida para cada aplicação.',
                    textoDestaque: 'A segurança de tudo o que você consome está aqui',
                    texto: 'Verduras crocantes e macias. Frutas suculentas e saborosas. Frutos do mar frescos. Na Elgin, sabemos que a qualidade dos alimentos é essencial. Como fornecedora líder no fornecimento de equipamentos de refrigeração para os segmentos de varejo e serviços de alimentos, oferecemos sistemas de resfriamento altamente confiáveis e de operação silenciosa com capacidade de controle do clima precisa para ajudar a preservar o seu estoque de produtos perecíveis e manter os seus lucros. <br><br>Os produtos Elgin oferecem soluções ideais para a indústria de serviços alimentícios. A linha de produtos inclui evaporadores, unidades condensadoras e uma variedade de controles e soluções de monitoramento para economia de energia. Cada produto é projetado para levar os limites de inovação para o nível mais elevado possível, ao mesmo tempo em que reduz significativamente seus custos operacionais e reduz seu impacto ambiental.',
                    icones: [
                        {
                            titulo: 'Hotéis',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/hotel.svg'
                        },
                        {
                            titulo: 'Restaurantes',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/restaurante.svg'
                        },
                        {
                            titulo: 'Fast Food',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/fast-food.svg'
                        },
                        {
                            titulo: 'Lojas de Conveniência',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/conveniencia.svg'
                        },
                        {
                            titulo: 'Pequenos Mercados',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/carrinho.svg'
                        },
                    ]
                },
                {
                    codigoBanner: 'Site-Refrigeracao-Supermercados',
                    codigoGrupo: 'SegSupermercados',
                    codigoSegmento: 'Supermercados',
                    titulo: 'Supermercados',
                    subtitulo: 'Solução completa em refrigeração, desenvolvida sob medida para cada aplicação.',
                    textoDestaque: 'Soluções completas e eficientes para supermercados',
                    texto: 'De itens de conveniência congelados a resfriados, sabemos que a satisfação dos clientes depende do frescor, qualidade e apresentação dos produtos. A Elgin oferece uma seleção inigualável em refrigeração com produtos eficazes para indústria comercial de varejo. <br><br>Trabalhamos próximos aos nossos clientes para desenvolver tecnologias que visam reduzir de forma eficiente os níveis de ruído e o consumo de energia. Nós também oferecemos opções sustentáveis para ajudar nossos clientes a se tornarem melhores gestores ambientais.',
                    icones: [
                        {
                            titulo: 'Mini mercados',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/mini-mercado.svg'
                        },
                        {
                            titulo: 'Supermercados',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/supermercado.svg'
                        },
                        {
                            titulo: 'Hipermercados',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/carrinho.svg'
                        },
                        {
                            titulo: 'Atacadistas',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/conveniencia.svg'
                        },
                    ]
                },
                {
                    codigoBanner: 'Site-Refrigeracao-Aletados',
                    codigoGrupo: 'SegAletados',
                    codigoSegmento: 'Aletados',
                    titulo: 'Aletados',
                    subtitulo: 'Solução completa em refrigeração, desenvolvida sob medida para cada aplicação.',
                    textoDestaque: 'Serpentinas para água gelada, evaporares e condensadores',
                    texto: 'A Engenharia de Desenvolvimento da Elgin conta com uma equipe altamente qualificada e preparada para atender as necessidades dos clientes, desde projetos padronizados ao dimensionamento de serpentinas customizadas. As serpentinas Elgin são projetadas para fornecer a maior economia e melhor consumo de energia, além de proporcionar segurança em seu manuseio. Nossa tecnologia e componentes fornecem excelente desempenho e garantem a máxima eficiência dos equipamentos.',
                    icones: [
                        {
                            titulo: 'Infraestrutura',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/hotel.svg'
                        },
                        {
                            titulo: 'Refrigeradores comerciais',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/refri-comercial.svg'
                        },
                        {
                            titulo: 'Tanque de leite',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/tanque-leite.svg'
                        },
                        {
                            titulo: 'Expositores refrigerados',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/expositor.svg'
                        },
                        {
                            titulo: 'Máquinas agrícolas',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/agricola.svg'
                        },
                        {
                            titulo: 'Ar condicionando residencial',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/ar-residencial.svg'
                        },
                        {
                            titulo: 'Ar Condicionado de trens',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/ar-trens.svg'
                        },
                        {
                            titulo: 'Máquinas sorvete',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/sorvete.svg'
                        },
                        {
                            titulo: 'Transporte Frigorificado',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/caminhao.svg'
                        },
                        {
                            titulo: 'Chopeiras',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/choperia.svg'
                        },
                        {
                            titulo: 'Refrigeradores domésticos',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/refri-domestico.svg'
                        },
                        {
                            titulo: 'Data Center',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/datacenter.svg'
                        },
                        {
                            titulo: 'Medicamentos',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/medicamentos.svg'
                        },
                        {
                            titulo: 'Ar Condicionado de ônibus',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/ar-bus.svg'
                        },
                        {
                            titulo: 'Bebedouros',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/bebedouro.svg'
                        },
                        {
                            titulo: 'Bombas de Calor',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/bomba-calor.svg'
                        }
                    ]
                },
            ];

        else if (idioma == 'en')
            segmentos = [
                {
                    codigoBanner: 'Site-Refrigeracao-Industrial',
                    codigoGrupo: 'SegRefrigeracaoIndustrial',
                    codigoSegmento: 'RefrigeracaoIndustrial',
                    titulo: 'RefrigeracaoIndustrial',
                    subtitulo: 'Complete solution in refrigeration, developed tailored for each application.',
                    textoDestaque: 'Complete portfolio to meet the cold chain',
                    texto: 'Department stores, distribution centers and other refrigeration applications require quiet operation, efficient and reliable. Precisely designed for better performance, the Elgin cooling systems excel in all these aspects.<br><br>Our industrial refrigeration products are built to precisely control the temperature and humidity inside the cold cameras.',
                    icones: [
                        {
                            titulo: 'Logistics centers',
                            descricao: 'Distribution centers<br> Logistics operators<br> Lung chambers',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/caminhao.svg'
                        },
                        {
                            titulo: 'Storage of fruits',
                            descricao: 'Cooling fruit<br> Tunnel Californian<br> Freeze',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/maca.svg'
                        },
                        {
                            titulo: 'Seed Storage',
                            descricao: 'Control temperature and relative humidity with energy recovery',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/ervilha.svg'
                        },
                        {
                            titulo: 'Industry protein',
                            descricao: 'Cooling<br> Freeze<br> Process areas',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/coxinha.svg'
                        },
                        {
                            titulo: 'Bakery',
                            descricao: 'Freezing tunnel<br> Blast freezer<br> Freezing Chamber',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/pao.svg'
                        },
                        {
                            titulo: 'Dairy',
                            descricao: 'Cooling | Storage <br> Process areas <br> Storage',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/leite.svg'
                        },
                        {
                            titulo: 'Fish',
                            descricao: 'Freezing tunnel<br> Freezing Chamber',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/pescado.svg'
                        },
                        {
                            titulo: 'Ice creams',
                            descricao: 'Validated Cameras<br> Average, low and high temperatures<br> Gel ice',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/sorvete.svg'
                        },
                        {
                            titulo: 'Medicines',
                            descricao: 'Validated Cameras<br> Average, low and high temperatures<br> Gel ice',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/medicamentos.svg'
                        },
                    ]
                },
                {
                    codigoBanner: 'Site-Refrigeracao-Comercial',
                    codigoGrupo: 'SegRefrigeracaoComercial',
                    codigoSegmento: 'RefrigeracaoComercial',
                    titulo: 'RefrigeracaoComercial',
                    subtitulo: 'Complete solution in refrigeration, developed tailored for each application.',
                    textoDestaque: 'The safety of everything you consume is here',
                    texto: 'Vegetables crunchy and soft. juicy and tasty fruits. Seafood fresh. In Elgin, we know that the quality of food is essential. As a leading provider in the supply of refrigeration equipment for retail and food service, we offer highly reliable cooling system and silent operation with climate control capacity need to help preserve its stock of perishable goods and keep their profits.<br><br>The Elgin products offer ideal solutions for the food service industry. The product line includes evaporators, condensing units and a variety of control and monitoring solutions for energy savings. Each product is designed to take the limits of innovation for more high level possible, while significantly reducing operating costs and reduce environmental impact.',
                    icones: [
                        {
                            titulo: 'Hotels',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/hotel.svg'
                        },
                        {
                            titulo: 'Restaurants',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/restaurante.svg'
                        },
                        {
                            titulo: 'Fast Food',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/fast-food.svg'
                        },
                        {
                            titulo: 'Convenience Stores',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/conveniencia.svg'
                        },
                        {
                            titulo: 'Small Markets',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/carrinho.svg'
                        },
                    ]
                },
                {
                    codigoBanner: 'Site-Refrigeracao-Supermercados',
                    codigoGrupo: 'SegSupermercados',
                    codigoSegmento: 'Supermercados',
                    titulo: 'Supermercados',
                    subtitulo: 'Complete solution in refrigeration, developed tailored for each application.',
                    textoDestaque: 'Complete and efficient solutions for supermarkets',
                    texto: 'Frozen convenience items to colds, we know that customer satisfaction depends on the freshness, quality and presentation of products. The Elgin offers an unrivaled selection of cooling with effective products for commercial retail industry.<br><br>We work closely with our customers to develop technologies to reduce efficiently the noise and power consumption. We also offer sustainable options to help our customers become better environmental managers.',
                    icones: [
                        {
                            titulo: 'Mini markets',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/mini-mercado.svg'
                        },
                        {
                            titulo: 'Supermarket',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/supermercado.svg'
                        },
                        {
                            titulo: 'Hypermarkets',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/carrinho.svg'
                        },
                        {
                            titulo: 'Wholesalers',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/conveniencia.svg'
                        },
                    ]
                },
                {
                    codigoBanner: 'Site-Refrigeracao-Aletados',
                    codigoGrupo: 'SegAletados',
                    codigoSegmento: 'Aletados',
                    titulo: 'Aletados',
                    subtitulo: 'Complete solution in refrigeration, developed tailored for each application.',
                    textoDestaque: 'Coils for chilled water, condenser and evaporares',
                    texto: 'The Development Engineering of Elgin has a highly qualified team prepared to meet customer needs, from standard designs to the design of customized coils. Elgin coils are designed to provide the greatest savings and better power consumption, as well as providing safety in handling. Our technology and components provide outstanding performance and ensure maximum equipment efficiency.',
                    icones: [
                        {
                            titulo: 'Infrastructure',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/hotel.svg'
                        },
                        {
                            titulo: 'Commercial refrigerators',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/refri-comercial.svg'
                        },
                        {
                            titulo: 'Milk tank',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/tanque-leite.svg'
                        },
                        {
                            titulo: 'Refrigerated display',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/expositor.svg'
                        },
                        {
                            titulo: 'Agricultural machinery',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/agricola.svg'
                        },
                        {
                            titulo: 'Air Conditioning residential',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/ar-residencial.svg'
                        },
                        {
                            titulo: 'Air Conditioning trains',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/ar-trens.svg'
                        },
                        {
                            titulo: 'Ice cream machines',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/sorvete.svg'
                        },
                        {
                            titulo: 'Refrigerated transport',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/caminhao.svg'
                        },
                        {
                            titulo: 'Beer coolers',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/choperia.svg'
                        },
                        {
                            titulo: 'Household refrigerators',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/refri-domestico.svg'
                        },
                        {
                            titulo: 'Data Center',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/datacenter.svg'
                        },
                        {
                            titulo: 'Medicines',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/medicamentos.svg'
                        },
                        {
                            titulo: 'Air Conditioning bus',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/ar-bus.svg'
                        },
                        {
                            titulo: 'Drinkers',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/bebedouro.svg'
                        },
                        {
                            titulo: 'Heat Pumps',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/bomba-calor.svg'
                        }
                    ]
                },
            ];

        else
            segmentos = [
                {
                    codigoBanner: 'Site-Refrigeracao-Industrial',
                    codigoGrupo: 'SegRefrigeracaoIndustrial',
                    codigoSegmento: 'RefrigeracaoIndustrial',
                    titulo: 'RefrigeracaoIndustrial',
                    subtitulo: 'Solución completa en refrigeración, desarrollada a medida para cada aplicación.',
                    textoDestaque: 'Portafolio completo para satisfacer la cadena de frío',
                    texto: 'Grandes almacenes, centros de distribución y otras aplicaciones de refrigeración requieren un funcionamiento silencioso, eficiente y fiable. Precisamente diseñado para un mejor rendimiento, los sistemas de refrigeración Elgin sobresalen en todos estos aspectos.<br><br> Nuestros productos de refrigeración industriales se construyen para controlar con precisión la temperatura y la humedad en el interior de las cámaras frías.',
                    icones: [
                        {
                            titulo: 'Centros logísticos',
                            descricao: 'Centros de distribución<br> Operadores logísticos<br> Cámaras Pulmón',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/caminhao.svg'
                        },
                        {
                            titulo: 'Almacenamiento de frutas',
                            descricao: 'Enfriamiento de Frutas<br> Túnel Californiano<br> Congelación',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/maca.svg'
                        },
                        {
                            titulo: 'Almacenamiento de semillas',
                            descricao: 'Controlar la temperatura y humedad relativa con recuperación de energía',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/ervilha.svg'
                        },
                        {
                            titulo: 'Industria proteica',
                            descricao: 'Enfriamiento<br> Congelación<br> Áreas de proceso',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/coxinha.svg'
                        },
                        {
                            titulo: 'Panadería',
                            descricao: 'Túnel de congelación<br> Blast freezer<br> Cámara de congelación',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/pao.svg'
                        },
                        {
                            titulo: 'Lácteo',
                            descricao: 'Enfriamiento | Congelación<br> Áreas de proceso <br> Almacenamiento',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/leite.svg'
                        },
                        {
                            titulo: 'Pescado',
                            descricao: 'Túnel de congelación<br> Cámara de congelación',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/pescado.svg'
                        },
                        {
                            titulo: 'Helado',
                            descricao: 'Cámaras con Validación<br> Media, baja y altas temperaturas<br> Gel de hielo',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/sorvete.svg'
                        },
                        {
                            titulo: 'Medicina',
                            descricao: 'Cámaras con Validación<br> Media, baja y altas temperaturas<br> Gel de hielo',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/medicamentos.svg'
                        },
                    ]
                },
                {
                    codigoBanner: 'Site-Refrigeracao-Comercial',
                    codigoGrupo: 'SegRefrigeracaoComercial',
                    codigoSegmento: 'RefrigeracaoComercial',
                    titulo: 'RefrigeracaoComercial',
                    subtitulo: 'Solución completa en refrigeración, desarrollada a medida para cada aplicación.',
                    textoDestaque: 'La seguridad de todo lo que consume es aquí',
                    texto: 'Verduras crujientes y suave. jugosas y sabrosas frutas. pescados y mariscos frescos. En Elgin, sabemos que la calidad de los alimentos es esencial. Como proveedor líder en el suministro de equipos de refrigeración para el servicio al por menor y los alimentos, ofrecemos sistema de refrigeración altamente fiable y un funcionamiento silencioso con la necesidad de la capacidad de control climático para ayudar a preservar sus existencias de productos perecederos y mantener su beneficios.<br><br>Los productos Elgin ofrecen soluciones ideales para la industria de servicio de alimentos. La línea de productos incluye evaporadores, unidades de condensación y una variedad de de control y soluciones de monitoreo para el ahorro de energía. Cada producto está diseñado para llevar a los límites de la innovación para más alto nivel posible, al tiempo que reduce significativamente los costos de operación y reducir el impacto ambiental.',
                    icones: [
                        {
                            titulo: 'Hoteles',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/hotel.svg'
                        },
                        {
                            titulo: 'Restaurantes',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/restaurante.svg'
                        },
                        {
                            titulo: 'Fast Food',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/fast-food.svg'
                        },
                        {
                            titulo: 'Tiendas de Conveniencia',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/conveniencia.svg'
                        },
                        {
                            titulo: 'Mercados Pequeños',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/carrinho.svg'
                        },
                    ]
                },
                {
                    codigoBanner: 'Site-Refrigeracao-Supermercados',
                    codigoGrupo: 'SegSupermercados',
                    codigoSegmento: 'Supermercados',
                    titulo: 'Supermercados',
                    subtitulo: 'Soluciones completas y eficaces para supermercados',
                    textoDestaque: 'Soluções completas e eficientes para supermercados',
                    texto: 'Artículos de conveniencia congelados a los resfriados, sabemos que la satisfacción del cliente depende de la frescura, calidad y presentación de los productos. El Elgin ofrece una selección sin igual de refrigeración con productos eficaces para la industria al por menor comercial.<br><br>Trabajamos estrechamente con nuestros clientes para desarrollar tecnologías para reducir eficazmente el ruido y el consumo de energía. También ofrecemos opciones sostenibles para ayudar a nuestros clientes a ser gerentes mejor ambientales.',
                    icones: [
                        {
                            titulo: 'Mini mercados',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/mini-mercado.svg'
                        },
                        {
                            titulo: 'Supermercados',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/supermercado.svg'
                        },
                        {
                            titulo: 'Hipermercados',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/carrinho.svg'
                        },
                        {
                            titulo: 'Mayoristas',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/conveniencia.svg'
                        },
                    ]
                },
                {
                    codigoBanner: 'Site-Refrigeracao-Aletados',
                    codigoGrupo: 'SegAletados',
                    codigoSegmento: 'Aletados',
                    titulo: 'Aletados',
                    subtitulo: 'Solución completa en refrigeración, desarrollada a medida para cada aplicación.',
                    textoDestaque: 'Serpentín para agua helada, condensador y evaporares',
                    texto: 'La Ingeniería de Desarrollo de Elgin cuenta con un equipo altamente cualificado preparado para satisfacer las necesidades del cliente, a partir de diseños estándar para el diseño de bobinas de medida. bobinas Elgin están diseñados para proporcionar el mayor ahorro y un mejor consumo de energía, así como proporcionar seguridad en el manejo. Nuestra tecnología y componentes proporcionan un excelente rendimiento y garantizar la máxima eficiencia de los equipos.',
                    icones: [
                        {
                            titulo: 'Infraestructura',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/hotel.svg'
                        },
                        {
                            titulo: 'Refrigeradores comerciales',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/refri-comercial.svg'
                        },
                        {
                            titulo: 'Tanque de leche',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/tanque-leite.svg'
                        },
                        {
                            titulo: 'Exhibidores refrigerados',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/expositor.svg'
                        },
                        {
                            titulo: 'Máquinas agrícolas',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/agricola.svg'
                        },
                        {
                            titulo: 'Aire acondicionado residenciales',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/ar-residencial.svg'
                        },
                        {
                            titulo: 'Aire acondicionado de tren',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/ar-trens.svg'
                        },
                        {
                            titulo: 'Máquinas de helados',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/sorvete.svg'
                        },
                        {
                            titulo: 'Transporte refrigerado',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/caminhao.svg'
                        },
                        {
                            titulo: 'Enfriadores de cerveza',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/choperia.svg'
                        },
                        {
                            titulo: 'Refrigeradores domésticos',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/refri-domestico.svg'
                        },
                        {
                            titulo: 'Centro de datos',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/datacenter.svg'
                        },
                        {
                            titulo: 'Medicina',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/medicamentos.svg'
                        },
                        {
                            titulo: 'Autobús con aire acondicionado',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/ar-bus.svg'
                        },
                        {
                            titulo: 'Bebedores',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/bebedouro.svg'
                        },
                        {
                            titulo: 'Bombas de calor',
                            descricao: '',
                            caminhoImagem: '/assets/img/Site/Refrigeracao/Segmentos/bomba-calor.svg'
                        }
                    ]
                },
            ];

        return segmentos.find(x => x.codigoSegmento == codigo);
    }

    retornaBlocosIntitucionaisRefrigeracao(): BlocoInstitucional[] {

        let blocos: BlocoInstitucional[];

        blocos = [
            {
                titulo: 'ProjetosPersonalizados',
                imagemUrl: '/assets/img/Site/Refrigeracao/projetos-personalizados.png',
                texto: 'ProjetosPersonalizadosTexto'
            },
            {
                titulo: 'PosVenda',
                imagemUrl: '/assets/img/Site/Refrigeracao/pos-venda.png',
                texto: 'PosVendaTexto'
            },
            {
                titulo: 'Assistencia',
                imagemUrl: '/assets/img/Site/Refrigeracao/assistencia.png',
                texto: 'AssistenciaTexto'
            }
        ];

        return blocos;
    }

    retornaBlocosIntitucionaisAutomacao(): BlocoInstitucional[] {
        let blocos: BlocoInstitucional[];

        blocos = [
            {
                titulo: 'Projetos Personalizados',
                imagemUrl: '/assets/img/Site/Automacao/projetos-personalizados.png',
                texto: 'Ideal para estabelecimentos comerciais de médio e grande porte como redes de supermercados, a solução oferece um software desenvolvido especialmente para fazer a integração entre o seu sistema de gestão e as etiquetas nas gôndolas.'
            },
            {
                titulo: 'Pós Venda',
                imagemUrl: '/assets/img/Site/Refrigeracao/pos-venda.png',
                texto: 'A Elgin sabe que cada cliente possui suas necessidades, por isso conta com uma ampla equipe de atendimento ao cliente que trabalha constantemente para suprir todas as dúvidas e solicitações.'
            },
            {
                titulo: 'Assistência',
                imagemUrl: '/assets/img/Site/Automacao/assistencia.png',
                texto: 'O suporte técnico da Elgin possui uma equipe de técnicos especializada, capaz de atender os clientes nos procedimentos mais detalhados, via telefone, e-mail e pessoalmente.'
            }
        ];

        return blocos;
    }

    retornaBlocosAutomacaoHome(): BlocoAutomacao[] {

        let categorias: BlocoAutomacao[] = [
            { imagemUrl: '../assets/img/Site/Automacao/terminais-auto-atendimento.png', rota: '/Produtos/Automacao/AutoAtendimento', titulo: 'Terminais de Auto-Atendimento', subtitulo: 'Equipamentos versáteis, resistentes e de fácil utilização, fabricados no Brasil.' },
            { imagemUrl: '../assets/img/Site/Automacao/self-checkout.png', rota: '/Produtos/Automacao/SelfCheckout', titulo: 'Self Checkout', subtitulo: 'Possibilidade do consumidor registrar suas compras, pagar e empacotar, com segurança e alta performance.' },
            { imagemUrl: '../assets/img/Site/Automacao/balancas.png', rota: '/Produtos/Automacao/Balancas', titulo: 'Balanças', subtitulo: 'Resistentes, proporcionam agilidade no processo de pesagem.' },
            { imagemUrl: '../assets/img/Site/Automacao/computadores.png', rota: '/Produtos/Automacao/Computadores', titulo: 'Computadores', subtitulo: 'Projetados para utilização na automação comercial.' },
            { imagemUrl: '../assets/img/Site/Automacao/elgin-pay.png', rota: 'www.google.com', titulo: 'Meios de Pagamento', subtitulo: 'Fintech especializada em Meios de Pagamentos com melhores taxas do mercado.' },
            { imagemUrl: '../assets/img/Site/Automacao/etiquetas-eletronicas.png', rota: '/Produtos/Automacao/EtiquetasEletronicas', titulo: 'Etiquetas Eletrônicas', subtitulo: 'Facilidade na atualização de preços e promoções de forma rápida, precisa e segura.' },
            { imagemUrl: '../assets/img/Site/Automacao/gaveta.png', rota: '/Produtos/Automacao/Gaveta', titulo: 'Gaveta', subtitulo: 'Projetada para todo tipo de PDV.' },
            { imagemUrl: '../assets/img/Site/Automacao/impressoras-etiquetas.png', rota: '/Produtos/Automacao/ImpressorasdeEtiquetas', titulo: 'Impressoras de Etiqueta', subtitulo: 'Desenvolvidas para o mercado nacional, com muitas vantagens.' },
            { imagemUrl: '../assets/img/Site/Automacao/impressoras-nao-fiscais.png', rota: '/Produtos/Automacao/ImpressorasNaoFiscais', titulo: 'Impressoras Térmicas', subtitulo: 'Ideais para Nota fiscal eletrônica, além de outros cupons e recibos.' },
            { imagemUrl: '../assets/img/Site/Automacao/leitores-mao.png', rota: '/Produtos/Automacao/LeitoresdeMao', titulo: 'Leitores de Mão', subtitulo: 'Equipamentos robustos, com alta tecnologia e ergonômicos.' },
            { imagemUrl: '../assets/img/Site/Automacao/leitores-fixos.png', rota: '/Produtos/Automacao/LeitoresFixos', titulo: 'Leitores Fixos', subtitulo: 'Desenvolvidos para checkouts de grande volume de vendas.' },
            { imagemUrl: '../assets/img/Site/Automacao/modulos-fiscais.png', rota: '/Produtos/Automacao/MFE', titulo: 'Módulos Fiscais', subtitulo: 'Atende a legislação fiscal para o comércio varejista na emissão de cupom fiscal eletrônico e nota fiscal eletrônica.' },
            { imagemUrl: '../assets/img/Site/Automacao/monitores.png', rota: '/Produtos/Automacao/Monitores', titulo: 'Monitores', subtitulo: 'Manuais, boletins técnicos e catálogos.' },
            { imagemUrl: '../assets/img/Site/Automacao/pdv.png', rota: '/Produtos/Automacao/PDV', titulo: 'PDV', subtitulo: 'Ideal para espaços reduzidos, robusto e prático para uso em diversos segmentos.' },
            { imagemUrl: '../assets/img/Site/Automacao/terminais-consulta.png', rota: '/Produtos/Automacao/TerminaldeConsultadePrecos', titulo: 'Terminais de Consulta', subtitulo: 'Proporciona praticidade e conforto na interatividade com o consumidor.' }
        ]

        return categorias;
    }
}