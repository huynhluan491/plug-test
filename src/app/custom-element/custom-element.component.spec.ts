import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CustomElementComponent } from './custom-element.component';

describe('CustomElementComponent', () => {
  let component: CustomElementComponent;
  let fixture: ComponentFixture<CustomElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct section text', () => {
    const element = fixture.debugElement.query(By.css('.mat-subtitle-1'));
    expect(element).toBeTruthy();

    const sectionText = element.nativeElement.textContent.trim();
    expect(sectionText).toBe('Angular micro frontend template with Angular material');
  });

  it('should have buttons with specified attributes', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));

    expect(buttons.length).toBe(5);

    expect(buttons[0].nativeElement.textContent.trim()).toBe('Basic');
    expect(buttons[1].nativeElement.textContent.trim()).toBe('Primary');
    expect(buttons[2].nativeElement.textContent.trim()).toBe('Accent');
    expect(buttons[3].nativeElement.textContent.trim()).toBe('Warn');
    expect(buttons[4].nativeElement.textContent.trim()).toBe('Disabled');

    const linkButton = fixture.debugElement.query(By.css('a'));
    expect(linkButton.nativeElement.textContent.trim()).toBe('Link');
    expect(linkButton.nativeElement.getAttribute('href')).toBe('https://www.google.com/');
    expect(linkButton.nativeElement.getAttribute('target')).toBe('_blank');
  });
});
