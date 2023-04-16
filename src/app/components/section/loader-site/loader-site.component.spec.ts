import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderSiteComponent } from './loader-site.component';

describe('LoaderSiteComponent', () => {
  let component: LoaderSiteComponent;
  let fixture: ComponentFixture<LoaderSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
