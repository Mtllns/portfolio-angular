import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor( private http: HttpClient ) { 

      this.cargarProjects();

  }

  private cargarProjects() {
    this.http.get('https://angular-portfolio-fd1a9.firebaseio.com/proyectos.json')

  }

}
