import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-gradient',
  templateUrl: './button-gradient.component.html',
  styleUrls: ['./button-gradient.component.css']
})
export class ButtonGradientComponent implements OnInit {

  @Input() de: string;
  @Input() ate: string;
  @Input() link: string;
  @Input() descricao: string;
  @Input() deg: string;
  @Input() height: string;
  @Input() linkExterno: boolean = false;
  @Input() download: boolean = false;

  style: string;

  ngOnInit(): void {
    if (this.deg)
      this.style = 'linear-gradient(' + this.deg + 'deg,' + this.de + ', ' + this.ate + ')';
    else
      this.style = 'linear-gradient(to right, ' + this.de + ', ' + this.ate + ')';
  }

}