
import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Services } from "./services";

@Injectable({
    providedIn: 'root'
  })

export class ServicesService {

    constructor( private http: HttpClient){ }
    baseUrl: string = "https://localhost:000"

    getServices(){
        return this.http.get<Services>(this.baseUrl+'exemple'); //alterar para a devida rota, quando criada
    }

    getSingleService(id: any){
        return this.http.get<Services>(this.baseUrl+'exemple'+ id );
    }

    CreateServices(Services: any){
        return this.http.post(this.baseUrl+'exemple', Services)
    }

    EditServices(Services: any){
        return this.http.put(this.baseUrl+'exemple', Services)

    }

    DeleteService(id: any) {
        return this.http.delete(this.baseUrl+'exemple' + id)
    }
}