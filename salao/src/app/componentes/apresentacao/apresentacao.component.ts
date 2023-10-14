import { Component, OnInit, Input } from '@angular/core';
import { Servicos } from '../../services';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.css']
})
export class ApresentacaoComponent implements OnInit {

    listServices: Servicos[] = [];

    constructor(private services: ServicesService){}

  ngOnInit(): void {
    this.services.getServices().subscribe((listServices) => {
        this.listServices = listServices;
        console.log(listServices)
    })
  }
  
}

