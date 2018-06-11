import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowPortalsComponent } from './follow-portals.component';

describe('FollowPortalsComponent', () => {
  let component: FollowPortalsComponent;
  let fixture: ComponentFixture<FollowPortalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowPortalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowPortalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
