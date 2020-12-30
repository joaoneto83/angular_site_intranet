import { Injectable } from "@angular/core";
import { HttpClient, HttpBackend } from "@angular/common/http";
import { Log } from "./server-log";
import { environment } from '../../../environments/environment';

const API = environment.PORTAL_API;

@Injectable({ providedIn: 'root'})
export class ServerLogService { 

    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    log(serverLog: Log) {

        return this.http.post(API + '/Infra/Log', serverLog);
    }
}