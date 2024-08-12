import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedContainerComponent } from './nested-container.component';

describe('NestedContainerComponent', () => {
  let component: NestedContainerComponent;
  let fixture: ComponentFixture<NestedContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NestedContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
