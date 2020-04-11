import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictEntrycompComponent } from './district-entrycomp.component';

describe('DistrictEntrycompComponent', () => {
  let component: DistrictEntrycompComponent;
  let fixture: ComponentFixture<DistrictEntrycompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictEntrycompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictEntrycompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
