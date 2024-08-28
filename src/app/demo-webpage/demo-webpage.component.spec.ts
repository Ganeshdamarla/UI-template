import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoWebpageComponent } from './demo-webpage.component';

describe('DemoWebpageComponent', () => {
  let component: DemoWebpageComponent;
  let fixture: ComponentFixture<DemoWebpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoWebpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoWebpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
