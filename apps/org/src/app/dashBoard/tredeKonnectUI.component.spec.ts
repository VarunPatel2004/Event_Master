import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TredeKonnectUIComponent } from './tredeKonnectUI.component';

describe('TredeKonnectUIComponent', () => {
  let component: TredeKonnectUIComponent;
  let fixture: ComponentFixture<TredeKonnectUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TredeKonnectUIComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TredeKonnectUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
