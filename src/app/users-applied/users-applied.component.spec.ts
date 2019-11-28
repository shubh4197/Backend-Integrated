import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAppliedComponent } from './users-applied.component';

describe('UsersAppliedComponent', () => {
  let component: UsersAppliedComponent;
  let fixture: ComponentFixture<UsersAppliedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAppliedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
