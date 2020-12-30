import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HttpRequest, HttpClient, HttpEventType, HttpBackend } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { FileResponse } from '../../../../app/_models/fileResponse';
import { LoadingService } from '../../../../app/_shared/services/loading.service';

@Component({
    selector: 'app-upload-file-multiple',
    templateUrl: 'upload.file.multiple.component.html',
    styleUrls: ['upload.file.multiple.component.css']
})
export class UploadFileMultipleComponent implements OnInit {

    public response: FileResponse;
    public progress: number;
    public message: string;
    public success: boolean;
    public fileName: string;

    file: File;

    @Input()
    idPai: string = '';

    @Input()
    caminho: string = '';

    @Input()
    nomeArquivo: string = '';

    @Input()
    texto: string = 'Selecionar arquivos';

    @Input()
    uploadManual: boolean = true;

    @Output()
    resposta: EventEmitter<FileResponse> = new EventEmitter<FileResponse>();

    @Output()
    respostaArquivo: EventEmitter<File> = new EventEmitter<File>();

    constructor(private http: HttpClient, handler: HttpBackend, private loadingService: LoadingService) {
    }

    ngOnInit(): void { }

    setResposta() {

        if (this.idPai)
            this.response.idPai = this.idPai;

        this.resposta.emit(this.response);
    }

    upload(files) {

        if (files.length === 0)
            return;

        for (var i = 0; i < files.length; i++) {
            this.file = files[i];

            if (this.uploadManual) {
                this.realizaUpload();
            }
            else {
                this.respostaArquivo.emit(this.file);
                this.loadingService.hide();
            }
        }
    }

    realizaUpload() {
        this.loadingService.show();

        const formData = new FormData();
        if (this.idPai == 'dataHora') {
            formData.append("idPai", new Date().getTime().toString());
        }
        else {
            formData.append("idPai", this.idPai);
        }
        formData.append("caminho", this.caminho);
        formData.append("nomeArquivo", this.nomeArquivo);

        formData.append(this.file.name, this.file);
        this.fileName = this.file.name;

        const uploadReq = new HttpRequest('POST', `${environment.PORTAL_API}/File/Post`, formData, {
            reportProgress: true,
        });

        this.http.request(uploadReq).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress)
                this.progress = Math.round(100 * event.loaded / event.total);
            else if (event.type === HttpEventType.Response) {
                this.loadingService.hide();
                this.response = (event.body as FileResponse);
                this.setResposta();
            }
        });
    }
}