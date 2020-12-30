import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import {NgModel, FormControlName, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html'
})
export class CustomInputComponent implements OnInit, AfterContentInit {

  @Input() form: FormGroup
  @Input() id: string
  @Input() label: string
  @Input() labelClass: string = 'login-label'
  @Input() errorMessage: string
  @Input() errorEmailMessage: string
  @Input() obrigatorio: boolean = false;
  @Input() questionMark : boolean = false;
  @Input() mensagemTooltip: string;

  input: any 

  @ContentChild(NgModel) model: NgModel
  @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  ngOnInit() {
  
  }

  ngAfterContentInit(){
    this.input = this.model || this.control
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName')
    }
  }

  hasSuccess(): boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }
  
  hasRequired(): boolean {
    if(this.form.get(this.id).errors)
    {
      return this.form.get(this.id).errors.required && this.hasError();
    }

    return false;
  }

  hasEmail(): boolean {
    if(this.form.get(this.id).errors)
    {
      return !this.form.get(this.id).errors.required && (this.form.get(this.id).errors.email && this.hasError());
    }

    return false;
  }
}
