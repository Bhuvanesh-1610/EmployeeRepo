import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateuserComponent } from './GenerateuserComponent';

describe('GenerateuserComponent', () => {
  let component: GenerateuserComponent;
  let fixture: ComponentFixture<GenerateuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
