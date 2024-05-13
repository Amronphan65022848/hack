import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexttospeachComponent } from './texttospeach.component';

describe('TexttospeachComponent', () => {
  let component: TexttospeachComponent;
  let fixture: ComponentFixture<TexttospeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TexttospeachComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TexttospeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
