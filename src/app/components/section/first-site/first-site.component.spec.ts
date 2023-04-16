import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSiteComponent } from './first-site.component';

describe('FirstSiteComponent', () => {
  let component: FirstSiteComponent;
  let fixture: ComponentFixture<FirstSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
