import { Component, Input, OnInit } from '@angular/core';
import { MenuConfigService } from '../menu-config.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.scss']
})
export class MenuContainerComponent implements OnInit {

  @Input() menuConfig$: Observable<any>;
  @Input() side: string;

  constructor(private menuConfig: MenuConfigService) { }

  ngOnInit(): void {

  }

}
