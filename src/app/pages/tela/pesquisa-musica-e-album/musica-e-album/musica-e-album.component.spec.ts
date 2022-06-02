import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicaEAlbumComponent } from './musica-e-album.component';

describe('MusicaEAlbumComponent', () => {
  let component: MusicaEAlbumComponent;
  let fixture: ComponentFixture<MusicaEAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicaEAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicaEAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
