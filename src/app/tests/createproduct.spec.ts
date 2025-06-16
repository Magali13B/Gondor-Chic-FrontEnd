import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createproduct } from '../components/createproduct';

describe('Createproduct', () => {
  let component: Createproduct;
  let fixture: ComponentFixture<Createproduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createproduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createproduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
