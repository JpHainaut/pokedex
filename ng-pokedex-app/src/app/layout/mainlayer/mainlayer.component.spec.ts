import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainlayerComponent } from './mainlayer.component';

describe('MainlayerComponent', () => {
  let component: MainlayerComponent;
  let fixture: ComponentFixture<MainlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
