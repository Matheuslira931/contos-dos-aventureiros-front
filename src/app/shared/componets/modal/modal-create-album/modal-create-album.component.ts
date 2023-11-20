import { GlobalService } from 'src/app/core/services/global.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-create-album',
  templateUrl: './modal-create-album.component.html',
  styleUrls: ['./modal-create-album.component.scss']
})
export class ModalCreateAlbumComponent implements OnInit {

  public creatAlbum! : FormGroup;
  public ovo: any;

  constructor(public router : Router, public globalService: GlobalService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() : void {
    this.creatAlbum = new FormGroup({
      inputTitle: new FormControl('', [Validators.required]),
      inputImg: new FormControl(null, [Validators.required]),
      inputDescription: new FormControl('', [Validators.required])
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    console.log(file);
    this.creatAlbum.get('inputImg')?.setValue(file);
    console.log(this.creatAlbum.get('inputImg'));
  }

  public createAlbum() {
    const userId = localStorage.getItem("id");
    const formData =  new FormData();
    formData.append('titulo',this.creatAlbum.get('inputTitle')?.value);
    formData.append('imagem', this.creatAlbum.get('inputImg')?.value);
    formData.append('descricao', this.creatAlbum.get('inputDescription')?.value);
    formData.append('usuario_id', userId ? String(userId) : '');
    this.globalService.entityName = 'api/criar-album';
    this.globalService.createResource(formData).subscribe({
      next: (response:any) => {
        this.dialog.closeAll();
        window.location.reload();
      },
      error: (response) => console.log("deu ruim", formData),
    }
    );
  }
}
