import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaMusicaEAlbumComponent } from './pesquisa-musica-e-album.component';

describe('PesquisaMusicaEAlbumComponent', () => {
  let component: PesquisaMusicaEAlbumComponent;
  let fixture: ComponentFixture<PesquisaMusicaEAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaMusicaEAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaMusicaEAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
