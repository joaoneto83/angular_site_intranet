import { Injectable, OnInit } from '@angular/core';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { alertaPost } from '../../_models/alertaPost';

@Injectable({
    providedIn: 'root',
})
export class AlertaService implements OnInit {
    
    constructor(private notifications: NotificationsService) { 
         
    }

    ngOnInit(): void {
        
    }

    verificaAlertaPost()
    {
        let json = localStorage.getItem('alertaPost');
        if(json)
        {
            let alertaPost = <alertaPost>JSON.parse(json);
            this.notifications.create(alertaPost.titulo, alertaPost.texto, alertaPost.tipo, { timeOut: 5000 });
            localStorage.removeItem('alertaPost');
        }
    }

    Aviso(titulo: string, texto: string, depoisPost: boolean = false)
    {
        if(depoisPost)
        {
            this.alertaPost(titulo, texto,  NotificationType.Warn);
        }
        else{
            this.notifications.create(titulo, texto, NotificationType.Warn, { timeOut: 5000 });
        }
    }

    Sucesso(titulo: string, texto: string, depoisPost: boolean = false)
    {
        if(depoisPost)
        {
            this.alertaPost(titulo, texto,  NotificationType.Success);
        }
        else{
            this.notifications.create(titulo, texto, NotificationType.Success, { timeOut: 5000 });
        }
    }

    Erro(titulo: string, texto: string, depoisPost: boolean = false)
    {
        if(depoisPost)
        {
            this.alertaPost(titulo, texto,  NotificationType.Error);
        }
        else{
            this.notifications.create(titulo, texto, NotificationType.Error, { timeOut: 5000 });
        }
    }

    private alertaPost(titulo: string, texto: string, tipo: NotificationType)
    {
        let alertaPost = <alertaPost>{
            titulo,texto,tipo
        };

        localStorage.setItem('alertaPost', JSON.stringify(alertaPost));
    }
}