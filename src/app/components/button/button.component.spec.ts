import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { ButtonComponent } from './button.component';
import { ButtonStyle } from './button.constants';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Check view content', () => {
    it('must have a span with description', () => {
      component.description = 'Test';

      fixture.detectChanges();

      let de = fixture.debugElement.query(By.css('span')).nativeElement;
      expect(de.innerText).toContain('Test');
    });

    it('must contain an image when loading is true', () => {
      component.loading = true;

      fixture.detectChanges();

      let img = fixture.debugElement.query(By.css('img')).nativeElement;
      let span = fixture.debugElement.query(By.css('span'));
      
      expect(img).toBeTruthy();
      expect(span).not.toBeTruthy();
    });

    it('must contain the primary class', () => {
      fixture.detectChanges();

      let de = fixture.debugElement.query(By.css('.primary'));
      
      expect(de).toBeTruthy();
    });

    it('must contain the transparent class', () => {
      component.appearance = ButtonStyle.TRANSPARENT;
      
      fixture.detectChanges();

      let de = fixture.debugElement.query(By.css('.transparent'));
      
      expect(de).toBeTruthy();
    });
  })
});
