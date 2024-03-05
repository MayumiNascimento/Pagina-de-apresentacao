import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApresentacaoComponent } from '../Pages/apresentacao/apresentacao.component';
import { AdministracaoComponent } from '../Pages/administracao/administracao.component';
import { EditarServicoComponent } from './componentes/ADM/editar-servico/editar-servico.component';
import { AdicionarServicoComponent } from './componentes/ADM/adicionar-servico/adicionar-servico.component';

const routes: Routes = [
  //rota principal / pathmath = full  :para reconhecer toda a url
  { path:"", redirectTo: "apresentacao", pathMatch: "full"},
  { path: "apresentacao", component: ApresentacaoComponent},

  // rotas de ADM
  { path: "administracao", component: AdministracaoComponent },
  { path: "cadastrar", component: AdicionarServicoComponent },
  { path: "editar/:id", component: AdicionarServicoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
