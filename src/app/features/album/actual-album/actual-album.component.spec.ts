import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualAlbumComponent } from './actual-album.component';

describe('ActualAlbumComponent', () => {
  let component: ActualAlbumComponent;
  let fixture: ComponentFixture<ActualAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
