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
  });
});
