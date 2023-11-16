import { Component } from '@angular/core';
import {Interpreter_user} from "../../shared/model/interpreter_user";
import {InterpreterService} from "../../services/interpreter.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-listas-interpreter',
  templateUrl: './listas-interpreter.component.html',
  styleUrls: ['./listas-interpreter.component.css']
})
export class ListasInterpreterComponent {
  interpretes: Interpreter_user[] = [];
  matricula_interpreter: string = "";
  pesquisados_interpreter: Interpreter_user[] = [];


  constructor(private interprete_service: InterpreterService, private roteador: Router) {
  }

  remover(interprete_remover: Interpreter_user): void {
    this.interprete_service.remover(interprete_remover).subscribe( interpreteRemover => {
        console.log('Interprete removido');
        const indxARemover = this.interpretes.findIndex(interpreter =>
          interpreter.matricula === interpreteRemover.matricula);

        if (indxARemover >= 0) {
          this.interpretes.splice(indxARemover, 1);
        }
      }
    );
  }
  pesquisar_interpreter() {
    this.interprete_service.pesquisar_Matricula_Interpreter(this.matricula_interpreter).subscribe(interpretes => {
      this.pesquisados_interpreter = interpretes;
    });
  }
  ngOnInit(){
    this.interprete_service.listas_interpreter().subscribe(interpretesRetornados => {
      this.interpretes = interpretesRetornados;
    });
  }

 // editar(interpretes: Interpreter_user[]) {}

    protected readonly Interpreter_user = Interpreter_user;
}
