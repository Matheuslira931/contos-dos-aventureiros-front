import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/core/services/global.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  hide = true;
  public editForm! : FormGroup;

  constructor(public router : Router, public globalService: GlobalService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() : void {
    this.editForm = new FormGroup({
      inputName: new FormControl('', [Validators.required]),
      inputEmail: new FormControl('', [Validators.required]),
      inputPassword: new FormControl('', [Validators.required])
    });
  }

  public editProfile() {
    let request = {
      nome: this.editForm.get('inputName')?.value,
      email: this.editForm.get('inputEmail')?.value,
      senha: this.editForm.get('inputPassword')?.value,
    }
    this.globalService.entityName = 'api/criar-usuario';
    this.globalService.createResource(request).subscribe({
      next: (response:any) => {
        localStorage.setItem("token", response.token);
        this.router.navigateByUrl('/anuncios');
      },
      error: (response) => console.log("deu ruim", request),
    }
    );
  }

}
