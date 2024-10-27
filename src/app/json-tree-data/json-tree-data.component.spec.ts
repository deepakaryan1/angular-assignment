import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonTreeDataComponent } from './json-tree-data.component';

describe('JsonTreeDataComponent', () => {
  let component: JsonTreeDataComponent;
  let fixture: ComponentFixture<JsonTreeDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonTreeDataComponent]
    });
    fixture = TestBed.createComponent(JsonTreeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
