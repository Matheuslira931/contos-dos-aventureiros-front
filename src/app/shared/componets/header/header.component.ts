import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/core/services/global.service';
import { ModalLoginComponent } from '../modal/modal-login/modal-login.component';
import { ModalSignComponent } from '../modal/modal-sign/modal-sign.component';
import { UpdateListService } from 'src/app/core/services/feature/album/updateList.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchForm! : FormGroup;
  @Output() methodName = new EventEmitter<any>();

  constructor(public router : Router, public globalService: GlobalService, public dialog: MatDialog, public updateList: UpdateListService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() : void {
    this.searchForm = new FormGroup({
      inputSearch: new FormControl('', [Validators.required]),
    });
  }

  public search() {
    if (this.searchForm.get('inputSearch')?.value.length > 2) {
      this.globalService.entityName = `api/pesquisar-album?textoPesquisa=${this.searchForm.get('inputSearch')?.value}`;
      this.globalService.getResources().subscribe({
        next: (response:any) => {
          this.updateList.returnListAlbum = response;
          this.updateList.filterAd(response);
        },
        error: (response) => console.log("deu ruim")
      });
    }
  }
}
