import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [
        FormsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit todoAdd event', async(() => {
    component.todoAdd.subscribe((todo) => {
      expect(todo.text).toBe('Rentrer à la maison');
      expect(todo).not.toEqual(component.todo);
    });

    component.todo = {
      text: 'Rentrer à la maison',
    };
    fixture.detectChanges();
    fixture.debugElement.query(By.css('form')).triggerEventHandler('submit', false);
  }));
});
