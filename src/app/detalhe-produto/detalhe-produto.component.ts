import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';
import { Produto } from '../model/produto.model';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {
  produto : Produto;

  // Foram removidos os parâmetros Input e Output. Consulte versão anterior do código se necessitar.

  constructor(private data : DatabaseService, private rota: ActivatedRoute) { }

  ngOnInit(): void {
    let index = parseInt(this.rota.snapshot.paramMap.get("index"));
    this.produto = this.data.getProduto(index);
   }
}
