import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pag.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  proyectos: any[] = [];

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarProyectos();

  }

  private cargarInfo(){
    // console.log('Servicio de info pag cargado');

    // Leer archivo JSON
    this.http.get('assets/data/data-pagina.json')
        .subscribe ( (resp: InfoPagina) => {

          this.cargada = true;
          this.info = resp;

        });
  }

  private cargarProyectos() {

    this.http.get('https://angular-portfolio-fd1a9.firebaseio.com/proyectos.json')
    .subscribe( (resp: any[]) => {

          this.proyectos = resp;
          // console.log(this.proyectos);

        });
  }


}
