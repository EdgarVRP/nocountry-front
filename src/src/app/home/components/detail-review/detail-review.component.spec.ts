import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReviewComponent } from './detail-review.component';

describe('DetailReviewComponent', () => {
  let component: DetailReviewComponent;
  let fixture: ComponentFixture<DetailReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailReviewComponent]
    });
    fixture = TestBed.createComponent(DetailReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
