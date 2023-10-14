import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Servicos } from "./services";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class ServicesService {

    constructor( private http: HttpClient){ }
    private readonly baseUrl = "http://localhost:8000/api/servicos";

    getServices(): Observable<Servicos[]>{
        return this.http.get<Servicos[]>(this.baseUrl); 
    }

    getSingleService(tipo: any){
        return this.http.get<Servicos>(this.baseUrl+ tipo );
    }

    CreateServices(servicos: Servicos): Observable<Servicos>{
        return this.http.post<Servicos>(this.baseUrl+"/novo", servicos)
    }

    EditServices(Servicos: any){
        return this.http.put(this.baseUrl+'exemple', Servicos)

    }

    DeleteService(id: any) {
        return this.http.delete(this.baseUrl+'exemple' + id)
    }
}