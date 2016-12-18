/**
 * Created by Utilisateur on 18/12/2016.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NumTelComponent } from './numTel.component';

describe('NumTelComponent', () => {
  let component: NumTelComponent;
  let fixture: ComponentFixture<NumTelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumTelComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
