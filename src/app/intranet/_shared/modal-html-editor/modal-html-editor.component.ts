import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-modal-html-editor',
    templateUrl: './modal-html-editor.component.html',
    styleUrls: ['./modal-html-editor.component.css']
})
export class ModalHtmlEditorComponent implements OnInit {
  
    htmlValue: string;
    
    show: boolean;

    @Output()
    resposta: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void {
    }


    open(html: string) {
        this.htmlValue = html;  
        
        this.show = true;
    }

    salvar(){
        this.resposta.emit(this.htmlValue);

        this.show = false;
    }

    close() {
        this.show = false;
    }
}