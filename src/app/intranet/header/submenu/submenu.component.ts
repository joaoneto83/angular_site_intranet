import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../_models/menu';
import * as $ from 'jquery';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-submenu',
  templateUrl: 'submenu.component.html',
  styleUrls: ['submenu.component.css']
})
export class SubMenuComponent implements OnInit {

  @Input()
  menus: Menu[];

  menuAtivo: string;

  constructor(private headerService: HeaderService) {
    this.headerService.menuAtivo$.subscribe((data) => {
      this.menuAtivo = data;
    });
  }

  ngOnInit(): void {
    var scroll_start = 0;
    var startchange = $('#divFixaTopo');

    if (startchange.length) {
      $(document).scroll(function () {
        scroll_start = $(this).scrollTop();
        if (scroll_start > 195) {
          startchange.addClass("sticky");
          $('.logoHeaderMini2').show(200);
        } else if (scroll_start <= 195) {
          $('.logoHeaderMini2').hide(200);
          startchange.removeClass("sticky");
        }
      });
    }
  }
}