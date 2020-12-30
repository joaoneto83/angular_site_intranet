import { Component, OnInit, Input, OnChanges, SimpleChanges, ElementRef, Renderer2 } from '@angular/core';
import { Classificacao } from '../../../../app/intranet/_models/classificacao';
import { Linha } from '../../../../app/_models/linha';

@Component({
  selector: 'app-site-submenu',
  templateUrl: './site.submenu.component.html',
  styleUrls: ['./site.submenu.component.css']
})
export class SiteSubMenuComponent implements OnInit, OnChanges {
  
  @Input()
  linhas: Linha[];
  @Input()
  link: string;
  chatShow:boolean = false;
 

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
  
  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
  }
  
  removeClasse(){
    let tag = this.el.nativeElement.querySelector("ul.active-link");
    if(tag !== null && tag !== undefined)
    {
      tag.classList.remove('active-link'); 
    }
  }

  adicionaClasse(elemento){
    let elementoSubMenu = elemento.parentElement.parentElement.parentElement;
    elementoSubMenu.classList.add('active-link');
  }
  
  
  adcionarElemento(src: string): HTMLScriptElement {
    if ( this.chatShow == true ){
      let div = document.getElementById("gvpFloatChat");
      div.style.display = 'block';
    }else{
      this.chatShow = true;
      const script = this.renderer.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      this.renderer.appendChild(document.body, script);
      return script;
    }
  }

  escondeChat() {
    var script = document.getElementById("gvpFloatChat");
    script.style.display = 'none';
  }

  chat(){
    this.adcionarElemento('https://webapp.ideacrm.com.br/monitoramento.js.aspx?idc=7618&pre_empresa=1008&pre_depto=1108&floatingchat=1&corbarra=0069a5&textobarra=Chat Online&cortextodabarra=ffffff');
  }
}