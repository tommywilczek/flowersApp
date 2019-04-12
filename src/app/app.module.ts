import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllMaterialModule } from './material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowFlowersComponent } from './show-flowers/show-flowers.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CreateFlowerComponent } from './create-flower/create-flower.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFieldComponent } from './dynamic-field/dynamic-field.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowFlowersComponent,
    NavMenuComponent,
    CreateFlowerComponent,
    DynamicFieldComponent
  ],
  imports: [
    BrowserModule,
    AllMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
