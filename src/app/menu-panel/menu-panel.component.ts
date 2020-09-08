import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss']
})
export class MenuPanelComponent implements OnInit {

  @Input() config: any;
  displayString: string;

  constructor() { }

  ngOnInit(): void {
    this.displayString = this.config.title;
  }

}
