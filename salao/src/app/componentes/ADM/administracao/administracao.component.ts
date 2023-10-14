import { Component } from '@angular/core';
import { Servicos } from 'src/app/services';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-administracao',
  templateUrl: './administracao.component.html',
  styleUrls: ['./administracao.component.css']
})
export class AdministracaoComponent {
      listServices: Servicos[] = [];

      constructor(private services: ServicesService){}

      ngOnInit(): void {
        this.services.getServices().subscribe((listServices) => {
            this.listServices = listServices;
            console.log(listServices)
        })
    }
}
