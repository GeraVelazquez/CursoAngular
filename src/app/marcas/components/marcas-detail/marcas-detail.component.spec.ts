import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasDetailComponent } from './marcas-detail.component';

describe('MarcasDetailComponent', () => {
  let component: MarcasDetailComponent;
  let fixture: ComponentFixture<MarcasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
