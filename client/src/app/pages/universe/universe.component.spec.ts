import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverseComponent } from './universe.component';

describe('UniverseComponent', () => {
  let component: UniverseComponent;
  let fixture: ComponentFixture<UniverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniverseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
