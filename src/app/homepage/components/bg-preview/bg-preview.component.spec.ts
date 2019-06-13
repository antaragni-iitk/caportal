import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgPreviewComponent } from './bg-preview.component';

describe('BgPreviewComponent', () => {
  let component: BgPreviewComponent;
  let fixture: ComponentFixture<BgPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
