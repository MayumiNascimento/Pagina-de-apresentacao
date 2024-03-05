import { Component, OnInit, Input } from '@angular/core';
import { Servicos } from '../../app/services';
import { ServicesService } from 'src/app/services.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.css']
})
export class ApresentacaoComponent implements OnInit {

    listServices: Servicos[] = [];
    listIMG: any[] = [] 

    constructor(private services: ServicesService, private sanitizer: DomSanitizer){}

ngOnInit(): void {
  this.services.getServices().subscribe((listServices) => {
      this.listServices = listServices;
    });

}

getImage(imageName: any) {

  return `http://localhost:8000/storage/${imageName}`;
}

} 

