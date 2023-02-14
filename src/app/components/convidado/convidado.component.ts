import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-convidado',
  templateUrl: './convidado.component.html',
  styleUrls: ['./convidado.component.css']
})
export class ConvidadoComponent implements OnInit {
  @Input() convidado = '';
  @Output() emitirConvidado = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  excluirConvidado() {
    this.emitirConvidado.emit(this.convidado);
  }

}
