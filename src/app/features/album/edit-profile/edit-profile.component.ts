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
  getId = localStorage.getItem("id");
  getName= '';
  public editForm! : FormGroup;

  constructor(public router : Router, public globalService: GlobalService) { }

  ngOnInit(): void {
    this.buildForm();
    this.getDataProfile();
  }

  buildForm() : void {
    this.editForm = new FormGroup({
      inputName: new FormControl('', [Validators.required]),
    });
  }

  public getDataProfile() {
    this.globalService.entityName = 'api/exibir-usuario/' + this.getId;
    this.globalService.getResources().subscribe((response:any) => {
      this.getName = response.nome;
      this.editForm.get('inputName')?.setValue(this.getName)
    });
  }

  public editProfile() {
    let request = {
      nome: this.editForm.get('inputName')?.value,
    }
    this.globalService.entityName = 'api/atualizar-usuario/' + this.getId;
    this.globalService.updateResource(request).subscribe({
      next: (response:any) => {
        console.log("deu bom alterou", request)
        this.router.navigateByUrl('/');
      },
      error: (response) => console.log("deu ruim", request),
    }
    );
  }

}
