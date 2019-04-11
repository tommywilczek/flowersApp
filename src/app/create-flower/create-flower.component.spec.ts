import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFlowerComponent } from './create-flower.component';
import { AllMaterialModule } from '../material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateFlowerComponent', () => {
  let component: CreateFlowerComponent;
  let fixture: ComponentFixture<CreateFlowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AllMaterialModule, BrowserAnimationsModule],
      declarations: [ CreateFlowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFlowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Text Fields', function() {
    it('should display a name field before any other fields', function() {
      const firstField = document.getElementsByTagName('input')[0].getAttribute('placeholder');
      expect(firstField.toLowerCase()).toContain('name');
    });
    it('should display a price field second', function() {
      const secondField = document.getElementsByTagName('input')[1].getAttribute('placeholder');
      expect(secondField.toLowerCase()).toContain('price');
    });
    it('should display an add button', function() {
      const icon = document.getElementsByTagName('mat-icon')[0];
      expect(icon.innerHTML).toContain('add');
    });
  });
});
