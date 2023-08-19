import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.css']
})
export class ApresentacaoComponent {
  // private cards: any[] = [];
  // private currentIdx = 0;

  // constructor( private $http: ng.IHttpService) {
  //   this.loadCards();
  // }

  // private loadCards(){
  //   this.$http.get('https://jsonplaceholder.typicode.com/posts')
  //   .then((response: ng.IHttpResponse<any>) => {
  //     this.cards = response.data.slice(0,3);
  //   })
  //   .catch((error: any) => {
  //     console.error('erro em exibir', error)
  //   });
  // }

  // public PreviusCard(){
  //   this.currentIdx = (this.currentIdx - 1 + this.cards.length) % this.cards.length
  // }
  
  // public NextCard(){
  //   this.currentIdx = (this.currentIdx + 1) % this.cards.length;
  // }

}

