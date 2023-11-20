import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { User } from '../interfaces/interfaces';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage{

  userdata: any;

  newUsuario: User={
    nombre:"",
    n_usuario:"",
    password:"",
    email:"",
    role:"usuario",
    isactive: false
  }

  regForm: FormGroup;

  constructor(private menuController: MenuController,
              private authservice: AuthService,
              private alertController: AlertController,
              private builder: FormBuilder,
              private apiCrud: ApiCrudService,
              private router: Router){
                this.regForm = this.builder.group({
                  'nombre' : new FormControl("", [Validators.required, Validators.minLength(2)]),
                  'n_usuario' : new FormControl("", [Validators.required, Validators.minLength(4)]),
                  'password'  : new FormControl("", [Validators.required, Validators.minLength(8)]),
                  'email'     :new FormControl("",[Validators.required,])
                })}

  async MostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Muchas Gracias!',
      subHeader: this.newUsuario.nombre+'  , tus datos han sido registrados',
      message: 'Que tengas un gran día',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async Duplicidad(){
    const alerta = await this.alertController.create({ 
      header: 'Error..',
      message: 'Usuario ya en uso..',
      buttons: ['Ok']
     });
     alerta.present();
     return;
  }

  DispMenu(){
    this.menuController.open('first')
  }

  crearUsuario(){
    if (this.regForm.valid){
      this.authservice.GetUserById(this.regForm.value.n_usuario).subscribe(resp=>{
        this.userdata = resp;
        console.log(this.userdata);
        if (this.userdata.length === 0){
          this.newUsuario ={
            nombre: this.regForm.value.nombre,
            n_usuario: this.regForm.value.n_usuario,
            password: this.regForm.value.password,
            email: this.regForm.value.email,
            role:"Alumno",
            isactive: true
          }
            this.apiCrud.CrearUsuario(this.newUsuario).subscribe();
            this.MostrarMensaje()
            this.regForm.reset();
        }
        else{
          this.Duplicidad();
          this.regForm.reset();
        }
      })
    }
  }
}