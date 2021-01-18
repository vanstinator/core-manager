import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlexComponent } from './plex.component';

describe('PlexComponent', () => {
  let component: PlexComponent;
  let fixture: ComponentFixture<PlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlexComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
