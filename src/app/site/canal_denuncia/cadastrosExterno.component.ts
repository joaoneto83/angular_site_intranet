import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TipoUsuario } from 'src/app/intranet/_models/tipoUsuario';
import { TipoDependente } from 'src/app/intranet/_models/tipoDependente';
import { Usuario } from 'src/app/intranet/_models/usuario';

import { LoadingService } from 'src/app/_shared/services/loading.service';
import { HeaderService } from 'src/app/intranet/header/header.service';
import { CadastrosExternoService } from './cadastrosExterno.service';


@Component({
    selector: 'app-canal-denuncia-usuario',
    templateUrl: 'cadastrosExterno.component.html',
    styleUrls: ['cadastrosExterno.component.css']
})
export class CanalDenunciaComponent implements OnInit {

    

    constructor(private activatedRoute: ActivatedRoute,
        private service: CadastrosExternoService,
        private loadingService: LoadingService,
        private headerService: HeaderService) {
        // this.headerService.menuAtivo('Adm');
       
    }

    ngOnInit(): void {
 
      
        
    }



}