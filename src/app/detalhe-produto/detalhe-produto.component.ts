import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../model/produto.model';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  @Input() item : Produto;
  @Output() fecharComponente = new EventEmitter<String>();


  constructor() { }

  ngOnInit(): void {

   }

  fechar() : void {
    this.fecharComponente.emit(`Fechando o produto '${this.item.name}'`);
  }

}
