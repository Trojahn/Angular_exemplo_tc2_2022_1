import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';

const routes : Routes = [
  {path: "produtos", component: ListaProdutosComponent},
  {path: "detalhes/:index", component: DetalheProdutoComponent},
  {path: "", redirectTo: "/produtos", pathMatch: "full"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
