import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UpdateListService } from 'src/app/core/services/feature/album/updateList.service';
import { GlobalService } from 'src/app/core/services/global.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public imgReturn: any;
  public returnListed: any[] = [];

  constructor(private router: Router,  public globalService: GlobalService, public updateList: UpdateListService) {
    this.subscription = this.updateList.returnListed$.subscribe((response: any[]) => {
      this.returnListed = response
    });
  }

  ngOnInit(): void {
    this.allAnnouncement();
  }

  allAnnouncement() {
    this.globalService.entityName = 'api/pesquisar-album';
    this.globalService.getResources().subscribe({
      next: (response: any) => {
        this.returnListed = response;
      },
      error: (error) => console.error("deu ruim", error),
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
