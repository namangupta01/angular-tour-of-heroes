import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDailogExampleComponent } from './mat-dailog-example.component';

describe('MatDailogExampleComponent', () => {
  let component: MatDailogExampleComponent;
  let fixture: ComponentFixture<MatDailogExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDailogExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDailogExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
