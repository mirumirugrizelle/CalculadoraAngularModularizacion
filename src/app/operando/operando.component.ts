import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operando',
  templateUrl: './operando.component.html',
  styleUrls: ['./operando.component.css']
})
export class OperandoComponent implements OnInit {

  @Input() operandoA!: number;
  @Input() operandoB!: number;
  suma!: number;
  recibirSuma(numero:number){
    this.suma = numero;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
