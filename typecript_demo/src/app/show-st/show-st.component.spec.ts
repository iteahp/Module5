import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStComponent } from './show-st.component';

describe('ShowStComponent', () => {
  let component: ShowStComponent;
  let fixture: ComponentFixture<ShowStComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
