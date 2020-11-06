import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonHeurDeLaVilleComponent } from './bon-heur-de-la-ville.component';

describe('BonHeurDeLaVilleComponent', () => {
  let component: BonHeurDeLaVilleComponent;
  let fixture: ComponentFixture<BonHeurDeLaVilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonHeurDeLaVilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonHeurDeLaVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
