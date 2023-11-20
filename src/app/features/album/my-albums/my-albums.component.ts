import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/core/services/global.service';

@Component({
  selector: 'app-my-albums',
  templateUrl: './my-albums.component.html',
  styleUrls: ['./my-albums.component.scss']
})
export class MyAlbumsComponent implements OnInit {

  public imgReturn: any;
  public returnListed: any[] = [];
  getId = localStorage.getItem("id");

  constructor(private router: Router,  public globalService: GlobalService) { }

  ngOnInit(): void {
    this.myAlbums();
  }

  myAlbums() {
    this.globalService.entityName = 'api/exibir-usuario/'+ this.getId;
    this.globalService.getResources().subscribe({
      next: (response: any) => {
        this.returnListed = response.albums;
        console.log("deu bom alterou", response);
      },
      error: (error) => console.error("deu ruim", error),
    });
  }

  editAlbum() {

  }

  deletAlbum() {

  }

  enterAd(album: any): void {
    let getIdAlbum = album;
    this.globalService.entityName = 'api/exibir-album/' + getIdAlbum;
    this.globalService.getResources().subscribe({
      next: (response: any) => {
        this.router.navigate([`/album-atual/${getIdAlbum}`]);
      },
      error: (error) => console.error("deu ruim", error),
    });
  }
}
