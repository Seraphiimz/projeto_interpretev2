import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CadastroInterpreterComponent} from "./cadastro-interpreter/cadastro-interpreter.component";
import {ListasInterpreterComponent} from "./listas-interpreter/listas-interpreter.component";
import {PipesModule} from "../shared/pipes/pipes.module";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    CadastroInterpreterComponent,
    ListasInterpreterComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,

  ],
  exports:[
    CadastroInterpreterComponent,
    ListasInterpreterComponent
  ]
})
export class InterpreterModule { }
