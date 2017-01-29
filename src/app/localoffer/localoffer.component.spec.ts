/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LocalofferComponent } from './localoffer.component';

describe('LocalofferComponent', () => {
  let component: LocalofferComponent;
  let fixture: ComponentFixture<LocalofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
