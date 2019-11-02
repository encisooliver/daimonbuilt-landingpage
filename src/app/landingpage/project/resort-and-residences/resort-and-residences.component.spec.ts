import { async, ComponentFixture, TestBed } from '../projects/resort-and-residences/node_modules/@angular/core/testing';

import { ResortAndResidencesComponent } from './resort-and-residences.component';

describe('ResortAndResidencesComponent', () => {
  let component: ResortAndResidencesComponent;
  let fixture: ComponentFixture<ResortAndResidencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortAndResidencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortAndResidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
