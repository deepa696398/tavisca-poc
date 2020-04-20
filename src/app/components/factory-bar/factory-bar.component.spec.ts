import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryBarComponent } from './factory-bar.component';

describe('FactoryBarComponent', () => {
  let component: FactoryBarComponent;
  let fixture: ComponentFixture<FactoryBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
