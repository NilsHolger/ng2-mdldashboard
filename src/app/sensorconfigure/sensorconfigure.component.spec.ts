/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SensorconfigureComponent } from './sensorconfigure.component';

describe('SensorconfigureComponent', () => {
  let component: SensorconfigureComponent;
  let fixture: ComponentFixture<SensorconfigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorconfigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorconfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
