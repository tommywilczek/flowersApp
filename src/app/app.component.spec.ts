import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ShowFlowersComponent } from './show-flowers/show-flowers.component';
import { AllMaterialModule } from './material-module';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AllMaterialModule,
        FormGroup,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        ShowFlowersComponent,
        NavMenuComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
