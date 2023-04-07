import React, { Component } from 'react';
class Equipe extends Component{
    render(){
        return(
            <div>
             <Sobre
              nome={this.props.nome}
              cargo={this.props.cargo}
              idade={this.props.idade}
              email={this.props.email}
              />
            </div>
        );
    }
}

class Sobre extends Component{
    render(){
        return(
            <div>
                <h2>Olá sou o(a) {this.props.nome}</h2>
                <h3>Cargo: {this.props.cargo}</h3>
                <h3>Idade: {this.props.idade}</h3>
                <h3>Email: {this.props.email}</h3>
                <hr/>
            </div>
        );
    }
}

function App(){
    return(
    <div>
        <h1>Conheça nossa equipe:</h1>
        <hr/>
        <Equipe nome="Igor" cargo="Programador" idade="21" email="mail1@gmail.com"/>
        <Equipe nome="Rayssa" cargo="Designer" idade="18" email="mail1@gmail.com"/>
        <Equipe nome="Maria" cargo="Financeiro" idade="28" email="mail1@gmail.com"/>
    </div>
    );
}

export default App;