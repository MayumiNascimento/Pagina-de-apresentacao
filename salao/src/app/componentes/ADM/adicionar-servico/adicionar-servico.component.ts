import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Servicos } from 'src/app/services';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-adicionar-servico',
  templateUrl: './adicionar-servico.component.html',
  styleUrls: ['./adicionar-servico.component.css']
})
export class AdicionarServicoComponent implements OnInit {

  servicos: Servicos = {
    tipo:'',
    nome: '',
    descricao: '',
    imagem: '',
    preco: '',
  }

  constructor(private servico: ServicesService, private router: Router){}

  ngOnInit(): void {
    
  }

  criarServico(){
    this.servico.CreateServices(this.servicos).subscribe(() => {
      // this.router.navigate(['./administracao']);
    })
  }

}
