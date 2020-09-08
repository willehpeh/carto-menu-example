import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPanelSelectComponent } from './menu-panel-select.component';

describe('MenuPanelSelectComponent', () => {
  let component: MenuPanelSelectComponent;
  let fixture: ComponentFixture<MenuPanelSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPanelSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPanelSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
