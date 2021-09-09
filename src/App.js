import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormalarioCadastro";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";

import './assets/App.css';
import './assets/index.css';

class App extends Component {

  constructor(){
    super();
   
    this.state = {
      notas:[]
    }
  }

  criarNota(titulo,texto){
    const novaNota = {titulo, texto}
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado);
  }

  deletaNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas:arrayNotas});
  }

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas 
          apagarNota={this.deletaNota.bind(this)}
          notas={this.state.notas} 
        />
      </section>
    );
  }
}

export default App;
