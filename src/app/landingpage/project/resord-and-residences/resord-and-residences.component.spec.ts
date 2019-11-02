import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResordAndResidencesComponent } from './resord-and-residences.component';

describe('ResordAndResidencesComponent', () => {
  let component: ResordAndResidencesComponent;
  let fixture: ComponentFixture<ResordAndResidencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResordAndResidencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResordAndResidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
