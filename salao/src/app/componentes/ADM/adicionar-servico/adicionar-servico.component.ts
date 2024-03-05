import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Servicos } from 'src/app/services';
import { ServicesService } from 'src/app/services.service';
import Swal from 'sweetalert2';

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

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.servicos.imagem = file;
  }

  onSaveService(services: Servicos): void {
    const formData = new FormData();
    formData.append("tipo", services?.tipo ?? '');
    formData.append("nome", services?.nome ?? '');
    formData.append("preco", services?.preco ?? '');
    formData.append("descricao", services?.descricao ?? '');
    formData.append("imagem", services?.imagem ?? '');


    Swal.fire({
      title: "Confirme se deseja cadastrar as informações",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Cadastrar",
      denyButtonText: `Não Cadastrar`
    }).then((result) => {
      if (result.isConfirmed) {
        this.servico.CreateServices(formData).subscribe((response) => {
          console.log(response);
          
          Swal.fire({
            title: "Serviço adicionado com sucesso!",
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: 'Voltar'
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['./administracao']);
            }
          });
        }, (error: any) => {
          console.log(error);
          Swal.fire({
            title: "Serviço não foi adicionado!",
            text: error,
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: 'Voltar'
          });
        });
      } else if (result.isDenied) {
        Swal.fire("As informações não foram salvas", "");
      }
    });
  }

  onUpdateService(services: Servicos): void {
    const formData = new FormData();
    formData.append("tipo", services?.tipo ?? '');
    formData.append("nome", services?.nome ?? '');
    formData.append("descricao", services?.descricao ?? '');
    formData.append("preco", services?.preco ?? '');
    formData.append("imagem", services?.imagem ?? '');

    Swal.fire({
      title: "Confirme se deseja atualizar as informações",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Atualizar",
      denyButtonText: `Cancelar`
    }).then((result) => {
      if (result.isConfirmed) {
        this.servico.EditServices(formData, services.id).subscribe((response) => {
          console.log(response);
          
          Swal.fire({
            title: "Serviço atualizado com sucesso!",
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: 'Voltar'
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['./administracao']);
            }
          });
        }, (error: any) => {
          console.log(error);
          Swal.fire({
            title: "Falha ao atualizar o serviço!",
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: 'Voltar'
          });
        });
      } else if (result.isDenied) {
        Swal.fire("Atualização cancelada", "");
      }
    });
  }

}
