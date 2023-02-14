import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'novo-projeto';

  listaDeConvidados = [
    `Carson Jenkins`,
    `Nathaly Floyd`,
    `Roderick Curry`,
  ]

  excluirConvidado(convidado: string){
    const index = this.listaDeConvidados.indexOf(convidado)
    this.listaDeConvidados.splice(index, 1)
  }
}
