import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Porta } from './porta';

describe('Porta', () => {
  let component: Porta;
  let fixture: ComponentFixture<Porta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Porta],
    }).compileComponents();

    fixture = TestBed.createComponent(Porta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
