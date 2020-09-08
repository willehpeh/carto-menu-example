import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPanelGridComponent } from './menu-panel-grid.component';

describe('MenuPanelGridComponent', () => {
  let component: MenuPanelGridComponent;
  let fixture: ComponentFixture<MenuPanelGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPanelGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPanelGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
