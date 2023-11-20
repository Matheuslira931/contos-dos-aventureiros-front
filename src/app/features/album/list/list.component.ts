import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/core/services/global.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public imgReturn: any;
  public returnListed: any[] = [];

  constructor(private router: Router,  public globalService: GlobalService) { }

  ngOnInit(): void {
    this.allAnnouncement();
  }


  allAnnouncement() {
    this.globalService.entityName = 'api/pesquisar-album';
    this.globalService.getResources().subscribe({
      next: (response: any) => {
        this.returnListed = response;
        console.log("deu bom alterou", response);
      },
      error: (error) => console.error("deu ruim", error),
    });
  }


  enterAd(): void {
    alert();
  }
}
