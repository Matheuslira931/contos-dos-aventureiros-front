import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public returnListed: any[] = [];
  public returnListAd: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  filterAd(event: any) {
    if (event === '') {
      this.returnListed = this.returnListAd;
    }
    this.returnListed = event;
  }
}
