import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContatoSiteComponent } from './dialog-contato-site.component';

describe('DialogContatoSiteComponent', () => {
  let component: DialogContatoSiteComponent;
  let fixture: ComponentFixture<DialogContatoSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContatoSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogContatoSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
