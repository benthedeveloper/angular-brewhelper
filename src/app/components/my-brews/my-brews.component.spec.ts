import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBrewsComponent } from './my-brews.component';

describe('MyBrewsComponent', () => {
  let component: MyBrewsComponent;
  let fixture: ComponentFixture<MyBrewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBrewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBrewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
