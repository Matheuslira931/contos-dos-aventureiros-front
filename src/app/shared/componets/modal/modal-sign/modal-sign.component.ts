import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalService } from './../../../../core/services/global.service';


@Component({
  selector: 'app-modal-sign',
  templateUrl: './modal-sign.component.html',
  styleUrls: ['./modal-sign.component.scss']
})
export class ModalSignComponent implements OnInit {

  hide = true;
  public signForm! : FormGroup;

  constructor(public router : Router, public globalService: GlobalService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.buildForm();
  }

  redirect_auth() {
    this.dialog.closeAll();
    this.router.navigate(['/auth']);
  }

  buildForm() : void {
    this.signForm = new FormGroup({
      inputName: new FormControl('', [Validators.required]),
      inputEmail: new FormControl('', [Validators.required]),
      inputPassword: new FormControl('', [Validators.required])
    });
  }

  public cadastrar() {
    let request = {
      nome: this.signForm.get('inputName')?.value,
      email: this.signForm.get('inputEmail')?.value,
      senha: this.signForm.get('inputPassword')?.value,
    }
    this.globalService.entityName = 'api/criar-usuario';
    this.globalService.createResource(request).subscribe({
      next: (response:any) => {
        localStorage.setItem("token", response.token);
        this.dialog.closeAll();
        this.router.navigateByUrl('/anuncios');
      },
      error: (response) => console.log("deu ruim", request),
    }
    );
  }

}
