import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoletinsComponent } from './boletins/boletins.component';
import { ClassificacaoComponent } from './classificacao/classificacao.component';

const routes: Routes = [{ path: '', component: BoletinsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
