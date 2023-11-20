import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class UpdateListService {
  private returnListedSource = new Subject<any[]>();

  returnListed$ = this.returnListedSource.asObservable();

  public returnListed: any[] = [];
  public returnListAlbum: any[] = [];

  constructor() {}

  filterAd(event: any) {
    console.log(event);
    if (event === '') {
      this.returnListed = this.returnListAlbum;
    }
    this.returnListed = event;
    this.returnListedSource.next(this.returnListed);
  }
}
