import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeCmpComponent } from './some-cmp.component';

describe('SomeCmpComponent', () => {
  let component: SomeCmpComponent;
  let fixture: ComponentFixture<SomeCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
