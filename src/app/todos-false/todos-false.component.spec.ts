import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosFalseComponent } from './todos-false.component';

describe('TodosFalseComponent', () => {
  let component: TodosFalseComponent;
  let fixture: ComponentFixture<TodosFalseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosFalseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
