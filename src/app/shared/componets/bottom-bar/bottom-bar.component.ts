import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/core/services/global.service';
import { ModalLoginComponent } from '../modal/modal-login/modal-login.component';
import { ModalSignComponent } from '../modal/modal-sign/modal-sign.component';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {

  public userLogged: any;

  constructor(public router: Router,
    public globalService: GlobalService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTokenUser();
  }

  getTokenUser() {
    if (localStorage.getItem('onlyToken') || localStorage.getItem("signed")) {
      this.userLogged = localStorage.getItem('onlyToken') || localStorage.getItem("signed");
    }
  }

  openLogin() {
    const dialogRef = this.dialog.open(ModalLoginComponent, {
      panelClass: "dailog-login"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openSign() {
    const dialogRef = this.dialog.open(ModalSignComponent, {
      panelClass: "dailog-sign"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  goEditProfile() {
    this.router.navigate(['/editar-perfil']);
  }

  exit() {
    localStorage.removeItem('tokenUser');
    localStorage.removeItem('onlyToken');
    localStorage.removeItem('signed');
    this.router.navigate(['/auth']);
  }

}
