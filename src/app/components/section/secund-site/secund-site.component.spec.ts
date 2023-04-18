import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecundSiteComponent } from './secund-site.component';

describe('SecundSiteComponent', () => {
  let component: SecundSiteComponent;
  let fixture: ComponentFixture<SecundSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecundSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecundSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
