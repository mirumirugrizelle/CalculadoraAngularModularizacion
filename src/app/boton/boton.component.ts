import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Input() operandoA!: number;
  @Input() operandoB!: number;
  resultado!:number;
  constructor() { }

  @Output() enviar: EventEmitter<number> = new EventEmitter<number>();
  suma(operandoA:number, operandoB:number) {
    this.resultado = operandoA + operandoB;
    this.enviar.emit(this.resultado);
  }

  ngOnInit(): void {
  }

}
