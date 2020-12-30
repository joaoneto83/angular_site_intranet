import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../_shared/services/util.service';
import { ActivatedRoute } from '@angular/router';
import { DetalheGrupo } from './DetalheGrupoElgin';
import { ElginNews } from '../../../../app/_models/elginNews';

@Component({
  selector: 'app-site-detalhe-grupo',
  templateUrl: './site.detalhe-grupo.component.html',
  styleUrls: ['./site.detalhe-grupo.component.css']
})
export class SiteDetalheGrupoComponent implements OnInit {

  constructor(private utilService: UtilService, private activatedRoute: ActivatedRoute) { }

  detalhes: DetalheGrupo[];
  pagina: string;
  banner: string;

  isElginNews: boolean = false;
  elginNews: ElginNews[];

  ngOnInit(): void {
    

    this.activatedRoute.params.subscribe(routeParams => {
      this.pagina = this.activatedRoute.snapshot.params['codigo'];

      this.isElginNews = false;

      if (this.pagina == undefined) {
        this.pagina = "Marca";
      }

      this.detalhes = this.utilService.retornaDetalhesGrupoElgin().filter(x => x.codigo == this.pagina);

      switch (this.pagina) {
        case "Marca":
          this.banner = "/assets/img/Site/GrupoElgin/banner_marca.jpg";
          break;

        case "HomeOffice":
          this.banner = "/assets/img/Site/GrupoElgin/banner_homeOffice.jpg";
          break;

        case "Automacao":
          this.banner = "/assets/img/Site/GrupoElgin/banner_automacao.jpg";
          break;

        case "Certificacoes":
          this.banner = "/assets/img/Site/GrupoElgin/banner_certificacoes.jpg";
          break;

        case "Exportacoes":
          this.banner = "/assets/img/Site/GrupoElgin/banner_exportacao.jpg";
          break;

        case "Politica":
          this.banner = "/assets/img/Site/GrupoElgin/banner_qualidade.jpg";
          break;

        case "GrupoElgin":
          this.banner = "/assets/img/Site/GrupoElgin/banner_grupo_int.jpg";
          break;

        case "Informatica":
          this.banner = "/assets/img/Site/GrupoElgin/banner_informatica.jpg";
          break;

        case "refrigeracao":
          this.banner = "/assets/img/Site/GrupoElgin/banner_refrigeracao.jpg";
          break;

        case "ElginNews":
          this.banner = "/assets/img/Site/GrupoElgin/banner_elginnews.jpg";
          this.isElginNews = true;
          this.elginNews = this.activatedRoute.snapshot.data['itensElginNews'];
          break;
      }
    });
  }
}