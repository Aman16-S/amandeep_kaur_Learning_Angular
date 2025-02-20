import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyListItemComponent } from './modify-list-item.component';

describe('ModifyListItemComponent', () => {
  let component: ModifyListItemComponent;
  let fixture: ComponentFixture<ModifyListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
