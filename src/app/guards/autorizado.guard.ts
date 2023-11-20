import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutorizadoGuard{

  constructor(private authserv: AuthService,
              private toast: ToastController,
              private router: Router){}

  canActivate():
              | Observable<boolean | UrlTree | Promise<boolean> | UrlTree> | boolean | UrlTree{
                if(!this.authserv.IsLoggedIn()){
                  this.showToast('Debes estar iniciado');
                  this.router.navigate(['/inicio']);
                  return false;
                }
                this.authserv.IsLoggedIn();
                return true;
              }
    
  async showToast(msg: any){
    const toast = await this.toast.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
  }
