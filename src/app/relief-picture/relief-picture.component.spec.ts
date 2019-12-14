import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliefPictureComponent } from './relief-picture.component';

describe('ReliefPictureComponent', () => {
  let component: ReliefPictureComponent;
  let fixture: ComponentFixture<ReliefPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReliefPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReliefPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
