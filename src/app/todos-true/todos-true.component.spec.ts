import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosTrueComponent } from './todos-true.component';

describe('TodosTrueComponent', () => {
  let component: TodosTrueComponent;
  let fixture: ComponentFixture<TodosTrueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosTrueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosTrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
