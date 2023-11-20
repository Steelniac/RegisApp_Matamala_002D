import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, MenuController } from '@ionic/angular';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { LoadingController } from '@ionic/angular';
import { IHorarios } from '../interfaces/interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alert',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})

export class AlertPage{

  horarios:IHorarios[]=[];

  usuario={
    id:0,
    nombre: sessionStorage.getItem('nombre')
  }

  constructor(private menuController: MenuController,
              private loadingCTRL : LoadingController,
              private apiCrud : ApiCrudService,
              private router : Router) { }

  ionViewWillEnter(){
    this.loadHorario();
  } 

  async loadHorario(event?: InfiniteScrollCustomEvent){

    const loading = await this.loadingCTRL.create({
      message: "Cargando...",
      spinner: "bubbles"
    });
    await loading.present();

    this.apiCrud.listarHorarios().subscribe(
      {
        next: resp=>{
          console.log(resp);
          loading.dismiss();
          let listString = JSON.stringify(resp)
          this.horarios=JSON.parse(listString)
          event?.target.complete();
          console.log(this.horarios); 
        },
        error: err =>{
          console.log(err.error.message);
          loading.dismiss();
        }
      }
    )
  }
  DispMenu(){
    this.menuController.open('first')
  }
}