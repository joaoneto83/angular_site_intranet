import { Component } from '@angular/core';
import { Menu } from './_models/menu';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './intranet.component.html',
  styleUrls: ['./intranet.component.css']
})
export class IntranetComponent {
  title = 'elgin-intranet-app';

  menus: Menu[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.menus = this.activatedRoute.snapshot.data["menus"];
    
  }

  onActivate(event) {
    if (window) {
      window.scroll(0, 0);
    }
  }
}
