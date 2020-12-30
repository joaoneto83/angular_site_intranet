import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Classificacao } from '../../../app/_models/classificacao';
import { Produto } from '../../../app/_models/produto';
import { ComparativoService } from '../_shared/site-comparativo/site-comparativo.service';
import { LinhaService } from '../../../app/_shared/services/linha.service';
import { EspecificacaoTecnica } from '../../../app/_models/especificacaoTecnica';
import { SiteAparelhoIdealComponent } from '../site-aparelho-ideal/site.aparelho.ideal.component';
import { SubLinha } from '../../../app/_models/subLinha';
import { TranslateService } from 'ng2-translate';

@Component({
    templateUrl: './site-filtro.component.html',
    styleUrls: ['./site-filtro.component.css']
})
export class SiteFiltroComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute,
        private comparativo: ComparativoService,
        private linhaService: LinhaService,
        private translate: TranslateService) { }

    subLinha: SubLinha;
    nomeLinha: string = "";
    produtos: Produto[];
    filtros: Classificacao[];
    filtrosComparativo: Classificacao[];
    rows: any[] = [];
    filter: string[] = [];
    filter2: string[] = [];
    filter3: string[] = [];
    filter4: string[] = [];
    filter5: string[] = [];
    filter6: string[] = [];
    filter7: string[] = [];
    filter8: string[] = [];
    filter9: string[] = [];
    filter10: string[] = [];
    filter11: string[] = [];
    filterShow:boolean = true;
    filterShow2:boolean = false;
    filterShow3:boolean = false;
    filterShow4:boolean = false;
    filterShow5:boolean = false;
    filterShow6:boolean = false;
    filterShow7:boolean = false;
    filterShow8:boolean = false;
    filterShow9:boolean = false;
    filterShow10:boolean = false;
    filterShow11:boolean = false;
    filter0: number = 0;

    especificacoes: EspecificacaoTecnica[] = [];

    @ViewChild(SiteAparelhoIdealComponent) aparelhoIdealComp:SiteAparelhoIdealComponent;

    ngOnInit() {
         this.activatedRoute.params.subscribe(() => {

            this.filterShow = true;
            this.filterShow2 = false;
            this.filterShow3 = false;
            this.filterShow4 = false;
            this.filterShow5 = false;
            this.filterShow6 = false;
            this.filterShow7 = false;
            this.filterShow8 = false;
            this.filterShow9 = false;
            this.filterShow10 = false;
            this.filterShow11 = false;
            this.filter0 = 0;


            this.filter = [];
            
            this.subLinha = this.activatedRoute.snapshot.data['sublinha'];
            this.filtros = this.activatedRoute.snapshot.data['filtros'];
            this.filtrosComparativo = this.activatedRoute.snapshot.data['filtrosComparativo'];
            this.produtos = this.activatedRoute.snapshot.data['produtos'];
            this.especificacoes = this.activatedRoute.snapshot.data['especificacoes'];
            
            this.comparativo.clear();

            this.linhaService.getLinhaComSubLinhas(true).subscribe(
                res => this.getLinhasSuccess(res),
                () => console.log("erro ao buscar nome da linha")
               
            );

            if(this.activatedRoute.snapshot.params['linha'] != 'Refrigeracao'){
                this.translate.use('pt');
            }

        });
    }

    // setEspecificacoes(){
    //     if(this.produtos && this.produtos.length > 0)
    //         this.especificacoes = this.produtos[0].especificacoesTecnicas;
    // }

    getLinhasSuccess(res) {
        let linha = this.activatedRoute.snapshot.params['linha'];
        this.nomeLinha = res.filter(x => x.codigoLinha == linha)[0].nomeLinha;
    }

    filtrar(filtros: string[]) {
       
        this.filter = [...filtros];
      
            // if (filtros.toString() == ''){
            //     console.log(filtros.toString())
            //     this.filterShow = true;
            // }
                if (filtros.toString() == '39765584-339e-4653-b09b-8e935b139810'){
                    this.filter2 = [...filtros];
                    this.filterShow2 = !this.filterShow2;
                   
               
                    if(this.filterShow2 == false){
                        this.filter0 = this.filter0 - 1;
                    } else {
                        this.filter0 = this.filter0 + 1;
                    }
                    
                    console.log(this.filter0);
                    
                  if (this.filter0 <= 0){
                    this.filter = [];
                    this.filterShow = true;
                    
                  } else {
                    this.filterShow = false;
                    }


                }
                if (filtros.toString() == '21ff6d04-8389-4df9-9e7f-295004fc89ca'){
                    this.filter3 = [...filtros];
                    this.filterShow3 = !this.filterShow3 ;
                   
               
                    if(this.filterShow3 == false){
                        this.filter0 = this.filter0 - 1;
                    } else {
                        this.filter0 = this.filter0 + 1;
                    }
                    
                    console.log(this.filter0);
                    
                  if (this.filter0 <= 0){
                    this.filter = [];
                    this.filterShow = true;
                  } else {
                    this.filterShow = false;
                    }
                }
                if (filtros.toString() == '835c0ae6-0848-45c7-af24-2f966d031151'){
                    this.filter4 = [...filtros];
                    this.filterShow4 = !this.filterShow4 ;
                      
               
                    if(this.filterShow4 == false){
                        this.filter0 = this.filter0 - 1;
                    } else {
                        this.filter0 = this.filter0 + 1;
                    }
                    
                    console.log(this.filter0);
                    
                  if (this.filter0 <= 0){
                    this.filter = [];
                    this.filterShow = true;
                  } else {
                    this.filterShow = false;
                    }
                }
                if (filtros.toString() == 'ff1abe47-c049-4068-95b1-6ef41dcb25b0'){
                    this.filter5 = [...filtros];
                    this.filterShow5 = !this.filterShow5;
               
               
                    if(this.filterShow5 == false){
                        this.filter0 = this.filter0 - 1;
                    } else {
                        this.filter0 = this.filter0 + 1;
                    }
                    
                    console.log(this.filter0);
                    
                  if (this.filter0 <= 0){
                    this.filter = [];
                    this.filterShow = true;
                  } else {
                    this.filterShow = false;
                    }
                }
                if (filtros.toString() == '7fcb188b-393f-457f-b145-bbb5367ec8b8'){
                    this.filter6 = [...filtros];
                    this.filterShow6 = !this.filterShow6;
             
               
                    if(this.filterShow6 == false){
                        this.filter0 = this.filter0 - 1;
                    } else {
                        this.filter0 = this.filter0 + 1;
                    }
                    
                    console.log(this.filter0);
                    
                  if (this.filter0 <= 0){
                    this.filter = [];
                    this.filterShow = true;
                  } else {
                    this.filterShow = false;
                    }
                }
                if (filtros.toString() == 'c9c8ba8b-c264-477e-8bbd-ee19de43399c'){
                    this.filter7 = [...filtros];
                    this.filterShow7 = !this.filterShow7;
          
               
                    if(this.filterShow7 == false){
                        this.filter0 = this.filter0 - 1;
                    } else {
                        this.filter0 = this.filter0 + 1;
                    }
                    
                    console.log(this.filter0);
                    
                  if (this.filter0 <= 0){
                    this.filter = [];
                    this.filterShow = true;
                  } else {
                    this.filterShow = false;
                    }
                }
                if (filtros.toString() == '84fd3e83-c1a1-4a6e-b3f8-d19e90822bb8'){
                    this.filter8 = [...filtros];
                    this.filterShow8 = !this.filterShow8;
        
               
                    if(this.filterShow8 == false){
                        this.filter0 = this.filter0 - 1;
                    } else {
                        this.filter0 = this.filter0 + 1;
                    }
                    
                    console.log(this.filter0);
                    
                  if (this.filter0 <= 0){
                    this.filter = [];
                    this.filterShow = true;
                    
                  } else {
                    this.filterShow = false;
                    }
                }
                if (filtros.toString() == 'bcd52d26-613e-4132-a982-f884faa94289'){
                    this.filter9 = [...filtros];
                    this.filterShow9 = !this.filterShow9;
             
               
                    if(this.filterShow9 == false){
                        this.filter0 = this.filter0 - 1;
                    } else {
                        this.filter0 = this.filter0 + 1;
                    }
                    
                    console.log(this.filter0);
                    
                  if (this.filter0 <= 0){
                    this.filter = [];
                    this.filterShow = true;
                  } else {
                    this.filterShow = false;
                    }
                }
                if (filtros.toString() == 'ed4602d6-2c9d-43f8-b93e-2d6b90b8edaa'){
                    this.filter10 = [...filtros];
                    this.filterShow10 = !this.filterShow10;
                
               
                    if(this.filterShow10 == false){
                        this.filter0 = this.filter0 - 1;
                    } else {
                        this.filter0 = this.filter0 + 1;
                    }
                    
                    console.log(this.filter0);
                    
                  if (this.filter0 <= 0){
                    this.filter = [];
                    this.filterShow = true;
                  } else {
                    this.filterShow = false;
                    }
                }
                if (filtros.toString() == '224bb1e2-cb13-419d-b68f-fc0abbafe0c0'){
                    this.filter11 = [...filtros];
                    this.filterShow11 = !this.filterShow11;
                      
               
                    if(this.filterShow11 == false){
                        this.filter0 = this.filter0 - 1;
                    } else {
                        this.filter0 = this.filter0 + 1;
                    }
                    
                    console.log(this.filter0);
                    
                  if (this.filter0 <= 0){
                    this.filter = [];
                    this.filterShow = true;
                  } else {
                    this.filterShow = false;
                    }
                }     
         
    }

    abreAparelhoIdeal()
    {
        this.aparelhoIdealComp.open();
    }


}