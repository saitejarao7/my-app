import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateuserTaskComponent } from './createuser-task.component';

describe('CreateuserTaskComponent', () => {
  let component: CreateuserTaskComponent;
  let fixture: ComponentFixture<CreateuserTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateuserTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateuserTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
