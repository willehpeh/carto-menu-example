import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuContainerComponent } from './menu-container/menu-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MenuPanelComponent } from './menu-panel/menu-panel.component';
import { MenuPanelGridComponent } from './menu-panel-grid/menu-panel-grid.component';
import { MenuPanelSelectComponent } from './menu-panel-select/menu-panel-select.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuContainerComponent,
    MenuPanelComponent,
    MenuPanelGridComponent,
    MenuPanelSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
