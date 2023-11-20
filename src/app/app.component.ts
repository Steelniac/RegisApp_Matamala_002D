import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon:string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

constructor(private menuController: MenuController) {}
  opciones : Componente[]=[
  {
    icon: 'person-outline',
    name:'Inicio',
    redirecTo: '/principal'
  },
  {
    icon: 'help-outline',
    name:'¿Qué es RegisAPP?',
    redirecTo: '/about'
  },
  {
    icon: 'cloudy-night-outline',
    name:'Api Clima',
    redirecTo: '/clima'
  },

]

logout(){
  sessionStorage.setItem('nombre', '');
  sessionStorage.setItem('n_usuario', '');
  sessionStorage.setItem('role', '');
  sessionStorage.setItem('ingresado', 'false');
  sessionStorage.clear();
  this.menuController.close('first');
}

}
