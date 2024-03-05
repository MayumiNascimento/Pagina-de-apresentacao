import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Servicos } from "./services";
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class ServicesService {

    constructor( private http: HttpClient){ }

    private readonly baseUrl = "http://localhost:8000/api/servicos";
    private readonly baseUrlIMG = "http://localhost:8000/";

    getImg(img: string): Observable<Servicos>{
        return this.http.get<Servicos>(`${this.baseUrlIMG}/storage/servicos_imagem/${img}`)
    }
    
    getServices(): Observable<Servicos[]>{
        return this.http.get<Servicos[]>(this.baseUrl); 
    }

    CreateServices(servicos: any): Observable<Servicos>{
        return this.http.post<Servicos>(`${this.baseUrl}/novo/`, servicos)
    }

    EditServices(id: any, servico: any): Observable<Servicos>{
        return this.http.put(`${this.baseUrl}/atualizar/${id}`, servico)

    }

    DeleteService(id: any) {
        return this.http.delete(`${this.baseUrl}/deletar/${id}`)
    }
}