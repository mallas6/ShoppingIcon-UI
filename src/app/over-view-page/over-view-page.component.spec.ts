import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverViewPageComponent } from './over-view-page.component';

describe('OverViewPageComponent', () => {
  let component: OverViewPageComponent;
  let fixture: ComponentFixture<OverViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverViewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
