import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactLoginComponent } from './react-login.component';

describe('ReactLoginComponent', () => {
  let component: ReactLoginComponent;
  let fixture: ComponentFixture<ReactLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
