import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from './usuario.model';


@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})

export class DadosComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  caixinhaDeUsuario: UsuarioModel[] = [];
  exibirMensagem: boolean = false;

  constructor() {


  }

  ngOnInit(): void {


  }

  criarUsuario() {

    if (this.usuario.nome == '') {
      this.exibirMensagem = true;
      return;
    }

    if (this.usuario.idade == 0) {
      this.exibirMensagem = true;
      return;
    }

    if (this.usuario.skills == '') {
      this.exibirMensagem = true;
      return;

    }

    this.caixinhaDeUsuario.push(this.usuario);
    this.usuario = new UsuarioModel();
    console.log(this.caixinhaDeUsuario)

  }


}
