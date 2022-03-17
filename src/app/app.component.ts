import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo : string = 'IFSP - São Carlos';
  mensagem : string = "Seja bem vindo a disciplina de PW1";
  desenvolvedor : string = "Tiago";
}
