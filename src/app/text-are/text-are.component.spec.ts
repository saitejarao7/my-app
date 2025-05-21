import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreComponent } from './text-are.component';

describe('TextAreComponent', () => {
  let component: TextAreComponent;
  let fixture: ComponentFixture<TextAreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
