import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
    templateUrl: './site-trabalhe-conosco.component.html',
    styleUrls: ['./site-trabalhe-conosco.component.css']
})
export class SiteTrabalheConoscoComponent implements OnInit {

    form: FormGroup;

    constructor( ) { }

    ngOnInit(): void {
    }

}