import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAppliedPostComponent } from './user-applied-post.component';

describe('UserAppliedPostComponent', () => {
  let component: UserAppliedPostComponent;
  let fixture: ComponentFixture<UserAppliedPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAppliedPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAppliedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
