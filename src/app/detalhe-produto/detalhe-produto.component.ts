import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Produto } from '../model/produto.model';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit, OnChanges {

  @Input() item : number;
  produto : Produto;
  @Output() fecharComponente = new EventEmitter<String>();


  constructor(private data : DatabaseService) { }

  ngOnInit(): void {
    this.produto = this.data.getProduto(this.item);
   }

   ngOnChanges(changes: SimpleChanges): void {
    this.produto = this.data.getProduto(this.item);
   }



  fechar() : void {
    this.fecharComponente.emit(`Fechando o produto '${this.produto.name}'`);
  }

}
