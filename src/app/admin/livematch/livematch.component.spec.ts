import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivematchComponent } from './livematch.component';

describe('LivematchComponent', () => {
  let component: LivematchComponent;
  let fixture: ComponentFixture<LivematchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivematchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivematchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
