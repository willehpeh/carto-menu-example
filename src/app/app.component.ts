import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuConfigService } from './menu-config.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  leftMenu$: Observable<any>;
  rightMenu$: Observable<any>;

  constructor(private menuConfig: MenuConfigService) {
  }

  ngOnInit(): void {
    this.leftMenu$ = this.menuConfig.leftMenu$.asObservable();
    this.rightMenu$ = this.menuConfig.rightMenu$.asObservable();
    this.menuConfig.emitLeftMenu();
    this.menuConfig.emitRightMenu();
  }

}
