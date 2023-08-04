import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { ApresentacaoComponent } from './componentes/apresentacao/apresentacao.component';
import { AdministracaoComponent } from './componentes/ADM/administracao/administracao.component';
import { AdicionarServicoComponent } from './componentes/ADM/adicionar-servico/adicionar-servico.component';
import { EditarServicoComponent } from './componentes/ADM/editar-servico/editar-servico.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    ApresentacaoComponent,
    AdministracaoComponent,
    AdicionarServicoComponent,
    EditarServicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
