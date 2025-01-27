import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarlineComponent } from './starline.component';

describe('StarlineComponent', () => {
  let component: StarlineComponent;
  let fixture: ComponentFixture<StarlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
